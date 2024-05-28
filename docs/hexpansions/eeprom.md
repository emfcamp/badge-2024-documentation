# Write an app to an EEPROM

!!! warning "This document is a work in progress. More details will be added as they become available."

If you want your EEPROM-equipped hexpansion to do something automatically, you need to [write some data to the EEPROM](#how-to-write-app-to-eeprom). The data consists of a header which contains hexpansion metadata, and a LittleFS file system which contains your application and data. The minimal application consists of a file called `app.py` that contains your code.

## How to write app to EEPROM

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
        eeprom_total_size=1024 * (16 // 8) // 8,
        vid=0xCA75,
        pid=0x1337,
        unique_id=0x0,
        friendly_name="Flopagon",
    )
    ```

    For more information see [EEPROM format](#eeprom-format).

5. The following [`mpremote`](https://docs.micropython.org/en/latest/reference/mpremote.html) command mounts the `modules` directory and runs the `prepare_eeprom.py` script from the locally mounted directory. The `prepare_eeprom.py` script flashes a header to the first page of the EEPROM:

    ```sh
    mpremote mount modules + run modules/scripts/prepare_eeprom.py
    ```

    `mpremote` should automatically detect the port the board is plugged into. If it doesn't, manually specify the port. For more information see the [`mpremote` reference docs](https://docs.micropython.org/en/latest/reference/mpremote.html#shortcuts).

    !!! note "Failed to decode header?"

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
7. _Optional_ but recommended to make apps faster and save space. Use [`mpy-cross`](https://pypi.org/project/mpy-cross/) to compile your python code:

    ```sh
    python -m mpy_cross path/to/your/app.py
    ```

8. Use `mpremote` to mount the module, then mount the storage on your hexpansion, and copy your app file to it, with the following command:

    ```sh
    mpremote mount modules + run modules/scripts/mount_hexpansions.py + cp path/to/your/app.mpy :/hexpansion_{YOUR-HEXPANSION-PORT-NUMBER}/app.mpy
    # For example:
    # mpremote mount modules + run modules/scripts/mount_hexpansions.py + cp sim/apps/snake/app.mpy :/hexpansion_1/app.mpy
    ```

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
    - This is a Vendor ID. Vendor IDs are assigned by the Unnecessary Hexpansion Bureaucracy Implementers Forum ([UHB-IF](https://badge.emfcamp.org/wiki/UHB-IF)). To obtain a Vendor ID, contact the UHB-IF at (location to be disclosed). If you don't want to do that, use a vendor ID from [here](https://badge.emfcamp.org/wiki/UHB-IF/Uncontrolled_IDs).
  - 2 bytes PID
    - This is a Product ID. If you have a Vendor ID, you can choose your own Product ID. If you are using the free-for-all Vendor ID, you will have to coordinate number assignments with other users on a wiki page (to be disclosed). Each hexpansion design with an EEPROM needs a unique VID/PID combination.
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

def calc_checksum(header): #header assumed to be of type bytes
    value=0x55
    for b in header[1:]:
        value= value ^ b
    return value

header_w_checksum = header+bytes([calc_checksum(header)]) #to generate a checksum

calc_checksum(header_w_checksum) # should return 0 if checksum is correct

```

The header format uses little-endian byte ordering for the individual values, e.g. 0x0123 = 0x01 as least significant byte and 0x23 as most significant byte, resulting in a value of 8961.

The LittleFS filesystem should start on a page boundary of the EEPROM. If your EEPROM has a page size larger than 32 bytes, this means there will be gap between the header and the filesystem. If your EEPROM has a page size smaller than 32 bytes, this means the header will use more than one page.

The filesystem should contain a file named `app.py` which contains MicroPython code conformant to the app framework API (to be disclosed). It may contain other Python files or data.

### Example

`b'THEX2024\x40\x00\\x40\x00\x00\x00\x01\x00\x55\xf0\x01\x00\x02\x00EXAMPLE\x00\x00\x8b'`

- Magic "THEX"
- Version "2024"
- Filesystem offset 64 bytes (0x4000)
- Filesystem page size 64 bytes (0x4000)
- Filesystem total size 64k (0x00000100)
- VID 0xf055
- PID 0x0001
- Unique ID in use, value 0x0002
- Friendly name is "EXAMPLE" (padded with zeroes)
- Checksum is 0x8b

(header length: 32 bytes)

followed by 32 bytes that are not used

followed by the LittleFS filesystem
