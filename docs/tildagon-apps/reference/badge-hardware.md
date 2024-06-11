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
from system.patterndisplay.events import *

class LEDExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)

        # This disables the patterndisplay system module, which does the default colour spinny thing
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
            for i in range(0,12):
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
            for i in range(0,12):
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

1. Import the `events.input` package:

    ```python
    from events.input import Button, BUTTON_TYPES, ButtonDownEvent, ButtonUpEvent
    from system.eventbus import eventbus
    ```

2. Add a method to handle the event:

    ```python
    def _handle_buttondown(self, event: ButtonDownEvent):
        if BUTTON_TYPES["CANCEL"] in event.button:
            self._cleanup()
            # perform other actions as needed

        if BUTTON_TYPES["CONFIRM"] in event.button:
            self._cleanup()
            # perform other actions as needed
    ```

3. Add an event handler in the `__init__` method of your app with the event (`ButtonDownEvent` or `ButtonUpEvent`) and a function that should be called when the event happens.  Depending on whether the event handler is a synchronous or asynchronous method call `on()` or `on_async`:

    ```python
    def __init__(self):
        eventbus.on(ButtonDownEvent, self._handle_buttondown, self.app)
        # eventbus.on_async(ButtonDownEvent, self._handle_buttondown, self.app)
    ```

4. Remove the event handler when the app is minimised or closed:

    ```python
    def _cleanup(self):
        eventbus.remove(ButtonDownEvent, self._handle_buttondown, self.app)
    ```

    !!! warning

        Make sure you remove the event handler when the app is minimised or closed!

You can see a more comprehensive example in [`dialog.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py).

## eGPIO

!!! tip "You've found a badge CHALLENGE!"

    Your challenge, should you choose to accept it, is to test eGPIO and finish the following documentation. To see more information and accept the challenge (that is, comment on the issue), see this [issue](https://github.com/emfcamp/badge-2024-documentation/issues/70).


!!! danger

      This part is not fully documented. PRs are welcome.


You can use the board's eGPIO pins with the [`tildagonos`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/tildagonos.py) package:

### Methods

| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `tildagonos.set_egpio_pin()` | Set the eGPIO state of a pin. | `pin`: The pin to get the state for. | <ul><li>`pin`: The pin to get the state for. Valid values are: `EPIN_LED_POWER`, `EPIN_ND_A`, `EPIN_ND_B`, `EPIN_ND_C`, `EPIN_ND_D`, `EPIN_ND_E`, `EPIN_ND_F`.</li><li> `boolean`: The state of the pin.<li></ul> |
| `tildagonos.check_egpio_state()` | Get the eGPIO state of a pin. | `pin`: The pin to get the state for. Valid values are: `EPIN_LED_POWER`, `EPIN_ND_A`, `EPIN_ND_B`, `EPIN_ND_C`, `EPIN_ND_D`, `EPIN_ND_E`, `EPIN_ND_F`. | `boolean`: The state of the pin. |
| `tildagonos.read_egpios()` | Reads the current eGPIO states and stores them for calls to `tildagonos.check_egpio_state()`. | None. | None. |
| `tildagonos.set_led_power()` | `state` (`boolean`): The state of the pin. | `boolean`: `True` sets the LED to on, `False` sets the LED to off. | None. |


### Example

This example TODO.

```python
import app

from app_components import clear_background
from events.input import Buttons, BUTTON_TYPES
from tildagonos import tildagonos

class GPIOExample(app.App):
    def __init__(self):
        self.button_states = Buttons(self)

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["RIGHT"]):
            # TODO
            tildagonos.read_egpios()
            tildagonos.check_egpio_state()
            tildagonos.set_egpio_pin()
            tildagonos.set_led_power()

    def draw(self, ctx):
        clear_background(ctx)

__app_export__ = GPIOExample
```

You can see a more comprehensive example in the [`intro_app.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/intro_app.py).

### Usage

To use the LEDs:

1. Import the `tildagonos` package:

    ```python
    from tildagonos import tildagonos
    ```

## `IMU`

The IMU device is a highly integrated, low power inertial measurement unit (IMU) that combines precise acceleration and angular rate (gyroscopic) measurement. The triple axis device has been configured to measure 2g and 2 degree per second ranges.

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
        ctx.rgb(0.2,0,0).rectangle(-120,-120,240,240).fill()
        if self.acc_read:
            ctx.rgb(1,0,0).move_to(-80,-40).text("accel x,y,z:\n{},\n{},\n{}".format(self.acc_read[0], self.acc_read[1], self.acc_read[2]))
        else:
            ctx.rgb(1,0,0).move_to(-80,0).text("no readings yet")
        ctx.restore()

__app_export__ = ExampleApp
```

### Methods

The api currently only allows access to the raw data.

| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| acc_read() | Get the accelerometer data. | None | `(x,y,z)`: The accelerometer data as a tuple of floats (m/s^2). |
| gyro_read() | Get the gyro data. | None | `(x,y,z)`: The gyro data as a tuple of floats (d/s). |

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
        ctx.rgb(0.2,0,0).rectangle(-120,-120,240,240).fill()
        ctx.rgb(1,0,0).move_to(-80,0).text("Press up to\npower off")
        ctx.restore()

__app_export__ = ExampleApp
```

### Usage

To use the power package:

1. Import the `power` package:

    ```python
    import power
    ```

2. Call one of the methods, for example power.Off().

    ```python
    power.Off()
    ```

### Methods

| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `Off()` | Turn off the battery. When the usb is disconnected the badge will turn off. | None | None |
| `BatteryChargeState()` | Status of the Battery charing cycle. | None | `status` (`string`): `"Not Charging"`, `"Pre-Charging"`, `"Fast Charging"`, `"Terminated"`. |
| `BatteryLevel()` | Return the battery charge level. |  None. | `level` (`float`): Battery charge level as a float representing the charge percentage. |
| `Enable5V()` | Enable the usb out 5V supply. | `enable` (`Boolean`): whether to enable or disable the 5V supply. | None. |
| `Fault()` | Get the PMIC fault status. | None. | - `fault`: The battery fault. Battery: Normal, Over Voltage; Boost: Normal, Overloaded or low battery; Charge: Normal, Input Fault, Safety Timer expired |
| `SupplyCapabilities()` | Read the capabilities of the power supply. | None. | `capabilities` (`List`): List of tuples containing supply type, voltage (V) and current (mA). |
| `Icharge()` | Get the battery charge current | None. | `current` (`float`): The charge current in mA. |
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
from system.hexpansion.events import HexpansionRemovalEvent, HexpansionInsertionEvent
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

bus = I2C(slot)
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
            ctx.rgb(0,1,0).move_to(-90,-40).text("Hello from your\nhexpansion!")
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
            ctx.rgb(0,1,0).move_to(-90,-40).text(self.text)
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

            self.color = (1,0,0)
            self.text = "No hexpansion found."

            return None

        __app_export__ = ExampleApp
    ```

You can then use the standard MicroPython I2C API to communicate with devices on the bus.

Example usage from the [MicroPython I2C docs](https://docs.micropython.org/en/latest/library/machine.I2C.html):

```python
from machine import I2C

i2c.scan()                      # scan for peripherals, returning a list of 7-bit addresses

i2c.writeto(42, b'123')         # write 3 bytes to peripheral with 7-bit address 42
i2c.readfrom(42, 4)             # read 4 bytes from peripheral with 7-bit address 42

i2c.readfrom_mem(42, 8, 3)      # read 3 bytes from memory of peripheral 42,
                                #   starting at memory-address 8 in the peripheral
i2c.writeto_mem(42, 2, b'\x10') # write 1 byte to memory of peripheral 42
                                #   starting at address 2 in the peripheral
```

For more information, see [MicroPython I2C docs](https://docs.micropython.org/en/latest/library/machine.I2C.html).
