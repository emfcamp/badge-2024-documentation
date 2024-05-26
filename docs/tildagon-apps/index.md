# Tildagon OS Apps

Tildagon OS is the name for the firmware that runs on the badge. It is based on MicroPython, and provides some software interfaces for apps to use to interact with the badge hardware, and to provide a user interface.

## App Development

You can write apps for the badge in MicroPython. You can use most MicroPython libraries, and for some functionality we provide abstractions - for example, you can access all buttons through [`events.input`](./widgets-and-hardware/badge-hardware.md#buttons).

While developing, use the [simulator](./simulate.md) to test your apps.

For more info check out [Write a Tildagon OS App][app-getting-started] or follow the tutorial to [Build a snake app](./snake.md).

## Publishing your app

You can publish your apps to the app store so EMF2024 attendees can use them. For more info see [Publish your app](publish.md).

[simulator]: https://github.com/emfcamp/badge-2024-software/tree/main/sim
[app-getting-started]: ./development.md

## What next?

<div class="grid cards" markdown>

- [Tildagon OS Programming Interface Reference](./widgets-and-hardware/reference.md)
- [Using the badge simulator][simulator]
- [Publish your app](./publish.md)
- [Tutorial: Build a snake app](./snake.md)

</div>