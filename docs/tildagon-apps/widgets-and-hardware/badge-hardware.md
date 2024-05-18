# Badge Hardware Overview

## LEDs

You can use the board's LEDs with the [`tildagonos`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/tildagonos.py) package:

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
```

You can see a more comprehensive example in the [`intro_app.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/intro_app.py).

### Usage

To use the LEDs:

1. Import the `tildagonos` package:

    ```python
    from tildagonos import tildagonos, led_colours
    ```

2. Set the LEDs by assigning a color tuple to one of the 12 LEDs:

   ```python
    tildagonos.leds[2] = (255, 0, 0)
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

3. Add an event handler in the `__init__` method of your app with the event (`ButtonDownEvent` or `ButtonUpEvent`) and a function that should be called when the event happens.  Depending on whether the event handler is a synchronoush or asynchronoush method call `on()` or `on_async`:

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

    !!! caution

        Make sure you remove the event handler when the app is minimised or closed!

You can see a more comprehensive example in [`dialog.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py).
