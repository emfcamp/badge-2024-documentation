# Spaceagon

The frontboard for 2026 is the Spaceagon!

## Features

- 6 Buttons
- 5 position joystick
- 12 touch sensors in a clock format
- 2 proximity sensors at the left and right hand sides
- Compass, this has been added to the [IMU](tildagon-apps/reference/badge-hardware.md/#IMU) section

## Api

The inputs of the Spaceagon all generate the following events:

- `ButtonDownEvent`
- `ButtonUpEvent`

each with a type for each button available with BUTTON_TYPES:

### Buttons

<!-- prettier-ignore -->
| Button | Event Type | Name |
| ------ | ---------- | ---- |
| `"A"` | `"UP"` | `"A"` |
| `"C"` | `"RIGHT"` | `"C"` |
| `"D"` | `"CONFIRM"` | `"D"` |
| `"E"` | `"DOWN"` | `"E"` |
| `"F"` | `"LEFT"` | `"F"` |
| `"G"` | `"CANCEL"` | `"G"` |

### Joystick

<!-- prettier-ignore -->
| Direction | Event Type | Name |
| --------- | ---------- | ---- |
| `"Up"`  | `"UP"` | `"JOYUP"` |
| `"Down"` | `"DOWN"` | `"JOYDOWN"` |
| `"Left"` | `"LEFT"` | `"JOYLEFT"` |
| `"Right` | `"RIGHT"` | `"JOYRIGHT"` |
| `"Fire"`  | `"CONFIRM"` | `"JOYFIRE"` |

### Touch

<!-- prettier-ignore -->
| Touchpad | Event Type |
| -------- | ---------- |
| `"Touch1"` | `"TOUCH1"` |
| `"Touch2"` | `"TOUCH2"` |
| `"Touch3"` | `"TOUCH3"` |
| `"Touch4"` | `"TOUCH4"` |
| `"Touch5"` | `"TOUCH5"` |
| `"Touch6"` | `"TOUCH6"` |
| `"Touch7"` | `"TOUCH7"` |
| `"Touch8"` | `"TOUCH8"` |
| `"Touch9"` | `"TOUCH9"` |
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

As for the 2024 front board, there are two ways to get the button that triggered the event. This is through either the event types listed above using the system buttons as follows:

```python
if BUTTON_TYPES["CANCEL"] in event.button:
    print("Cancel pressed!")
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
| `detect_frontboard()` | Identifies which frontbboard is attached and provisions a blank frontboard based on the devices present. | `id`: 0x2600 for the Spaceagon, 0x2400 for the 2024 frontboard. Defaults to 0x2400. |

### Usage

```python
from frontboard.utils import detect_frontboard

frontboard = detect_frontboard()
```
