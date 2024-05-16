# Tildagon OS Apps

Tildagon OS is the name for the firmware that runs on the badge. It is based on MicroPython, and provides some software interfaces for apps to use to interact with the badge hardware, and to provide a user interface.

## App Development

!!! warning

    This is a work in progress. The badge firmware is not yet ready for general use.

You can write apps for the badge in MicroPython. You can use most MicroPython libraries, and for some functionality we provide
abstractions - for example, you can access all buttons through `events.input`.

While developing, you can use your hardware badge for testing your code, or you can use the [simulator].

For more info check out our [Getting Started guide][app-getting-started].

## Publishing your app

You can publish your apps to the app store so EMF2024 attendees can use them. For more info see [Publish your app](publish.md).

[simulator]: https://github.com/emfcamp/badge-2024-software/tree/main/sim
[app-getting-started]: ./development.md
