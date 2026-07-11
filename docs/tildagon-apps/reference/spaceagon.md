# Spaceagon

The EMF 2026 badge uses a new frontboard with a different physical layout from the 2024 badge.
It has:

- **6 buttons** labeled A-F arranged in a row
- a **5-way joystick** (`JOYUP`, `JOYDOWN`, `JOYLEFT`, `JOYRIGHT`, `JOYFIRE`)
- a **12-sensor touch strip** in clock format (`TOUCH1`-`TOUCH12`)
- **2 proximity sensors**  at the left and right hand sides (`LEFTPROX`, `RIGHTPROX`)
- a **compass** (see [IMU](tildagon-apps/reference/badge-hardware.md/#IMU) section)

## API

The inputs of the Spaceagon all generate the following events:

- `ButtonDownEvent`
- `ButtonUpEvent`

each with a type for each button available with BUTTON_TYPES:

### Buttons

<!-- prettier-ignore -->
| Button | Event Type | Name |
| ------ | ---------- | ---- |
| `"A"` | `BUTTON_TYPES["UP"]` and `FRONTBOARD_BUTTON_TYPES["A"]` | `"A"` |
| `"B"` | `BUTTON_TYPES["RIGHT"]` and `FRONTBOARD_BUTTON_TYPES["B"]` | `"B"` |
| `"C"` | `BUTTON_TYPES["CONFIRM"]` and `FRONTBOARD_BUTTON_TYPES["C"]` | `"C"` |
| `"D"` | `BUTTON_TYPES["DOWN"]` and `FRONTBOARD_BUTTON_TYPES["D"]` | `"D"` |
| `"E"` | `BUTTON_TYPES["LEFT"]` and `FRONTBOARD_BUTTON_TYPES["E"]` | `"E"` |
| `"F"` | `BUTTON_TYPES["CANCEL"]` and `FRONTBOARD_BUTTON_TYPES["F"]` | `"F"` |

### Joystick

Using the `BUTTON_TYPES` types makes your code compatible with both buttons and joystick, whereas the `FRONTBOARD_BUTTON_TYPES` and `JOYSTICK_BUTTON_TYPES` will only respond to usage from the buttons or joystick respectively.

<!-- prettier-ignore -->
| Direction | Event Type | Name |
| --------- | ---------- | ---- |
| `"Up"` | `BUTTON_TYPES["UP"]` and `JOYSTICK_BUTTON_TYPES["UP"]` | `"JOYUP"` |
| `"Down"` | `BUTTON_TYPES["DOWN"]` and `JOYSTICK_BUTTON_TYPES["DOWN"]` | `"JOYDOWN"` |
| `"Left"` | `BUTTON_TYPES["LEFT"]` and `JOYSTICK_BUTTON_TYPES["LEFT"]` | `"JOYLEFT"` |
| `"Right` | `BUTTON_TYPES["RIGHT"]` and `JOYSTICK_BUTTON_TYPES["RIGHT"]` | `"JOYRIGHT"` |
| `"Fire"` | `BUTTON_TYPES["CONFIRM"]` and `JOYSTICK_BUTTON_TYPES["SELECT"]` | `"JOYFIRE"` |

### Touch

<!-- prettier-ignore -->
| Touchpad | Event Type |
| -------- | ---------- |
| `"Touch01"` | `"TOUCH01"` |
| `"Touch02"` | `"TOUCH02"` |
| `"Touch03"` | `"TOUCH03"` |
| `"Touch04"` | `"TOUCH04"` |
| `"Touch05"` | `"TOUCH05"` |
| `"Touch06"` | `"TOUCH06"` |
| `"Touch07"` | `"TOUCH07"` |
| `"Touch08"` | `"TOUCH08"` |
| `"Touch09"` | `"TOUCH09"` |
| `"Touch10"` | `"TOUCH10"` |
| `"Touch11"` | `"TOUCH11"` |
| `"Touch12"` | `"TOUCH12"` |

### Proximity

<!-- prettier-ignore -->
| Sensor | Event Type |
| ------ | ---------- |
| `"Left"` | `"LEFTPROX"` |
| `"Right"` | `"RIGHTPROX"` |

### Usage

As for the 2024 front board, there are three ways to get the button that triggered the event. This is through either the event types listed above using the system buttons as follows:

```python
if BUTTON_TYPES["CONFIRM"] in event.button:
    print("Confirm pressed!")
```

or using the source group:

```python
if JOYSTICK_BUTTON_TYPES["SELECT"] in event.button:
    print("Select pressed!")
```

or using the individual button names:

```python
if "FIRE" in event.button.name:
    print("Fire pressed!")
```

Using just "FIRE" and not "JOYFIRE" means if there's another input with FIRE in the name it will work with your app.

## Frontboard Identification

<!-- prettier-ignore -->
| Method | Description | Returns |
| ------ | ----------- | ------- |
| `detect_frontboard()` | Identifies which frontbboard is attached and provisions a blank frontboard based on the devices present. | `id`: 0x26XX for the Spaceagon, 0x2400 for the 2024 frontboard. Defaults to 0x2400. |

### Usage

```python
from frontboard.utils import detect_frontboard

frontboard = detect_frontboard()
```
