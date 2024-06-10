# Tildagon

![A hexagonal camp badge, with three smaller hexagonal PCBs containing breakout pins peaking out from the edges, and a screen showing @emfcamp](images/badge-photos/badge-with-screen.jpg "Tildagon with attached Hexpansions and screen"){: style="width:300px; height: auto" , align=right }

This year's badge is the Tildagon badge. It's a hexagon with a slot on each side that you can plug _[hexpansions](#hexpansions)_ into. A hexpansion is a 1 mm thick object with a hexagon shape on one edge (a six-sided polygon like this: ⬡). It can be made of cardstock, so you can quickly add some cat ears to your badge, or it can be a printed circuit.

Unlike in previous years, [Electromagnetic Field](https://www.emfcamp.org/) is trying to make a [longer-lasting platform](#a-reusable-platform-with-an-interchangeable-part) so any apps developed for it will work for multiple years.

<br>

## What would you like to do with your badge?

<div class="grid cards" markdown>

- [I want to know how to assemble and use the badge](using-the-badge/end-user-manual.md)
- [I want to connect to another Wi-Fi network](using-the-badge/connect-to-wifi.md)
- [I want to make a badge app](tildagon-apps/development.md)
- [I want to make a hexpansion](hexpansions/creating-hexpansions.md)
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
- An IMU (gyro + accelerometer)
- Bluetooth (BLE)

!!! info "The processor in the badge is the same as in 2022, and it will run [MicroPython](https://micropython.org/)."

## Hexpansions

<!--hexpansions-definition-start-->
Hexpansions are accessories that plug into the badge's expansion connectors. Almost anything can be a hexpansion - the simplest hexpansion is just a piece of 1mm card cut into the right hexagonal shape. Here are some community examples: (1)
{ .annotate }

1. If you want to add your hexpansion to this gallery, you can [file a PR](https://github.com/emfcamp/badge-2024-documentation/blob/main/docs/index.md) or let us know on the IRC/Matrix! We'd love to feature all of your creations!
<!--hexpansions-definition-end-->

<div class="scroll-container admonition info">
<!--hexpansions-start-->
  <span class="img-container">
    <img src="/images/hexpansions/tabasco.jpg" loading="lazy" alt="Hot Sauce hexpansion (chipotle flavor)">
    <span class="label">Emergency Hot Sauce hexpansion (chipotle flavor) by John Thurmond</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/eeh.gif" loading="lazy" alt="Rabbit hexpansion">
    <span class="label">EEH Hexpansion by Matt</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/goose.png" loading="lazy" alt="Skyler's goose prototype">
    <span class="label">Untitled Goose by Skyler Mansfield</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/rainbow.jpg" loading="lazy" alt="LED Rainbow Filament hexpansion">
    <span class="label">LED Filament hexpansion by John Thurmond</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/makerspace.gif" loading="lazy" alt="Rabbit hexpansion">
    <span class="label"><a href="https://www.makerspace.org.uk/">Maker Space</a> badge by Dan</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/plotter.gif" loading="lazy" alt="Plotter hexpansion">
    <span class="label">Plotter hexpansion by Danny Walker</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/floppy-disk.jpg" loading="lazy" alt="Floppy disk hexpansion">
    <span class="label">Floppy disk <a href="https://github.com/hairymnstr/Flopagon">"Flopagon"</a> by Nathan Dumont</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/googly.png" loading="lazy" alt="Floppy disk hexpansion">
    <span class="label">40mm Googly Eye by John Dumont</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/wheel.jpg" loading="lazy" alt="Wheel hexpansion">
    <span class="label"><a href="https://github.com/hairymnstr/omni-wheel-hexpansion">Omni wheel</a> by Nathan Dumont</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/segment-display.jpg" loading="lazy" alt="A 7 segment display hexpansion">
    <span class="label"><a href="https://www.printables.com/model/888549-emf-tildagon-hexpansion-7-segment-display">7-Segment display</a> by Iain Yarnall.</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/mysterious-qr.jpg" loading="lazy" alt="A hexpansion with a QR code that might rickroll you">
    <span class="label">Mysterious QR Code by grajohnt</span>
  </span>
  <span class="img-container">
    <img src="/images/badge-photos/hexpansion.png" loading="lazy" alt="Spirit level hexpansion">
    <span class="label">Spirit level by Chris</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/rabbit.jpg" loading="lazy" alt="Rabbit hexpansion">
    <span class="label">That Rabbit by Dan</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/duck.jpg" loading="lazy" alt="Rabbit hexpansion">
    <span class="label">Le Carnard de Bleu by Dan</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/fidget.jpg" loading="lazy" alt="Fidget Spinner hexpansion">
    <span class="label">Fidget Spinner by Catherine</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/breadbeard.jpg" loading="lazy" alt="Breadbord hexpansion">
    <span class="label">Breadbeard Hexpansion by Danny Walker</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/robotmad.jpg" loading="lazy" alt="Hex-Drive plugged into Hex-Dev">
    <span class="label">Hex-Drive and Hex-Dev by Team RobotMad</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/robotmad2.jpg" loading="lazy" alt="Many Hex-Drives">
    <span class="label">Hex-Drives by Team RobotMad</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/gridfinity-expansion.webp" loading="lazy" alt="Gridfinity expansion">
    <span class="label"><a href="https://www.printables.com/model/883719-emf-tildagon-hexpansion-gridfinity">Gridfinity expansion hexpansion</a> by Jack Fitton</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/markers.jpg" loading="lazy" alt="GCHQ.net markers">
    <span class="label">GCHQ.NET markers by <a href="https://gchq.net/">GCHQ.NET</a></span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/cable.jpg" loading="lazy" alt="Megadrive controller hexpansion">
    <span class="label">Megadrive controller by Matthew Wilkes</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/eyes.jpg" loading="lazy" alt="Eye hexpansion">
    <span class="label"><a href="https://www.thingiverse.com/thing:6633547">Eye hexpansion</a> by Alistair</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/smile.webp" loading="lazy" alt="Smile hexpansion">
    <span class="label"><a href="https://www.thingiverse.com/thing:6635025">Smile hexpansion</a> by Alistair</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/spirits.jpg" loading="lazy" alt="Spirit level hexpansions">
    <span class="label"><a href="https://www.printables.com/model/893545-spirit-level-hexpansions">Spirit level hexpansions</a> by Andy Piper</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/duckpond.jpg" loading="lazy" alt="Duck pond hexpansion">
    <span class="label">Duck pond hexpansion by Andy Piper</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/batwings.jpg" loading="lazy" alt="Bat wing hexpansion">
    <span class="label">Bat wing hexpansions by clayalien</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/not_lego_but_compatible.webp" loading="lazy" alt="Not lego baseplate hexpansion">
    <span class="label"><a href="https://www.printables.com/model/894472-not-lego-baseplate-hexpansion">Not lego baseplate hexpansion</a> by adie</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/display.webp" loading="lazy" alt="Display platform hexpansion">
    <span class="label"><a href="https://www.printables.com/model/894438-display-platform-hexpansion">Display platform hexpansion</a> by adie</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/glonouns.jpg" loading="lazy" alt="glowing pronoun hexpansions">
    <span class="label"><a href="https://www.printables.com/model/885935-pronoun-hexpansion">Glowing pronoun hexpansions</a> by Emily S</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/pronouns.jpg" loading="lazy" alt="pronoun hexpansions">
    <span class="label"><a href="https://www.printables.com/model/885935-pronoun-hexpansion">Pronoun hexpansions</a> by Emily S</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/keyboard.png" loading="lazy" alt="Keyboard hexpansion">
    <span class="label">Keyboard by Bob</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/bob-frog.jpg" loading="lazy" alt="Bob's frog prototype">
    <span class="label">Frog prototype by Bob</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/eyes-lit.gif" loading="lazy" alt="Bob's googly eye hexpansion">
    <span class="label"><a href="https://github.com/emfcamp/badge-2024-addons/tree/main/thinkl33t/googly-eye-hexpansion">Many eyes</a> by Bob</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/sao.jpg" loading="lazy" alt="&quot;Legacy&quot; adapter">
    <span class="label"><a href="https://github.com/dratini0/legacy-adapter-hexpansion">&quot;Legacy&quot; adapter (SAO, TiDAL, QW/ST)</a> by dratini0</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hub75.jpg" loading="lazy" alt="HUB75 hexpansion">
    <span class="label"><a href="https://github.com/dratini0/hub75-hexpansion">HUB75 hexpansion</a> by dratini0</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/blank.jpg" loading="lazy" alt="blank hexpansion">
    <span class="label">Blank Hexpansion by Nathan Dumont</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/falcon.jpg" loading="lazy" alt="Corellian Freigher hexpansion">
    <span class="label">Corellian Freighter Hexpansion by Andy Piper</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/catear.webp" loading="lazy" alt="Cat ears and whiskers hexpansion">
    <span class="label"><a href="https://www.printables.com/de/model/888105-catear-and-whisker-hexpansion">Cat ears and whiskers</a> by catnerd</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/ECHQ.jpg" loading="lazy" alt="ECHQ hexpansion">
    <span class="label">ECHQ hexpansion by ECHQ village</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/breakout-garden.jpg" loading="lazy" alt="Breakout Garden hexpansion">
    <span class="label">Pimoroni Breakout Garden I2C by <a href="https://github.com/jpwsutton">James Sutton</a></span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hexpansaputer.jpg" loading="lazy" alt="Hexaspansaputer">
    <span class="label">Hexaspansaputer (hexpansion supercomputer) by o0mouse0o</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/pride-rainbow.jpg" loading="lazy" alt="Pride rainbow LED strips hexpansion">
    <span class="label">A pride rainbow by o0mouse0o</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/6flags.webp" loading="lazy" alt="small flag hexpansion">
    <span class="label"><a href="https://www.printables.com/model/895999-6flags-hexpansion">6flags Hexpansion</a> by Ambrosia</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/interposer.png" loading="lazy" alt="interposer hexpansion">
    <span class="label"><a href="https://github.com/eastabrooka/badge-2024-addons/tree/eastabrooka/Interposer/UntitledGoose-Eastabrooka">Interposer</a> by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/honk.png" loading="lazy" alt="goose hexpansion">
    <span class="label">Simple Honk by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/pacman.png" loading="lazy" alt="Pacman hexpansion">
    <span class="label">Pacman by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/keycard.jpg" loading="lazy" alt="Doom Keycard hexpansion">
    <span class="label">Doom Keycard by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hexnotoad.gif" loading="lazy" alt="Hexnotoad hexpansion">
    <span class="label">Hexnotoad by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hacktheplanet.png" loading="lazy" alt="Hack the Planet hexpansion">
    <span class="label">Hack the Planet by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/henchmen.jpg" loading="lazy" alt="Henchmen hexpansion">
    <span class="label">Henchmen by Brian Corteil</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/alien.jpg" loading="lazy" alt="Googly Eye Alien hexpansion">
    <span class="label">Googly Eye Alien by Brian Corteil</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/tilde-lamp.jpg" loading="lazy" alt="Lamp hexpansion">
    <span class="label">Lamp hexpansion by Tilde</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/tilde-breakout.jpg" loading="lazy" alt="Breakout hexpansion">
    <span class="label">Breakout hexpansion by Tilde</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/jittery.jpg" loading="lazy" alt="Breakout hexpansion">
    <span class="label"><a href="https://github.com/walkerdanny/caffeine-jitters/">Caffeine Jitters</a> by Danny Walker</span>
  </span>
<!--hexpansions-end-->
</div>

??? tip "Expand to show a list of variously realistic hexpansion ideas"

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

- [Create a hexpansion](hexpansions/creating-hexpansions.md)
- [Technical documentation, pinout, and paper and PCB templates][badge-2024-hardware]

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
[matrix]: https://matrix.to/#/#badge:emfcamp.org
