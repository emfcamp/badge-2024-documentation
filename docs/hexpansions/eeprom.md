# EEPROM apps and firmware updates

If you want your EEPROM-equipped hexpansion to do something automatically, you need to write data to the EEPROM. That data consists of:

- a **header**: hexpansion metadata, including VID/PID.
- a **LittleFS filesystem**: your application and data. The minimal application is a file called `app.py`.

There are two ways to get that data onto the EEPROM:

1. **Flash locally** with a computer and `mpremote`. Use this for first-time setup, development, and hexpansions that are **not in the firmware repository**.
2. **OTA update** using the **Hexpansions** app on the badge. Use this to flash many boards of the same type. To use this you must register your hexpansion in the [hexpansion-firmwares](https://github.com/emfcamp/hexpansion-firmwares) repository.

Both approaches write the same header and filesystem.

## VID and PID

Every hexpansion with an EEPROM needs a unique VID/PID combination. These are stored in the [EEPROM header](#eeprom-format) and are how the badge knows which app to load. They are also how the firmware repository manages over-the-air (OTA) updates.

- **VID (Vendor ID)**: a 2-byte identifier for the maker/vendor of the hexpansion.
- **PID (Product ID)**: a 2-byte identifier for a specific hexpansion design by that vendor.

### Getting a VID and PID

There are two routes depending on how many different hexpansion types you plan to make.

### Option 1: Use a shared vendor ID (recommended for most people)

Two shared vendor IDs are open for anyone to use:

| VID      | Who can use it             |
|----------|----------------------------|
| `0xCAFE` | Anyone                     |
| `0xF055` | Open-source hardware only  |

To get a PID within one of these shared vendors, [open an issue](https://github.com/emfcamp/hexpansion-firmwares/issues/new?template=product_id.yml) on the hexpansion-firmwares repository. A pull request will be automatically opened and merged to create a directory for your hexpansion.

### Option 2: Create your own vendor ID

If you plan to make many different hexpansion types, you can register your own VID. [Open an issue](https://github.com/emfcamp/hexpansion-firmwares/issues/new?template=vendor_id.yml) to claim a 4 hex digit vendor identifier.

Once you have your own VID, you can assign PIDs yourself by creating subfolders in your vendor directory with a pull request.

## Setting up your hexpansion in the firmware repository

Once you have a VID/PID allocated, create an `eeprom.json` file in your hexpansion's directory in the [hexpansion-firmwares](https://github.com/emfcamp/hexpansion-firmwares) repository. This specifies the EEPROM header contents:

```json
{
  "manifest_version": "2024",
  "fs_offset": 32,
  "eeprom_page_size": 32,
  "eeprom_total_size": 8192,
  "vid": "0xCAFE",
  "pid": "0x0101",
  "unique_id": 0,
  "friendly_name": "My Hexpansion"
}
```

You can also add Python files (e.g. `app.py`) to the same directory to populate the EEPROM filesystem.

!!! tip "Compiling to `.mpy`"
    To reduce the size of your app, create a file called `USE_MPY` in your hexpansion directory. All `.py` files will be automatically compiled to `.mpy` by the CI. Do not upload manually compiled `.mpy` files.

You must set up your hexpansion in the firmware repo if you want to use OTA firmware updates. If you only intend to use local flashing, you can still put the same header values into `prepare_eeprom.py` (see below) without publishing to the repo first. You must still register a VID/PID to avoid clashes with other hexpansions.

## Flash locally with mpremote

Use this when you are developing, provisioning a board that is not yet in the firmware repository, or prefer a manual flashing process.

1. Attach the hexpansion to the badge and connect the badge to your computer.
2. Clone the [`badge-2024-software`](https://github.com/emfcamp/badge-2024-software) repo and `cd` into it.
3. Modify the port in the [`prepare_eeprom.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/scripts/prepare_eeprom.py) script:

   ```python
   # Set up i2c
   port = 2  # <<-- Customize!!
   i2c = I2C(port)
   ```

4. Adjust the header information as you desire:

   ```python
   # Fill in your desired header info here:
   header = HexpansionHeader(
       manifest_version="2024",
       fs_offset=32,
       eeprom_page_size=16,
       eeprom_total_size=256,  # 2 kbit EEPROM (1024 * (16 // 8) // 8)
       vid=0xCA75,
       pid=0x1337,
       unique_id=0x0,
       friendly_name="Flopagon",
   )
   ```

   ??? tip "Setting `eeprom_total_size`"

       `eeprom_total_size` is the total filesystem size in **bytes**. Set it to match your EEPROM chip — check the datasheet for the capacity in bits, then divide by 8.

       In MicroPython, `//` is integer division. The final `// 8` in any formula converts bits to bytes. The `(16 // 8)` term relates to the 16-byte page size, but once you know your chip's capacity you can set the value directly.

       The example above uses a **2 kbit** EEPROM (2048 bits = 256 bytes):

       ```python
       eeprom_total_size=256
       # same as: 1024 * (16 // 8) // 8
       ```

       For other chips, substitute your EEPROM's bit capacity. For example, the **AT24C32** is a 32 kbit device (4096 bytes):

       ```python
       eeprom_total_size=4096
       # or: 32768 // 8
       # or: (32 * 1024) // 8
       ```

   For more information see [EEPROM format](#eeprom-format).

5. The following [`mpremote`](https://docs.micropython.org/en/latest/reference/mpremote.html) command mounts the `modules` directory and runs the `prepare_eeprom.py` script from the locally mounted directory. The `prepare_eeprom.py` script flashes a header to the first page of the EEPROM:

   ```sh
   mpremote mount modules + run modules/scripts/prepare_eeprom.py
   ```

   `mpremote` should automatically detect the port the board is plugged into. If it doesn't, manually specify the port. For more information see the [`mpremote` reference docs](https://docs.micropython.org/en/latest/reference/mpremote.html#shortcuts).

??? note "Failed to decode header?"

    If you are receiving this error, try to change this code

    ```python
    write_header(
        port, header, addr=addr, addr_len=addr_len, page_size=header.eeprom_page_size
    )
    ```

    to

    ```python
    i2c.writeto(addr, bytes([0, 0]) + header.to_bytes())
    ```

    and run the command again.

6. The following [`mpremote`](https://docs.micropython.org/en/latest/reference/mpremote.html) command mounts the `modules` directory and runs the `mount_hexpansion` script to mount the storage on your hexpansion, and then copies your app file from the provided location to `/hexpansion_1/app.py`:

   ```sh
   mpremote mount modules + run modules/scripts/mount_hexpansions.py + cp path/to/your/app.py :/hexpansion_{YOUR-HEXPANSION-PORT-NUMBER}/app.py
   # For example:
   # mpremote mount modules + run modules/scripts/mount_hexpansions.py + cp sim/apps/snake/app.py :/hexpansion_1/app.py
   ```

## Bulk provisioning

If you need to flash many hexpansions that have firmwares in the repository, the Hexpansions app supports bulk provisioning. Watch the [demo on YouTube](https://www.youtube.com/watch?v=tUfV64_XQLg).

## OTA updates using the Hexpansions app

Once your hexpansion is in the [hexpansion-firmwares](https://github.com/emfcamp/hexpansion-firmwares) repository, the **Hexpansions** app on any badge with firmware 2.0 or newer can download the latest files for that VID/PID and re-flash the EEPROM. This workflow is useful for already shipped boards or for flashing several boards of the same type.

!!! note "This is a re-flash, not an incremental update"
    The update process replaces the contents of the EEPROM filesystem entirely. The user must explicitly trigger it from the Hexpansions menu. It does not happen automatically.

To publish a new version of your hexpansion app:

1. Open a pull request against your hexpansion's directory in [hexpansion-firmwares](https://github.com/emfcamp/hexpansion-firmwares).
2. Pull requests against your own VID/PID are automatically approved and merged.
3. Pull requests from other people will ping you for approval. Comment `/approve` to accept them. If you want to grant someone else maintainer rights over your hexpansion, add them to `.github/CODEOWNERS` via a pull request. The EMF Badge team can override the creator for any hexpansion firmware if necessary.

### Versioning your app

Because users have to manually trigger updates, it's a good idea to add a version identifier to your app so it can detect when it's out of date. For example, you could store a version string and display a notice if it doesn't match a value fetched from the network:

```python
APP_VERSION = "1.0.0"
```

You can then check this on startup and prompt the user to update using the Hexpansions menu if a newer version is available.

## EEPROM format

The badge will look for EEPROMs on the following I2C addresses:

- 0x57
- 0x50

The header is 32 bytes long and contains the following values:

- Magic (offset 0, length 4):
  - ASCII `THEX`
    - This must match exactly
- Manifest version (offset 4, length 4):
  - ASCII `2024`
    - This must match exactly
- Filesystem info (offset 8, length 8):
  - 2 bytes offset (bytes from beginning of EEPROM)
    - This is the number of bytes from the start of the EEPROM to the start of the LittleFS filesystem. It must be a multiple of the EEPROM page size, and greater or equal to 32.
  - 2 bytes page size (EEPROM page size in bytes)
    - As specified in the EEPROM datasheet
  - 4 bytes total size (total filesystem size in bytes)
- VID/PID (offset 16, length 4)
  - 2 bytes VID
    - A Vendor ID. See [VID and PID](#vid-and-pid).
  - 2 bytes PID
    - A Product ID for this hexpansion design under that vendor. Each hexpansion with an EEPROM needs a unique VID/PID combination. See [VID and PID](#vid-and-pid).
- Unique ID (offset 20, length 2)
  - 0x0000 if unused, otherwise unique ID
    - This may be used to identify individual hexpansion instances of the same kind. Leave at zero if not using, otherwise ensure each hexpansion instance has a unique value.
- Friendly name (offset 22, length 9, padded with 0x00)
  - This is an ASCII string containing a name to be displayed in menus and prompts so that users can identify the hexpansion. It can contain up to nine characters, and unused characters should be set to 0x00.
- Checksum (offset 31, length 1)

  - This is a checksum calculated by the following algorithm:

  1. Start with a variable S with the value 0x55
  2. For each byte B of the header **except the first byte**, S = B xor S. The first byte (index 0) is ignored. Only bytes with index 1-30 are used.
  3. When all 30 bytes have been processed, store the result in the checksum position.

  An example implementation of the checksum algorithm in Python:

```python
def calc_checksum(header):  # header assumed to be of type bytes
    value = 0x55
    for b in header[1:]:
        value = value ^ b
    return value


# to generate a checksum
header_w_checksum = header+bytes([calc_checksum(header)])

calc_checksum(header_w_checksum)  # should return 0 if checksum is correct
```

The header format uses little-endian byte ordering for the individual values, e.g. 0x0123 = 0x01 as least significant byte and 0x23 as most significant byte, resulting in a value of 8961.

The LittleFS filesystem should start on a page boundary of the EEPROM. If your EEPROM has a page size larger than 32 bytes, this means there will be gap between the header and the filesystem. If your EEPROM has a page size smaller than 32 bytes, this means the header will use more than one page.

The filesystem should contain a file named `app.py` which contains MicroPython code conformant to the app framework API. It may contain other Python files or data.

### Example

`b'THEX2024\x40\x00\x40\x00\x00\x00\x01\x00\x55\xf0\x01\x00\x02\x00EXAMPLE\x00\x00\xeb'`

- Magic "THEX"
- Version "2024"
- Filesystem offset 64 bytes (0x0040)
- Filesystem page size 64 bytes (0x0040)
- Filesystem total size 64k (0x00010000)
- VID 0xf055
- PID 0x0001
- Unique ID in use, value 0x0002
- Friendly name is "EXAMPLE" (padded with zeroes)
- Checksum is 0xeb

(header length: 32 bytes)

followed by 32 bytes that are not used

followed by the LittleFS filesystem
