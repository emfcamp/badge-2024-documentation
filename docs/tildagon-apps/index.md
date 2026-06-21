# Tildagon OS Apps

Tildagon OS is the name for the firmware that runs on the badge. It is based on [MicroPython](https://docs.micropython.org/en/latest/), and provides some software interfaces for apps to use to interact with the badge hardware, and to provide a user interface.

## Building your app

You can write apps for the badge in MicroPython. You can use most MicroPython libraries, and for some functionality we provide abstractions - for example, you can access all buttons through [`events.input`](./reference/badge-hardware.md#buttons).

For more info check out [Write a Tildagon OS App]([app-getting-started]) or follow the tutorial to [Build a snake app](./examples/snake.md).

## Running your app

You can run your app on your badge by connecting it up to your computer over USB-C. Instructions are [here](./run-on-badge.md).

If you don't have a badge handy, or want a slightly nicer debugging experience, you can also use an emulator. Choose between installing the [local simulator](./simulate.md) or just use the [web emulator](https://emulator.badge.emfcamp.org/) right in your browser.

## Publishing your app

You can publish your apps to the [app store](https://apps.badge.emfcamp.org/) so EMF attendees can use them. For more info see [Publish your app](publish.md).

[app-getting-started]: ./development.md

## What next?

<div class="grid cards" markdown>

- [Write a Tildagon OS App](./development.md)
- [Configuration management in an app](./configuration.md)
- [Tildagon OS Programming Interface Reference](./reference/reference.md)
- [Publish your app](./publish.md)
- [Examples](./examples/examples.md)

</div>
