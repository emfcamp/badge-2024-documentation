---
title: Write A Tildagon OS App
weight: -3
---

This guide will help you write an "Hello, World" app for the Tildagon badge.

!!! danger

      This guide is not yet finished and may not be fully functional.

## Hello World app

This is a small Tildagon app. The app imports the [app base class](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app.py), sets a button to allow you to cancel out of the app, and writes `Hello, world!` to the badge screen:

```python
import asyncio
import app

from events.input import Buttons, BUTTON_TYPES


class ExampleApp(app.App):
      def __init__(self):
      self.button_states = Buttons(self)

      def update(self, delta):
      if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.minimise()

      def draw(self, ctx):
      ctx.save()
      ctx.rgb(0.2,0,0).rectangle(-120,-120,240,240).fill()
      ctx.rgb(1,0,0).move_to(-80,0).text("Hello world")
      ctx.restore()
```

To test the app, go to the instructions for [simulating your app](./simulate.md) or [publishing it](./publish.md) for testing on your real-life badge.

## Creating User Interfaces

### Premade elements

You can use the following premade [`app_components`](guides/ui-widgets.md) to create user interfaces:

- [`Menu`](guides/ui-widgets.md#menu): scroll up/down and select
- [`Notification`](guides/ui-widgets.md#notification): pop up notifications
- [`Dialog`](guides/ui-widgets.md#dialog): create yes or no dialogues
- [`Tokens`](guides/ui-widgets.md#tokens):
    - constants for the display properties and colors
    - functions for clearing the background and setting a color

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
