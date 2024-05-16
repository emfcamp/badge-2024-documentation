# Tildagon

![A hexagonal camp badge, with three smaller hexagonal PCBs containing breakout pins peaking out from the edges, and a screen showing @emfcamp](images/badge-photos/badge-with-screen.jpg "Tildagon with attached Hexpansions and screen"){: style="width:300px; height: auto" , align=right }

This year's badge is the Tildagon badge. It's a hexagon with a slot on each side that you can plug _[hexpansions](#hexpansions)_ into. A hexpansion is a 1 mm thick object with a hexagon shape on one edge (a six-sided polygon like this: ⬡). It can be made of cardstock, so you can quickly add some cat ears to your badge, or it can be a printed circuit.

Unlike in previous years, [Electromagnetic Field](https://www.emfcamp.org/) is trying to make a [longer-lasting platform](#a-reusable-platform-with-an-interchangeable-part) so any apps developed for it will work for multiple years.

<br>

## What would you like to do with your badge?

<div class="grid cards" markdown>

- [I want to know how to use the badge](using-the-badge/end-user-manual.md)
- [I want to make a badge app](tildagon-apps/development.md)
- [I want to make a hexpansion](hexpansions/index.md)
- [I want to hack on badge firmware](tildagon-firmware/index.md)

</div>

!!! info "Need help? Ask here:"

    - irc: __irc.libera.chat #emfcamp-badge__
    - matrix: __[#badge:emfcamp.org][matrix]__

## Badge specs

![A hexagonal camp badge, made up of two PCBs with a gap between them, lit by RGB LEDs on top, with more LEDs shining inside. It has illustrations of cats on the silkscreen.](images/badge-photos/badge-in-the-dark.jpg "Tildagon in the dark"){: style="width:300px;height: auto;margin:auto;display:block;" }

- ESP32-S3 microcontroller with 2MB of PSRAM and 8MB of flash
- USB-C connector
- WiFi
- Six [hexpansion](#hexpansions) connectors
- Round screen, six buttons, lots of colourful LEDs
- Power management, motion sensing

!!! info "The processor in the badge is the same as in 2022, and it will run [MicroPython](https://micropython.org/)."

## Hexpansions

![A small spirit level, attached to a 3D printed hexagonal mount with notches to attach it to the badge. The mounting hexagon is slightly larger than the thumb holding it.](images/badge-photos/hexpansion.png "A Hexpansion"){: style="width:300px;height: auto;margin:auto;display:block;" }

Hexpansions are accessories that plug into the badge's expansion connectors. Almost anything can be a hexpansion: the simplest hexpansion is just a piece of 1 mm card cut into the right hexagonal shape.

??? note "Expand to show a list of variously realistic hexpansion ideas"

    - GPS / compass / IMU (for joust)
    - Buzzer (for notifing the wearer and joust)
    - Speaker (for notifying everyone near the wearer and joust)
    - Heart rate monitor
    - Modular synthesizer
    - Pretty / blinding LEDs
    - ePaper
    - Actual paper
    - Sandpaper
    - Cat ears
    - Drone arms
    - Hexapod legs
    - Fuzzy tail
    - Googly eyes
    - Memory card reader
    - RFID reader
    - TV-b-gone
    - Infrared communication port
    - Ultrasonic emitter
    - Big red button
    - Weather station
    - Bicycle mount
    - Polearm attachment
    - Gnat attractor
    - Keyboard


For more information, see:

- [Hexpansion hardware developer guide](hexpansions/index.md).
- [Technical documentation, pinout, and paper and PCB templates][badge-2024-hardware].

## A reusable platform with an interchangeable part

Instead of redesigning badges from scratch every two years, we're building:

- a reusable platform
- a base part which will remain compatible over multiple years.
  The base contains power management, communications, USB, expansion connectors, storage, motion sensing, and battery charging into this board
- an interchangeable part that is specific to the event

### Why are we doing this?

We want to let you make physical things that interact with the badge more easily, in the knowledge that those things are going to continue working with future event badges. In previous years, expandability has always been an afterthought - people still managed to do amazing things with their badges, but it was a lot of effort.

Additionally, we're tired of building the same thing over and over just to make it new and special. We're tired of putting ever-increasing stacks of e-waste into the drawers of the hacking world. We're especially tired of people not being able to meaningfully build things for the badge before the event, and none of those things working by the next event.

The Tildagon will not only let us waste fewer materials, but it also provides us and attendees with a stable base to build on and invest in.

For us, the stable infrastructure means we do not need to rewrite software and drivers for every event. Instead we can focus our efforts on the smaller event-specific part.

Investing in the Tildagon for multiple years also means we've put more effort and better parts than usual into the base board. We put all the expensive and hard-to-get-right functionality on the base part. In future events, we will reuse this base part and maintain compatibility in software and hardware for existing hexpansions.

The most energy-intensive part of each badge is the battery, so we've made it compatible with the batteries from the 2016 and 2018 badges.

Instead of having a lanyard, we are making the USB cable itself be the lanyard for this badge - cables in different lengths are available for people of different sizes, and it can also be used for badge-to-badge and badge-to-computer communication.

[badge-2024-hardware]: https://github.com/emfcamp/badge-2024-hardware
[badge-2024-software]: https://www.github.com/emfcamp/badge-2024-software
[badge-2024-documentation]: https://www.github.com/emfcamp/badge-2024-documentation
[badge-2024-app-store]: https://www.github.com/emfcamp/badge-2024-app-store
[badge-tent-volunteering]: ./badge-tent-volunteering.md
