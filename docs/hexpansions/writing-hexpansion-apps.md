# Write an app for a hexpansion

!!! warning "This document is a work in progress. More details will be added as they become available."

If you've created a hexpansion that needs software to make it work, then you'll need to write an app for it.

The general process of writing an app is covered in [the app documentation](../tildagon-apps/development.md), but there are some additional steps required to interact with a hexpansion.

## Different approaches

There are three options for your hexpansion app:

1. Your hexpansion has an EEPROM and your app will be written to it and run from it.
2. Your hexpansion has an EEPROM, but your app is going to be downloaded from the app store and run separately.
3. Your hexpansion does not have an EEPROM, so your app will be downloaded from the app store and run separately.

Which approach you use is dependent on the hexpansion you're writing an app for and your own personal preference. If your app is likely to be so large that it'll exceed the space on the EEPROM, you might want to explore cross-compiling your app using [mpy-cross](https://pypi.org/project/mpy-cross/) to reduce its size. If your app is still too large, option 2 is your best bet.

If you're confident that your app will fit within the EEPROM filesystem of your hexpansion, option 1 is your friend.

If your hexpansion has no EEPROM then you can still interact with it from your app, but it requires some user input.

## Finding your hexpansion

In order to make your hexpansion do something, you'll need to know where it is plugged in on the badge. The six hexpansion ports are numbered 1-6, clockwise from the upper-right-hand port (the port above the USB out connector).

Below is an example of how you find which port your hexpansion is plugged in to for each of the three scenarios.

=== "App loaded from EEPROM"

    If your app is loaded from EEPROM on a hexpansion, you can get the port from the `HexpansionConfig` object that is automatically passed to your app:

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

=== "App loaded from badge, with EEPROM"

    !!! note "Information"
        For this method to work, your EEPROM needs to be properly provisioned with the [correct header information.](eeprom.md)

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
                addr,addr_len = detect_eeprom_addr(i2c) # Firmware version 1.8 and upwards only!

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
                # You can add some logic here to check the PID and VID match your hexpansion
                return HexpansionConfig(port)

            self.color = (1, 0, 0)
            self.text = "No hexpansion found."

            return None

    __app_export__ = ExampleApp
    ```

=== "App loaded from badge, no EEPROM"

    If your hexpansion does not have an EEPROM, there is nothing for the badge to look for to detect it's presence. Because of this, you can ask the user to select the hexpansion port manually using a simple [menu](../tildagon-apps/reference/ui-elements.md#menu) system:

    ```python
    import asyncio
    import app

    from system.hexpansion.config import *
    from app_components import clear_background, Menu
    from app_components.tokens import colors
    from math import pi

    menu_items = ["1", "2", "3", "4", "5", "6"]

    class ExampleApp(app.App):
        def __init__(self):
            self.menu = Menu(self, menu_items, select_handler=self.select_handler, back_handler=self.back_handler)
            self.hexpansion_config = None

        def select_handler(self, item, idx):
            self.hexpansion_config = HexpansionConfig(idx+1)

        def back_handler(self):
            self.minimise()

        def update(self, delta):
            if self.hexpansion_config is None:
                self.menu.update(delta)
            # else:
                # We have a hexpansion config, do some stuff with it!

        def draw(self, ctx):
            clear_background(ctx)

            if self.hexpansion_config is None:
                self.menu.draw(ctx)

                # This might look weird, but we're just drawing a shape as a port indicator.
                ctx.save()
                ctx.font_size = 22
                ctx.text_align = ctx.CENTER
                ctx.rgb(*colors["dark_green"]).rectangle(-120, -120, 240, 100).fill()
                ctx.rgb(*colors["dark_green"]).rectangle(-120, 20, 240, 100).fill()
                rotation_angle = self.menu.position*pi/3
                ctx.rgb(*colors["mid_green"]).rotate(rotation_angle).rectangle(80, -120, 40, 240).fill()
                prompt_message = "Select hexpansion port:"
                ctx.rgb(1, 1, 1).rotate(-rotation_angle).move_to(0, -45).text(prompt_message)
                ctx.restore()

            else:
                ctx.save()
                ctx.font_size = 24
                ctx.text_align = ctx.CENTER
                msg = "Hexpansion in port " + str(self.hexpansion_config.port)
                ctx.rgb(1, 1, 1).text(msg)
                ctx.restore()

    __app_export__ = ExampleApp
    ```

In all of these examples, the `HexpansionConfig` object is used to provide information about the port your hexpansion is plugged into.

## The HexpansionConfig class

The `HexpansionConfig` object that you get after following the examples is where the magic all happens. It allows you to access the following:

<!-- prettier-ignore -->
| Object | Description | Example Usage |
| ------ | ----------- | ------------- |
| `HexpansionConfig.port` | The port number your hexpansion is connected to. | |
| `HexpansionConfig.pin[]` | A list of 4 `Pin` objects. These are the high-speed, direct GPIO pins for this hexpansion port. | [See MicroPython Docs](https://docs.micropython.org/en/latest/library/machine.Pin.html) |
| `HexpansionConfig.ls_pin[]` | A list of 5 `ePin` objects for this hexpansion port. These are the emulated, low-speed GPIO pins for this hexpansion port. | [See pins](../tildagon-apps/reference/badge-hardware.md#pins) |
| `HexpansionConfig.i2c` | The dedicated `I2C` object for this hexpansion port. | [See I2C](../tildagon-apps/reference/badge-hardware.md#i2c) |

### Pin vs ePin

Hexpansion ports have two types of GPIO pins - `Pin` objects and `ePin` objects. The difference between these is important, and would have been a key design consideration for your hexpansion.

`Pin` objects are regular high speed GPIO pins. These are available through `HexpansionConfig.pin[]`. They are connected directly to the GPIO pins of the ESP32-S3, and can be controlled using the standard MicroPython `Pin` API. These pins are available for routing any of the unused peripherals from the ESP32-S3 to, so you could configure them as an `SPI` bus, use the `RMT` peripheral, be a `PWM` output etc. You can also use them for any other GPIO tasks where switching speed is important, such as communicating on an arbitrary protocol. Don't try to source or sink too much current from these pins - the usual rules for connecting things to microcontroller pins apply here.

!!! note "Using the ADC"
If you want to use the analogue to digital converter (`ADC`) peripheral of the ESP32-S3, your hexpansion needs to be in port 4, 5 or 6. Your detection code should be written to check for this and act accordingly. See [electrical interface](creating-hexpansions.md#electrical-interface).

<!-- markdown-link-check-disable -->

`ePin` objects are lower speed, emulated GPIOs. These are not connected directly to the ESP32-S3, but are instead connected via a [GPIO expander IC](https://github.com/emfcamp/badge-2024-hardware/blob/main/datasheets/AW9523%2BEnglish%2BDatasheet.pdf) over an I2C bus. Because the badge has to talk to the GPIO expander to change the state of the pins, these pins cannot be switched as fast as the `Pin` objects, but are still plenty fast for indicator LEDs, input buttons, or anything that requires a simple high/low logic level. The GPIO expander IC also provides a constant current LED driver, so you can connect LEDs directly to these pins and control their brightness in hardware. `ePin` objects use a different API to `Pin` objects.

<!-- markdown-link-check-enable -->

## Further development

The objects you can access through `HexpansionConfig` should allow you to develop your app using standard MicroPython methods.

Your app can also register handlers for `HexpansionInsertionEvent` and `HexpansionRemovalEvent` event types, to deal with new hexpansions being plugged in or removed. An example of this is [available in the app examples.](../tildagon-apps/examples/detect-hexpansion.md)
