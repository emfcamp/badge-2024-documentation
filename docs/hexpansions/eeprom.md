# Eeprom format

!!! warning "This document is a work in progress. More details will be added as they become available."

If you want your eeprom-equipped hexpansion to do something automatically, you need to write some data to the eeprom. The data consists of a header which contains hexpansion metadata and a littlefs file system which contains your application and data. The minimal application consists of a file called `app.py` that contains your code.

The badge will look for eeproms on the following i2c addresses:

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
  - 2 bytes offset (bytes from beginning of eeprom)
    - This is the number of bytes from the start of the eeprom to the start of the littlefs filesystem. It must be a multiple of the eeprom page size, and greater or equal to 32.
  - 2 bytes page size (eeprom page size in bytes)
    - As specified in the eeprom datasheet
  - 4 bytes total size (total filesystem size in bytes)
- VID/PID (offset 16, length 4)
  - 2 bytes VID
    - This is a Vendor ID. Vendor IDs are assigned by the Unnecessary Hexpansion Bureaucracy Implementers Forum ([UHB-IF](https://badge.emfcamp.org/wiki/UHB-IF)) To obtain a Vendor ID, contact the UHB-IF at (location to be disclosed). If you don't want to do that, use a vendor ID from [here](https://badge.emfcamp.org/wiki/UHB-IF/Uncontrolled_IDs).
  - 2 bytes PID
    - This is a Product ID. If you have a Vendor ID, you can choose your own Product ID. If you are using the free-for-all Vendor ID, you will have to coordinate number assignments with other users on a wiki page (to be disclosed). Each hexpansion design with an eeprom needs a unique VID/PID combination.
- Unique ID (offset 20, length 2)
  - 0x0000 if unused, otherwise unique ID
    - This may be used to identify individual hexpansion instances of the same kind. Leave at zero if not using, otherwise ensure each hexpansion instance has a unique value.
- Friendly name (offset 22, length 9, padded with 0x00)
  - This is an ASCII string containing a name to be displayed in menus and prompts so that users can identify the hexpansion. It can contain up to nine characters, and unused characters should be set to 0x00.
- Checksum (offset 31, length 1)

  - This is a checksum calculated by the following algorithm:

  1. Start with a variable S with the value 0x55
  2. for each byte B of the header **except the first byte**, S = B xor S. The first byte (index 0) is ignored. Only bytes with index 1-30 are used.
  3. when all 30 bytes have been processed, store the result in the checksum position

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

The header format uses little-endian byte ordering for the individual values, e.g. 0x0123 = 0x01 as least significant byte and 0x23 as most significant byte, resulting in a value of 8961

The Littlefs filesystem should start on a page boundary of the eeprom. If your eeprom has a page size larger than 32 bytes, this means there will be gap between the header and the filesystem. If your eeprom has a page size smaller than 32 bytes, this means the header will use more than one page.

The filesystem should contain a file named `app.py` which contains micropython code conformant to the app framework API (to be disclosed). It may contain other Python files or data.

# Example

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

followed by the littlefs filesystem
