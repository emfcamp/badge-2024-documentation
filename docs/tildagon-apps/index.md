# Tildagon OS Apps

Tildagon OS is the name for the firmware that runs on the badge. It is based on [MicroPython](https://docs.micropython.org/en/latest/), and provides some software interfaces for apps to use to interact with the badge hardware, and to provide a user interface.

## Building an app

You can write apps for the badge in MicroPython. You can use most MicroPython libraries, and for some functionality we provide abstractions - for example, you can access all buttons through [`events.input`](./reference/badge-hardware.md#buttons).

For more info check out [Write a Tildagon OS App](./development.md) or follow the tutorial to [Build a snake app](./examples/snake.md).

Looking for something for complete beginners to coding or Python? Check out the [simple_tildagon guide](simple_tildagon_intro.md) - Available in Blocks Coding or beginner Python Coding.

## Running your app

You can [run your app on your badge](./run-on-badge.md) by connecting it to your computer over USB-C.

If you don't have a badge handy, or want a slightly nicer debugging experience, you can also [run your app on an emulator](./simulate.md). There is also a [web emulator](https://emulator.badge.emfcamp.org/) where you can run your [published apps](./publish.md).

## Publishing your app

You can publish your apps to the [app store](https://apps.badge.emfcamp.org/) so EMF attendees can use them. For more info see [Publish your app](publish.md).

## What next?

<div class="grid cards" markdown>

- [Write a Tildagon OS App](./development.md)
- [Write a Tildagon App without any Python/Coding Experience](simple_tildagon_intro.md)
- [Configuration management in an app](./configuration.md)
- [Tildagon OS Programming Interface Reference](./reference/reference.md)
- [Publish your app](./publish.md)
- [Examples](./examples/examples.md)

</div>
