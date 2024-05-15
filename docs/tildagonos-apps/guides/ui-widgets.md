# UI Widget Overview

You can use the following premade [`app_components`](guides/ui-widgets.md) to create user interfaces:

## Menu

The [`Menu`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/menu.py) component, allows you to create menus with which you can scroll through a list of options and select an item.

## Notification

The [`Notification`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/notification.py) component allows you to create pop up notifications.

### Example

```python
from app import App
from app_components import Notification, clear_background
from events.input import Buttons, BUTTON_TYPES


class NotificationDemo(App):
    def __init__(self):
        self.notification = None
        self.button_states = Buttons(self)

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.minimise()
        if self.button_states.get(BUTTON_TYPES["DOWN"]):
            self.notification = Notification("You pressed down!")

    def draw(self, ctx):
        clear_background(ctx)
        if self.notification:
            self.notification.draw(ctx)

    def update(self, delta):
        if self.notification:
            self.notification.update(delta)

```

### Usage

To use a notification:

1. Import the `Notifiaction` component:

    ```python
    from app_components import Notification
    ```

2. Initialize the notification when in the `__init__` method of your app:

    ```python
    self.notification = None
    ```

3. Set the notification text in your app's code:

    ```python
    self.notification = Notification("This is a notification!")
    ```

4. Add the following lines in your `draw()` method to draw the notification when `self.notification` contains a notification:

    ```python
    # in def draw(serlf, ctx):
    if self.notification:
        self.notification.draw(ctx)
    ```

5. Add the following lines in your `update()` method to ??.

    ```python
    # in def update(self, delta):
    if self.notification:
        self.notification.update(delta)
    ```

## Dialog

The [`Dialog`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py) component allows you to create yes or no dialogues.


## Tokens

The [`Tokens`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/tokens.py) component allows you to use:
    - constants for the display properties and colors
    - functions for clearing the background and setting a color
