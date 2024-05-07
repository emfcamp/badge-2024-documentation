# Tildagon OS Apps

Tildagon OS is the name for the firmware that runs on the badge. It is based on
MicroPython, and provides some software interfaces for apps to use to interact
with the badge hardware, and to provide a user interface.

## App Development

!!! warning

    This is a work in progress. The badge firmware is not yet ready for general
    use.

You can write apps for the badge in micropython. In development you can use your
hardware badge for testing your code, or you can use the [simulator].

You can use most micropython libraries, and for some functionality we provide
abstractions - for example, a semantic interface to the buttons, so that your
app uses a consistent button interface to other apps.

For more info check out our [Getting Started guide][app-getting-started].

## Publishing your app

Apps can be published to the app store to be made available to other EMF2024
attendees. To publish your app to the app store, put your app in a GitHub
repository and make sure it's accompanied with an app manifest. Tag your repo with
the `tildagon-app` tag, and the app store will pick it up within about 10 minutes.

[simulator]: https://github.com/emfcamp/badge-2024-software/tree/main/sim
[app-getting-started]: ./how-to-write-a-tildagon-os-app.md
