# Badge hardware overview

## LEDs

You can use the board's LEDs with the [`tildagonos`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/tildagonos.py) package:

### Example

This example app lights up the LEDs closest to a button when a button is pressed.

```python
import app

from app_components import clear_background
from events.input import Buttons, BUTTON_TYPES
from tildagonos import tildagonos
from system.eventbus import eventbus
from system.patterndisplay.events import PatternDisable


class LEDExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)

        # This disables the patterndisplay system module, which does the
        # default colour spinny thing
        eventbus.emit(PatternDisable())

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["RIGHT"]):
            tildagonos.leds[2] = (255, 0, 0)
            tildagonos.leds[3] = (255, 0, 0)
        elif self.button_states.get(BUTTON_TYPES["LEFT"]):
            tildagonos.leds[8] = (0, 255, 0)
            tildagonos.leds[9] = (0, 255, 0)
        elif self.button_states.get(BUTTON_TYPES["UP"]):
            tildagonos.leds[12] = (0, 0, 255)
            tildagonos.leds[1] = (0, 0, 255)
        elif self.button_states.get(BUTTON_TYPES["DOWN"]):
            tildagonos.leds[6] = (255, 255, 0)
            tildagonos.leds[7] = (255, 255, 0)
        elif self.button_states.get(BUTTON_TYPES["CANCEL"]):
            tildagonos.leds[10] = (0, 255, 255)
            tildagonos.leds[11] = (0, 255, 255)
        elif self.button_states.get(BUTTON_TYPES["CONFIRM"]):
            tildagonos.leds[4] = (255, 0, 255)
            tildagonos.leds[5] = (255, 0, 255)
        else:
            for i in range(0, 12):
                tildagonos.leds[i+1] = (0, 0, 0)

    def draw(self, ctx):
        clear_background(ctx)


__app_export__ = LEDExampleApp
```

You can see a more comprehensive example in the [`intro_app.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/intro_app.py).

### Usage

To use the LEDs:

1. Import the `tildagonos` package:

   ```python
   from tildagonos import tildagonos
   ```

2. Enable the LEDs (this step is generally optional, but needed if running outside of an app (or from repl):

   ```python
   tildagonos.set_led_power(True)
   ```

3. Set the LEDs by assigning a color tuple to one of the 12 LEDs:

   ```python
   tildagonos.leds[2] = (255, 0, 0)
   ```

4. Write the updated values to the LEDs

   ```python
   tildagonos.leds.write()
   ```

## Buttons

You can use the board's Buttons with the [`events.input`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/events/input.py) package:

### Example

This example app lights up the LEDs closest to a button when a button is pressed.

```python
import app

from app_components import clear_background
from events.input import Buttons, BUTTON_TYPES
from tildagonos import tildagonos


class LEDExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["RIGHT"]):
            tildagonos.leds[2] = (255, 0, 0)
            tildagonos.leds[3] = (255, 0, 0)
        elif self.button_states.get(BUTTON_TYPES["LEFT"]):
            tildagonos.leds[8] = (0, 255, 0)
            tildagonos.leds[9] = (0, 255, 0)
        elif self.button_states.get(BUTTON_TYPES["UP"]):
            tildagonos.leds[12] = (0, 0, 255)
            tildagonos.leds[1] = (0, 0, 255)
        elif self.button_states.get(BUTTON_TYPES["DOWN"]):
            tildagonos.leds[6] = (255, 255, 0)
            tildagonos.leds[7] = (255, 255, 0)
        elif self.button_states.get(BUTTON_TYPES["CANCEL"]):
            tildagonos.leds[10] = (0, 255, 255)
            tildagonos.leds[11] = (0, 255, 255)
        elif self.button_states.get(BUTTON_TYPES["CONFIRM"]):
            tildagonos.leds[4] = (255, 0, 255)
            tildagonos.leds[5] = (255, 0, 255)
        else:
            for i in range(0, 12):
                tildagonos.leds[i+1] = (0, 0, 0)

    def draw(self, ctx):
        clear_background(ctx)


__app_export__ = LEDExampleApp
```

### Usage

To use the buttons:

1. Import the `events.input` package:

   ```python
   from events.input import Buttons, BUTTON_TYPES
   ```

2. Initialize a variable to hold the `button_states` in the `__init__` method of your app:

   ```python
   def __init__(self):
       self.button_states = Buttons(self)
   ```

3. Check for `button_state`. You can access the different `BUTTON_TYPES` with the names `"UP"`, `"RIGHT"`, `"CONFIRM"`, `"DOWN"`, `"LEFT"`, `"CANCEL"`:

   ```python
    if self.button_states.get(BUTTON_TYPES["RIGHT"]):
        # do something
   ```

4. The `button_state` will continue returning true while the button is pressed. If you want to only do something once you can clear the `button_state` once the event has fired once:

   ```python
    if self.button_states.get(BUTTON_TYPES["RIGHT"]):
        self.button_states.clear()
        # do something
   ```

### Custom usage

You can also use the `ButtonDownEvent` and the `ButtonUpEvent` directly with an event handler that you register on the [`eventbus`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/system/eventbus.py).

1.  Import the `events.input` package:

    ```python
    from events.input import \
        Button, BUTTON_TYPES, ButtonDownEvent, ButtonUpEvent
    from system.eventbus import eventbus
    ```

2.  Add a method to handle the event:

    ```python
    def _handle_buttondown(self, event: ButtonDownEvent):
        if BUTTON_TYPES["CANCEL"] in event.button:
            self._cleanup()
            # perform other actions as needed

        if BUTTON_TYPES["CONFIRM"] in event.button:
            self._cleanup()
            # perform other actions as needed
    ```

3.  Add an event handler in the `__init__` method of your app with the event (`ButtonDownEvent` or `ButtonUpEvent`) and a function that should be called when the event happens. Depending on whether the event handler is a synchronous or asynchronous method call `on()` or `on_async`:

    ```python
    def __init__(self):
        eventbus.on(ButtonDownEvent, self._handle_buttondown, self.app)
        # eventbus.on_async(ButtonDownEvent, self._handle_buttondown, self.app)
    ```

4.  Remove the event handler when the app is minimised or closed:

    ```python
    def _cleanup(self):
        eventbus.remove(ButtonDownEvent, self._handle_buttondown, self.app)
    ```

    !!! warning

        Make sure you remove the event handler when the app is minimised or closed!

You can see a more comprehensive example in [`dialog.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py).

## Pins

Each hexpansion has:

- 5 low speed (LS) external GPIO (eGPIO) pins which you can use with the [`tildagon.Pin`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/tildagonos.py)
- 4 high speed (HS) GPIO pins which you can use with the `machine.Pin` library (12, 13, 18, 19)
- 6 GND pins (1, 10, 11, 14, 17, 20)
- 1 pin that detects insertion (6)
- 2 3.3V Power pins (15, 16)
- 1 SDA pin (Data) (4)
- 1 SCL pin (Clock) (5)

!!! warning

    eGPIO does not work correctly in version 1.6.0.

### Example

Select a hexpansion port, then press the **UP** button to toggle the eGPIO value `ls_1` or the **DOWN** button to toggle the GPIO value `hs_1`. You can see how to access an toggle the `Pin`s in the update methods:

```python
import app

from system.hexpansion.config import HexpansionConfig
from app_components import clear_background, Menu
from app_components.tokens import colors
from events.input import Buttons, BUTTON_TYPES
from math import pi

menu_items = ["1", "2", "3", "4", "5", "6"]


class ExampleApp(app.App):
    def __init__(self):
        self.menu = Menu(self, menu_items, select_handler=self.select_handler,
                         back_handler=self.back_handler)
        self.hexpansion_config = None
        self.button_states = Buttons(self)
        self.pins = {}

    def select_handler(self, item, idx):
        self.hexpansion_config = HexpansionConfig(idx+1)
        self.menu = None

    def back_handler(self):
        self.minimise()

    def update(self, delta):
        if self.hexpansion_config is None:
            self.menu.update(delta)

        if self.hexpansion_config and not self.pins:
            # eGPIO pins
            self.pins["ls_1"] = self.hexpansion_config.ls_pin[0]
            self.pins["ls_1"].init(self.pins["ls_1"].OUT)
            # GPIO pins
            self.pins["hs_1"] = self.hexpansion_config.pin[0]
            # All HS pins start in low mode. Initialize them as follows:
            self.pins["hs_1"].init(self.pins["hs_1"].OUT)

        if not self.menu and self.button_states.get(BUTTON_TYPES["UP"]):
            print()
            self.button_states.clear()
            # Toggle pin ls_1
            if self.pins["ls_1"].value():
                self.pins["ls_1"].off()
            else:
                self.pins["ls_1"].on()
        if not self.menu and self.button_states.get(BUTTON_TYPES["DOWN"]):
            self.button_states.clear()
            # Toggle pin hs_1
            if self.pins["hs_1"].value():
                self.pins["hs_1"].off()
            else:
                self.pins["hs_1"].on()

    def draw(self, ctx):
        clear_background(ctx)

        if self.hexpansion_config is None:
            self.menu.draw(ctx)

            # Drawing a shape as a port indicator.
            ctx.save()
            ctx.font_size = 22
            ctx.rgb(*colors["dark_green"]).rectangle(
                -120, -120, 240, 100).fill()
            ctx.rgb(*colors["dark_green"]).rectangle(
                -120, 20, 240, 100).fill()
            rotation_angle = self.menu.position*pi/3
            ctx.rgb(*colors["mid_green"]).rotate(rotation_angle).rectangle(
                80, -120, 40, 240).fill()
            prompt_message = "Select hexpansion port:"
            ctx.rgb(1, 1, 1).rotate(-rotation_angle).move_to(
                0, -45).text(prompt_message)
            ctx.restore()

        else:
            ctx.save()
            ctx.font_size = 24
            msg = "Hexpansion in port " + str(self.hexpansion_config.port)
            msg_width = ctx.text_width(msg)
            ctx.rgb(1, 1, 1).move_to(-msg_width/2, 0).text(msg)

            # draw pin values
            pin_ls_1 = "LS_1: " + str(self.pins["ls_1"].value())
            msg_width = ctx.text_width(pin_ls_1)
            ctx.rgb(1, 1, 1).move_to(-msg_width/2, -90).text(pin_ls_1)

            pin_hs_1 = "HS_1: " + str(self.pins["hs_1"].value())
            msg_width = ctx.text_width(pin_hs_1)
            ctx.rgb(1, 1, 1).move_to(-msg_width/2, 90).text(pin_hs_1)

            ctx.restore()


__app_export__ = ExampleApp
```

A more elaborate example is this [breadboard tester app](https://github.com/npentrel/tildagon-breadboard-tester/blob/main/app.py) which allows you to toggle all GPIO and eGPIO pins.

### Methods

GPIO pins support the standard [`machine.Pin` methods](https://docs.micropython.org/en/latest/library/machine.Pin.html). These are referred to as high speed pins as they are connected directly to the ESP32.

[eGPIO pins](https://github.com/emfcamp/badge-2024-software/blob/main/modules/tildagon/pins.py) are referred to as low speed pins as they are connected to a port expander by I2C and support the following methods:

<!-- prettier-ignore -->
| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `on()` | Drive the pin high. | None | None |
| `off()` | Drive the pin low. | None | None |
| `value()` | If provided with a value, sets the `Pin` value. If called without value, gets the `Pin` value. | None | `value`: The pin value. If called without a `value`. |
| `duty()` | When in PWM mode, sets the duty cycle of the open collector output | `duty`: The duty cycle, 0-255 | None |

### Usage

To use the `Pin`s:

1. Access the pins from the `HexpansionConfig` object and for GPIO pins, initialize the pins:

   ```python
   # eGPIO pins
   self.pins["ls_1"] = self.hexpansion_config.ls_pin[0]
   self.pins["ls_2"] = self.hexpansion_config.ls_pin[1]

   # GPIO pins
   self.pins["hs_1"] = self.hexpansion_config.pin[0]

   # All pins start in inputs mode. Initialize them as follows:
   self.pins["hs_1"].init(self.pins["hs_1"].OUT)
   self.pins["ls_1"].init(self.pins["ls_1"].OUT)

   # Only LS pins support the PWM function directly.
   self.pins["ls_2"].init(self.pins["ls_2"].PWM)
   ```

2. Call one of the methods, for example `off()`, `on()` or for LS pins `duty()`.

   ```python
   self.pins["hs_1"].off()
   self.pins["ls_1"].on()
   self.pins["ls_2"].duty()
   ```

## `IMU`

The IMU device is a highly integrated, low power inertial measurement unit (IMU) that combines precise acceleration and angular rate (gyroscopic) measurement. The triple axis device has been configured to measure 2g and 2 degree per second ranges. It also has a step count function intended for wrist mounted applications.

!!! note "More information about the sensor"

    For more information see [Inertial Measurement Unit BMI270 | Bosch Sensortec (bosch-sensortec.com)](https://www.bosch-sensortec.com/products/motion-sensors/imus/bmi270/).

```python
import app
import imu

from events.input import Buttons, BUTTON_TYPES


class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.acc_read = None

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            self.minimise()
        else:
            self.acc_read = imu.acc_read()

    def draw(self, ctx):
        ctx.save()
        ctx.rgb(0.2, 0, 0).rectangle(-120, -120, 240, 240).fill()
        if self.acc_read:
            ctx.rgb(1, 0, 0).move_to(-80, -40).text(
                "accel x,y,z:\n{},\n{},\n{}".format(
                    self.acc_read[0], self.acc_read[1], self.acc_read[2]))
        else:
            ctx.rgb(1, 0, 0).move_to(-80, 0).text("no readings yet")
        ctx.restore()


__app_export__ = ExampleApp
```

The following example app measures steps as you walk around with your badge:

```python
import app
import imu

from events.input import Buttons, BUTTON_TYPES


class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.acc_read = None
        self.steps_read = None

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            self.minimise()
        else:
            self.steps_read = imu.step_counter_read()

    def draw(self, ctx):
        ctx.save()
        ctx.rgb(0.2, 0, 0).rectangle(-120, -120, 240, 240).fill()
        if self.steps_read:
            ctx.rgb(1, 0, 0).move_to(-80, -40).text(
                "steps:\n{}\n".format(self.steps_read))
        else:
            ctx.rgb(1, 0,  0).move_to(-80, 0).text("no readings yet")
        ctx.restore()


__app_export__ = ExampleApp
```

### Methods

The api currently only allows access to the raw data.

<!-- prettier-ignore -->
| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `acc_read()` | Get the accelerometer data. | None | `(x,y,z)`: The accelerometer data as a tuple of floats (m/s^2). |
| `gyro_read()` | Get the gyro data. | None | `(x,y,z)`: The gyro data as a tuple of floats (d/s). |
| `step_counter_read()` | Get the step count | None | `count`: The step count |

### Usage

To use the `imu` package:

1. Import the `power` package:

   ```python
   import power
   ```

2. Call one of the methods, for example `imu.acc_read()`.

   ```python
   imu.acc_read()
   ```

## Power

The `power` package allows you to perform multiple battery related functions, like powering off the badge or getting the battery level.

### Example

This example shows you how to power off the badge when the `UP` button is pressed. Note that your badge will only power off if it is not connected to power through USB. It technically only disconnects the battery.

```python
import power
import app

from events.input import Buttons, BUTTON_TYPES


class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.minimise()
        if self.button_states.get(BUTTON_TYPES["UP"]):
            power.Off()

    def draw(self, ctx):
        ctx.save()
        ctx.rgb(0.2, 0, 0).rectangle(-120, -120, 240, 240).fill()
        ctx.rgb(1, 0, 0).move_to(-80, 0).text("Press up to\npower off")
        ctx.restore()


__app_export__ = ExampleApp
```

### Usage

To use the `power` package:

1. Import the `power` package:

   ```python
   import power
   ```

2. Call one of the methods, for example `power.Off()`.

   ```python
   power.Off()
   ```

### Methods

<!-- prettier-ignore -->
| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `Off()`| Turn off the battery. When the usb is disconnected the badge will turn off. | None | None |
| `BatteryChargeState()` | Status of the Battery charing cycle. | None | `status` (`string`): `"Not Charging"`, `"Pre-Charging"`, `"Fast Charging"`, `"Terminated"`. |
| `BatteryLevel()` | Return the battery charge level. | None. | `level` (`float`): Battery charge level as a float representing the charge percentage. |
| `Enable5V()` | Enable the usb out 5V supply. | `enable` (`Boolean`): whether to enable or disable the 5V supply. | None. |
| `Fault()` | Get the PMIC fault status. | None. | - `fault`: The battery fault. Battery: Normal, Over Voltage; Boost: Normal, Overloaded or low battery; Charge: Normal, Input Fault, Safety Timer expired |
| `SupplyCapabilities()` | Read the capabilities of the power supply. | None. | `capabilities` (`List`): List of tuples containing supply type, voltage (V) and current (mA). |
| `Icharge()` | Get the battery charge current | None. | `current` (`float`): The charge current in A. |
| `Vbat()` | Get the battery voltage. | None. | `voltage` (`float`): The battery voltage in V. |
| `Vin()` | Get the input voltage. | None. | `voltage` (`float`): The input voltage in V. |
| `Vsys()` (`float`) | Get the system voltage. | None. | `voltage` (`float`): Get the system voltage in V. |

### Events

If you want to use the [`EventBus`](./eventbus.md), you can use it with the following events:

- `RequestChargeEvent`
- `RequestBatFaultEvent`
- `RequestBoostFaultEvent`
- `RequestChargeFaultEvent`
- `RequestTimeoutFaultEvent`
- `RequestHostAttachEvent`
- `RequestHostDetachEvent`
- `RequestDeviceAttachEvent`
- `RequestDeviceDetachEvent`
- `RequestLanyardAttachEvent`
- `RequestLanyardDetachEvent`

To use events with the `EventBus`, import the following package:

```python
from system.power import events
```

You can also use the following hexpansion-related events

- `HexpansionRemovalEvent`
- `HexpansionInsertionEvent`
- `HexpansionFormattedEvent`
- `HexpansionMountedEvent`

To use these events with the `EventBus`, import the following package:

```python
from system.hexpansion.events import \
    HexpansionRemovalEvent, HexpansionInsertionEvent
```

Then `emit()` the event as following:

```python
eventbus.emit(
    events.RequestChargeEvent(events.PowerEvent("Charge Cycle change"))
)
```

## I2C

The badge supports the [I2C communication protocol](https://www.circuitbasics.com/basics-of-the-i2c-communication-protocol/) on a bus for each hexpansion slot. Hexpansion slots are numbered
1-6, with 1 being the top right slot and the numbers increasing clockwise. To create an I2C bus for a given slot, use:

```python
from machine import I2C

bus = I2C(1)
```

=== "App loaded from EEPROM"

    If your app is loaded from EEPROM on an hexpansion, you can get the slot in the
    hexpansion config object that is passed to your app to select the correct slot.


    !!! note "Untested"

        This code is currently untested and may not work. If you work on this, please let us know what you find or what you have to fix at [issue](https://github.com/emfcamp/badge-2024-documentation/issues/176).

    ```python
    import app

    from app_components import clear_background
    from events.input import Buttons, BUTTON_TYPES

    class ExampleApp(app.App):
        def __init__(self, config=None):
            self.button_states = Buttons(self)
            self.hexpansion_config = config

        def update(self, delta):
            if self.button_states.get(BUTTON_TYPES["CANCEL"]):
                self.minimise()

            if self.hexpansion_config:
                print(self.hexpansion_config.i2c)

        def draw(self, ctx):
            ctx.save()
            clear_background(ctx)
            ctx.rgb(0, 1, 0).move_to(-90, -40).text("Hello from your\nhexpansion!")
            ctx.restore()

            return None

    __app_export__ = ExampleApp
    ```

=== "App loaded from badge"

    If it's an app loaded from the badge, you'll need to check each port:

    ```python
    import app

    from machine import I2C

    from app_components import clear_background
    from events.input import Buttons, BUTTON_TYPES
    from system.eventbus import eventbus
    from system.hexpansion.events import HexpansionRemovalEvent, HexpansionInsertionEvent
    from system.hexpansion.config import HexpansionConfig
    from system.hexpansion.util import read_hexpansion_header, detect_eeprom_addr

    class ExampleApp(app.App):
        def __init__(self):
            self.button_states = Buttons(self)
            self.text = "No hexpansion found."
            self.hexpansion_config = self.scan_for_hexpansion()

            eventbus.on(HexpansionInsertionEvent, self.handle_hexpansion_insertion, self)
            eventbus.on(HexpansionRemovalEvent, self.handle_hexpansion_removal, self)

        def handle_hexpansion_insertion(self, event):
            self.hexpansion_config = self.scan_for_hexpansion()


        def handle_hexpansion_removal(self, event):
            self.hexpansion_config = self.scan_for_hexpansion()


        def update(self, delta):
            if self.button_states.get(BUTTON_TYPES["CANCEL"]):
                self.minimise()

            if self.hexpansion_config:
                print(self.hexpansion_config.i2c)

        def draw(self, ctx):
            ctx.save()
            clear_background(ctx)
            ctx.rgb(0, 1, 0).move_to(-90, -40).text(self.text)
            ctx.restore()

        def scan_for_hexpansion(self):
            for port in range(1, 7):
                print(f"Searching for hexpansion on port: {port}")
                i2c = I2C(port)
                addr = detect_eeprom_addr(i2c)

                if addr is None:
                    continue
                else:
                    print("Found EEPROM at addr " + hex(addr))

                header = read_hexpansion_header(i2c, addr)
                if header is None:
                    continue
                else:
                    print("Read header: " + str(header))
                self.text = "Hexp. found.\nvid: {}\npid: {}\nat port: {}".format(hex(header.vid), hex(header.pid), port)
                return HexpansionConfig(port)

            self.color = (1, 0, 0)
            self.text = "No hexpansion found."

            return None

        __app_export__ = ExampleApp
    ```

You can then use the standard MicroPython I2C API to communicate with devices on the bus.

Example usage from the [MicroPython I2C docs](https://docs.micropython.org/en/latest/library/machine.I2C.html):

```python
from machine import I2C

i2c = I2C(freq=400000)

# scan for peripherals, returning a list of 7-bit addresses
i2c.scan()

# write 3 bytes to peripheral with 7-bit address 42
i2c.writeto(42, b'123')
# read 4 bytes from peripheral with 7-bit address 42
i2c.readfrom(42, 4)
# read 3 bytes from memory of peripheral 42, starting at memory-address 8 in
# the peripheral
i2c.readfrom_mem(42, 8, 3)
# write 1 byte to memory of peripheral 42 starting at address 2 in the
# peripheral
i2c.writeto_mem(42, 2, b'\x10')
```

For more information, see [MicroPython I2C docs](https://docs.micropython.org/en/latest/library/machine.I2C.html).

## Version

You can use the `ota` package to obtain the insntalled TildagonOS version:

### Usage

To use the buttons:

1. Import the `ota` package:

   ```python
   import ota
   ```

2. Use the `get_version()` method:

   ```python
   ota.get_version()
   ```
