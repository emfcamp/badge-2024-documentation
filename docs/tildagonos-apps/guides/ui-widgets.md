# UI Widget Overview

You can use the following premade [`app_components`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/menu.py) to create user interfaces:

## Menu

The [`Menu`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/menu.py) component, allows you to create menus with which you can scroll through a list of options and select an item.

### Example

### Usage

## Notification

The [`Notification`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/notification.py) component allows you to create pop up notifications.

### Example

This example app shows a notification for each button you press.

```python
from app import App
from app_components import Notification, clear_background
from events.input import Buttons, BUTTON_TYPES


class NotificationDemo(App):
    def __init__(self):
        self.notification = None
        self.button_states = Buttons(self)

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["RIGHT"]):
            self.notification = Notification("right!")
        if self.button_states.get(BUTTON_TYPES["LEFT"]):
            self.notification = Notification("left!")
        if self.button_states.get(BUTTON_TYPES["UP"]):
            self.notification = Notification("up!")
        if self.button_states.get(BUTTON_TYPES["DOWN"]):
            self.notification = Notification("down!")
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.notification = Notification("cancel!")
        if self.button_states.get(BUTTON_TYPES["CONFIRM"]):
            self.notification = Notification("confirm!")
        if self.notification:
            self.notification.update(delta)

    def draw(self, ctx):
        clear_background(ctx)
        if self.notification:
            self.notification.draw(ctx)

```

### Usage

To use a notification:

1. Import the `Notification` component:

    ```python
    from app_components import Notification
    ```

2. Initialize the notification in the `__init__` method of your app:

    ```python
    self.notification = None
    ```

3. Set the notification text in your app's code:

    ```python
    self.notification = Notification("This is a notification!")
    ```

    `Notification()` supports the following parameters:

    - `message`: The notification message.
    - `port` (_Optional_): The port from which the notification was issued. Default: `0`.
    - `open` (_Optional_): Whether to open the notification. Default: `True`.

4. Add the following lines in your `draw()` method to draw the notification when `self.notification` contains a notification:

    ```python
    # in def draw(serlf, ctx):
    if self.notification:
        self.notification.draw(ctx)
    ```

5. Add the following lines in your `update()` method to update the state of the notification:

    ```python
    # in def update(self, delta):
    if self.notification:
        self.notification.update(delta)
    ```

### Methods

You can use the following methods on a `Notification` object:

- `open()`: Manually open the notification.
- `close()`: Manually close the notification.
- `update()`: Automatically display the notification for a period of 5 seconds.
- `draw()`: Add the notification to the screen.

## Dialog

The [`Dialog`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py) component allows you to create yes or no dialogues.

### Example

This example app shows a dialog that asks you if it's a happy day and responds with an appropriate message.

```python
import app

from app_components import YesNoDialog, clear_background


class DialogApp(app.App):
    def __init__(self):
        # Need to call to access overlays for dialog
        super().__init__()
        self.answer = None

    async def run(self, render_update):
        # Render initial state
        await render_update()

        # Create a yes/no dialogue, add it to the overlays
        dialog = YesNoDialog("Happy day?", self)
        self.overlays = [dialog]
        # Wait for an answer from the dialogue.
        # if the answer was yes, the dialog.run() will return a true value
        # and we set an appropriate answer
        if await dialog.run(render_update):
            self.answer = "YAY!"
        else:
            self.answer = "I'm sorry"
        # Remove the dialogue and re-render
        self.overlays = []
        await render_update()


    def draw(self, ctx):
        clear_background(ctx)
        if self.answer:
            ctx.save()
            ctx.rgb(0,0,0.2).rectangle(-120,-120,240,240).fill()
            ctx.rgb(0,0,1).move_to(-80,0).text(self.answer)
            ctx.restore()
        self.draw_overlays(ctx)

```

### Usage

To use a dialog:

1. Import the `YesNoDialog` component:

    ```python
    from app_components import YesNoDialog
    ```

2. Add the following line to the `__init__` method of your app to initialize the inherited object:

    ```python
    super().__init__()
    ```

3. Use the `run()` method which supports asynchronous calls. You need asynchronous calls to wait for the answer to the dialog:

    ```python
    async def run(self, render_update):
        # Render initial state
        await render_update()

        # Create a yes/no dialogue, add it to the overlays
        dialog = YesNoDialog("Happy day?", self)
        self.overlays = [dialog]
        # Wait for an answer from the dialogue, and if it was yes, do something
        if await dialog.run(render_update):
            # this sets a variable that can be used in the draw method
            self.answer = "YAY!"
        else:
            self.answer = "I'm sorry"
        # Remove the dialogue and re-render
        self.overlays = []
        await render_update()

    ```

    `YesNoDialog()` supports the following parameters:

    - `message`: The dialog message.
    - `app`: The app opening the dialog.
    - `on_yes` (_Optional_): Call the provided handler method or return `True` if answer is yes and no handler is provided. Default: `None`.
    - `on_no` (_Optional_): Call the provided handler method or return `False` if answer is yes and no handler is provided. Default: `None`.

4. Add the following lines in your `draw()` method to clear the background and draw the dialog's overlays:

    ```python
    # in def draw(serlf, ctx):
        clear_background(ctx)
        self.draw_overlays(ctx)
    ```

    To make the dialog's answers have an effect you need to do something with the answer you received. Check the example for an idea.

### Methods

You can use the following methods on a `Notification` object:

- `open()`: Manually open the notification.
- `close()`: Manually close the notification.
- `update()`: Automatically display the notification for a period of 5 seconds.
- `draw()`: Add the notification to the screen.

## Tokens

The [`Tokens`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/tokens.py) component allows you to use:
    - constants for the display properties and colors
    - functions for clearing the background and setting a color

### Example

### Usage
