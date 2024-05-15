---
title: Write A Tildagon OS App
weight: -3
---

This guide will help you write an "Hello, World" app for the Tildagon badge.

!!! danger

      This guide is not yet finished and may not be fully functional.

## Hello World app

This is a small Tildagon app of only 11 lines. The app imports the app base class and writes `Hello, wold!` to the badge screen:

```python
from app import app

class HelloWorld(App):
  def __init__():
    pass

  def update():
    pass:

  def draw():
    ctx.move_to(0, 0).text("Hello, world!"]
```

To test the app you can [simulate it](/tildagonos-apps/simlulate/) or [publish it](/tildagonos-apps/publish/) for testing on your real-life badge.

## Creating User Interfaces

### Premade elements

You can use the following premade [`app_components`](/tildagonos-apps/guides/ui-widget-overview/) to create user interfaces:

- [`Menu`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/menu.py): scroll up/down and select
- [`Notification`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/notification.py): pop up notifications
- [`Dialog`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py): create yes or no dialogues
- [`Tokens`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/tokens.py):
    - constants for the display properties and colors
    - functions for clearing the background and setting a color

You can see how these components work in the [`menu_demo.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/menu_demo.py).

### The `ctx` library

You can also create your own user interfaces using the [`ctx` graphics library](https://ctx.graphics/). This is the same library we use for the premade UI elements, so you can look at  examples in the [`app_components` folder](https://github.com/emfcamp/badge-2024-software/tree/main/modules/app_components).

## What next?

<div class="grid cards" markdown>

- [Tildagon OS Programming Interface Reference](./reference.md)
- [Publish your app](./publish.md)
- [Interfacing with badge hardware](./guides/using-badge-hardware.md)
- [Using the badge simulator][simulator]

</div>

[simulator]: https://github.com/emfcamp/badge-2024-software/tree/main/sim
