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

1. If you want to add your hexpansions to this gallery, you can [add them to the registry](https://github.com/hughrawlinson/hexpansion-registry) or [add them to this issue](https://github.com/emfcamp/badge-2024-documentation/issues/149) or let us know on the IRC/Matrix! We'd love to feature all of your creations!

<!--hexpansions-definition-end-->
<div class="scroll-container scroll-container-large admonition info">
<!--hexpansions-start-->
  <span class="img-container">
    <img src="/images/hexpansions/og-hexpansion.jpg" loading="lazy" alt="hexpansion exposing pins" data-title="The OG Hexpansion by kliment" data-description=".custom-desc-og">
    <span class="label"><a href="https://github.com/emfcamp/badge-2024-hardware/tree/main/hexpansion">OG Hexpansion</a> by kliment</span>
    <div class="glightbox-desc custom-desc-og">
      <p>Link: <a href="https://github.com/emfcamp/badge-2024-hardware/tree/main/hexpansion">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/tabasco.jpg" loading="lazy" alt="Hot Sauce hexpansion (chipotle flavor)" data-title="Emergency Hot Sauce hexpansion (chipotle flavor) by John Thurmond" data-description="">
    <span class="label">Emergency Hot Sauce hexpansion (chipotle flavor) by John Thurmond</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/ducks.jpg" loading="lazy" alt="Tildagon badge with five duck hexpansions and an emergency hot sauce hexpansion" data-title="Duck hexpansion by Tiff" data-description=".custom-desc-ducks">
    <span class="label"><a href="https://www.instagram.com/tiffleek/reel/C7yx5jmNJ9d/">Ducks hexpansion</a> by Tiff</span>
    <div class="glightbox-desc custom-desc-ducks">
      <p>EMF ducks sixties style flying porcelain ducks</p>
      <p>Link: <a href="https://www.instagram.com/tiffleek/reel/C7yx5jmNJ9d/">Instagram</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/eeh.gif" loading="lazy" alt="Rabbit hexpansion" data-title="EEH Hexpansion by Matt" data-description="">
    <span class="label">EEH Hexpansion by Matt</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/goose.png" loading="lazy" alt="Skyler's goose prototype" data-title="Untitled Goose by Skyler Mansfield" data-description="">
    <span class="label">Untitled Goose by Skyler Mansfield</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/rainbow.jpg" loading="lazy" alt="LED Rainbow Filament hexpansion" data-title="LED Filament hexpansion by John Thurmond" data-description="">
    <span class="label">LED Filament hexpansion by John Thurmond</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/makerspace.gif" loading="lazy" alt="Markerspace hexpansion" data-title="Maker Space badge by Dan" data-description=".custom-desc-makerspace">
    <span class="label"><a href="https://www.makerspace.org.uk/">Maker Space</a> badge by Dan</span>
    <div class="glightbox-desc custom-desc-makerspace">
      <p>Link: <a href="https://www.makerspace.org.uk/">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/plotter.gif" loading="lazy" alt="Plotter hexpansion" data-title="Plotter hexpansion by Danny Walker" data-description="">
    <span class="label">Plotter hexpansion by Danny Walker</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/floppy-disk.jpg" loading="lazy" alt="Floppy disk hexpansion" data-title="Floppy disk 'Flopagon' by Nathan Dumont" data-description=".custom-desc-flopagon">
    <span class="label">Floppy disk <a href="https://github.com/hairymnstr/Flopagon">"Flopagon"</a> by Nathan Dumont</span>
    <div class="glightbox-desc custom-desc-flopagon">
      <p>Link: <a href="https://github.com/hairymnstr/Flopagon">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/googly.png" loading="lazy" alt="Floppy disk hexpansion" data-title="40mm Googly Eye by John Dumont" data-description="">
    <span class="label">40mm Googly Eye by John Dumont</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/wheel.jpg" loading="lazy" alt="Wheel hexpansion" data-title="Omni wheel by Nathan Dumont" data-description=".custom-desc-wheel">
    <span class="label"><a href="https://github.com/hairymnstr/omni-wheel-hexpansion">Omni wheel</a> by Nathan Dumont</span>
    <div class="glightbox-desc custom-desc-wheel">
      <p>Link: <a href="https://github.com/hairymnstr/omni-wheel-hexpansion">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/monsters.jpg" loading="lazy" alt="little monster hexpansions" data-title="Little Monsters by Talula" data-description="">
    <span class="label">Little Monsters by Talula</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/segment-display.jpg" loading="lazy" alt="A 7 segment display hexpansion" data-title="7-segment display by Iain Yarnall" data-description=".custom-desc-segment">
    <span class="label"><a href="https://www.printables.com/model/888549-emf-tildagon-hexpansion-7-segment-display">7-Segment display</a> by Iain Yarnall.</span>
    <div class="glightbox-desc custom-desc-segment">
      <p>Link: <a href="https://www.printables.com/model/888549-emf-tildagon-hexpansion-7-segment-display">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/mysterious-qr.jpg" loading="lazy" alt="A hexpansion with a QR code that might rickroll you" data-title="Mysterious QR Code by grajohnt" data-description="">
    <span class="label">Mysterious QR Code by grajohnt</span>
  </span>
  <span class="img-container">
    <img src="/images/badge-photos/hexpansion.png" loading="lazy" alt="Spirit level hexpansion" data-title="Spirit level by Chris" data-description="">
    <span class="label">Spirit level by Chris</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/rabbit.jpg" loading="lazy" alt="Rabbit hexpansion" data-title="That Rabbit by Dan" data-description="">
    <span class="label">That Rabbit by Dan</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/duck.jpg" loading="lazy" alt="Rabbit hexpansion" data-title="Le Carnard de Bleu by Dan" data-description="">
    <span class="label">Le Carnard de Bleu by Dan</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/fidget.jpg" loading="lazy" alt="Fidget Spinner hexpansion" data-title="Fidget Spinner by Catherine" data-description="">
    <span class="label">Fidget Spinner by Catherine</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/breadbeard.jpg" loading="lazy" alt="Breadbord hexpansion" data-title="Breadbeard Hexpansion by Danny Walker" data-description="">
    <span class="label">Breadbeard Hexpansion by Danny Walker</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/robotmad.jpg" loading="lazy" alt="Hex-Drive plugged into Hex-Dev" data-title="Hex-Drive and Hex-Dev by Team RobotMad" data-description="">
    <span class="label">Hex-Drive and Hex-Dev by Team RobotMad</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/robotmad2.jpg" loading="lazy" alt="Many Hex-Drives" data-title="Hex-Drives by Team RobotMad" data-description="">
    <span class="label">Hex-Drives by Team RobotMad</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/gridfinity-expansion.webp" loading="lazy" alt="Gridfinity expansion" data-title="Gridfinity expansion hexpansion by Jack Fitton" data-description=".custom-desc-gridfinity">
    <span class="label"><a href="https://www.printables.com/model/883719-emf-tildagon-hexpansion-gridfinity">Gridfinity expansion hexpansion</a> by Jack Fitton</span>
    <div class="glightbox-desc custom-desc-gridfinity">
      <p>Link: <a href="https://www.printables.com/model/883719-emf-tildagon-hexpansion-gridfinity">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/markers.jpg" loading="lazy" alt="GCHQ.net markers" data-title="GCHQ.NET markers by GCHQ.NET" data-description=".custom-desc-markers">
    <span class="label">GCHQ.NET markers by <a href="https://gchq.net/">GCHQ.NET</a></span>
    <div class="glightbox-desc custom-desc-markers">
      <p>Link: <a href="https://gchq.net/">GCHQ</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/cable.jpg" loading="lazy" alt="Megadrive controller hexpansion" data-title="Megadrive controller by Matthew Wilkes" data-description="">
    <span class="label">Megadrive controller by Matthew Wilkes</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/eyes.jpg" loading="lazy" alt="Eye hexpansion" data-title="Eye hexpansion by Alistair" data-description=".custom-desc-eyes">
    <span class="label"><a href="https://www.thingiverse.com/thing:6633547">Eye hexpansion</a> by Alistair</span>
    <div class="glightbox-desc custom-desc-eyes">
      <p>Link: <a href="https://www.thingiverse.com/thing:6633547">Thingiverse</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/smile.webp" loading="lazy" alt="Smile hexpansion" data-title="Smile hexpansion by Alistair" data-description=".custom-desc-smile">
    <span class="label"><a href="https://www.thingiverse.com/thing:6635025">Smile hexpansion</a> by Alistair</span>
    <div class="glightbox-desc custom-desc-smile">
      <p>Link: <a href="https://www.thingiverse.com/thing:6635025">Thingiverse</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/spirits.jpg" loading="lazy" alt="Spirit level hexpansions" data-title="Spirit level hexpansions by Andy Piper" data-description=".custom-desc-spirits">
    <span class="label"><a href="https://www.printables.com/model/893545-spirit-level-hexpansions">Spirit level hexpansions</a> by Andy Piper</span>
    <div class="glightbox-desc custom-desc-spirits">
      <p>Link: <a href="https://www.printables.com/model/893545-spirit-level-hexpansions">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/duckpond.jpg" loading="lazy" alt="Duck pond hexpansion" data-title="Duck pond hexpansion by Andy Piper" data-description="">
    <span class="label">Duck pond hexpansion by Andy Piper</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/batwings.jpg" loading="lazy" alt="Bat wing hexpansion" data-title="Bat wing hexpansions by clayalien" data-description="">
    <span class="label">Bat wing hexpansions by clayalien</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/not_lego_but_compatible.webp" loading="lazy" alt="Not lego baseplate hexpansion" data-title="Not lego baseplate hexpansion by adie" data-description=".custom-desc-compatible">
    <span class="label"><a href="https://www.printables.com/model/894472-not-lego-baseplate-hexpansion">Not lego baseplate hexpansion</a> by adie</span>
    <div class="glightbox-desc custom-desc-compatible">
      <p>Link: <a href="https://www.printables.com/model/894472-not-lego-baseplate-hexpansion">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/display.webp" loading="lazy" alt="Display platform hexpansion" data-title="Display platform hexpansion by adie" data-description=".custom-desc-display">
    <span class="label"><a href="https://www.printables.com/model/894438-display-platform-hexpansion">Display platform hexpansion</a> by adie</span>
    <div class="glightbox-desc custom-desc-display">
      <p>Link: <a href="https://www.printables.com/model/894438-display-platform-hexpansion">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/glonouns.jpg" loading="lazy" alt="glowing pronoun hexpansions" data-title="Glowing pronoun hexpansions by Emily S" data-description=".custom-desc-glonouns">
    <span class="label"><a href="https://www.printables.com/model/885935-pronoun-hexpansion">Glowing pronoun hexpansions</a> by Emily S</span>
    <div class="glightbox-desc custom-desc-glonouns">
      <p>Link: <a href="https://www.printables.com/model/885935-pronoun-hexpansion">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/pronouns.jpg" loading="lazy" alt="pronoun hexpansions" data-title="Pronoun hexpansions by Emily S" data-description=".custom-desc-pronouns">
    <span class="label"><a href="https://www.printables.com/model/885935-pronoun-hexpansion">Pronoun hexpansions</a> by Emily S</span>
    <div class="glightbox-desc custom-desc-pronouns">
      <p>Link: <a href="https://www.printables.com/model/885935-pronoun-hexpansion">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/keyboard.png" loading="lazy" alt="Keyboard hexpansion" data-title="Keyboard by Bob" data-description="">
    <span class="label">Keyboard by Bob</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/bob-frog.jpg" loading="lazy" alt="Bob's frog prototype" data-title="Frog prototype by Bob" data-description="">
    <span class="label">Frog prototype by Bob</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/eyes-lit.gif" loading="lazy" alt="Bob's googly eye hexpansion" data-title="Many eyes by Bob" data-description=".custom-desc-lit">
    <span class="label"><a href="https://github.com/emfcamp/badge-2024-addons/tree/main/thinkl33t/googly-eye-hexpansion">Many eyes</a> by Bob</span>
    <div class="glightbox-desc custom-desc-lit">
      <p>Link: <a href="https://github.com/emfcamp/badge-2024-addons/tree/main/thinkl33t/googly-eye-hexpansion">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/sao.jpg" loading="lazy" alt="&quot;Legacy&quot; adapter" data-title="Legacy adapter (SAO, TiDAL, QW/ST)</a> by dratini0" data-description=".custom-desc-sao">
    <span class="label"><a href="https://github.com/dratini0/legacy-adapter-hexpansion">&quot;Legacy&quot; adapter (SAO, TiDAL, QW/ST)</a> by dratini0</span>
    <div class="glightbox-desc custom-desc-sao">
      <p>Link: <a href="https://github.com/dratini0/legacy-adapter-hexpansion">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hub75.jpg" loading="lazy" alt="HUB75 hexpansion" data-title="HUB75 hexpansion by dratini0" data-description=".custom-desc-hub75">
    <span class="label"><a href="https://github.com/dratini0/hub75-hexpansion">HUB75 hexpansion</a> by dratini0</span>
    <div class="glightbox-desc custom-desc-hub75">
      <p>Link: <a href="https://github.com/dratini0/hub75-hexpansion">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/blank.jpg" loading="lazy" alt="blank hexpansion" data-title="Blank Hexpansion by Nathan Dumont" data-description="">
    <span class="label">Blank Hexpansion by Nathan Dumont</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/falcon.jpg" loading="lazy" alt="Corellian Freigher hexpansion" data-title="Corellian Freighter Hexpansion by Andy Piper" data-description="">
    <span class="label">Corellian Freighter Hexpansion by Andy Piper</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/catear.webp" loading="lazy" alt="Cat ears and whiskers hexpansion" data-title="Cat ears and whiskers by catnerd" data-description=".custom-desc-whisker">
    <span class="label"><a href="https://www.printables.com/de/model/888105-catear-and-whisker-hexpansion">Cat ears and whiskers</a> by catnerd</span>
    <div class="glightbox-desc custom-desc-whisker">
      <p>Link: <a href="https://www.printables.com/de/model/888105-catear-and-whisker-hexpansion">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/ECHQ.jpg" loading="lazy" alt="ECHQ hexpansion" data-title="ECHQ hexpansion by ECHQ village" data-description="">
    <span class="label">ECHQ hexpansion by ECHQ village</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/breakout-garden.jpg" loading="lazy" alt="Breakout Garden hexpansion" data-title="Pimoroni Breakout Garden I2C by James Sutton" data-description=".custom-desc-breakout-garden">
    <span class="label">Pimoroni Breakout Garden I2C by <a href="https://github.com/jpwsutton">James Sutton</a></span>
    <div class="glightbox-desc custom-desc-breakout-garden">
      <p>Link: <a href="https://github.com/jpwsutton">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hexpansaputer.jpg" loading="lazy" alt="Hexaspansaputer" data-title="Hexaspansaputer (hexpansion supercomputer) by o0mouse0o" data-description="A mini flashing supercomputer in RED, BLUE and GREEN. Called Hexaspansaputer - a pun on Hexpansion and Supercomputer and might be familiar to people who view Big Clives Livestreams.">
    <span class="label">Hexaspansaputer (hexpansion supercomputer) by o0mouse0o</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/pride-rainbow.jpg" loading="lazy" alt="Pride rainbow LED strips hexpansion" data-title="A pride rainbow by o0mouse0o" data-description="A static Pride Flag with 42 LEDs.">
    <span class="label">A pride rainbow by o0mouse0o</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/6flags.webp" loading="lazy" alt="small flag hexpansion" data-title="6flags Hexpansion by Ambrosia" data-description=".custom-desc-6flags">
    <span class="label"><a href="https://www.printables.com/model/895999-6flags-hexpansion">6flags Hexpansion</a> by Ambrosia</span>
    <div class="glightbox-desc custom-desc-6flags">
      <p>Link: <a href="https://www.printables.com/model/895999-6flags-hexpansion">Printables</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/interposer.png" loading="lazy" alt="interposer hexpansion" data-title="Interposer by The Untitled Goose" data-description=".custom-desc-interposer">
    <span class="label"><a href="https://github.com/eastabrooka/badge-2024-addons/tree/eastabrooka/Interposer/UntitledGoose-Eastabrooka">Interposer</a> by The Untitled Goose</span>
    <div class="glightbox-desc custom-desc-interposer">
      <p>Link: <a href="https://github.com/eastabrooka/badge-2024-addons/tree/eastabrooka/Interposer/UntitledGoose-Eastabrooka">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/honk.png" loading="lazy" alt="goose hexpansion" data-title="Simple Honk by The Untitled Goose" data-description="">
    <span class="label">Simple Honk by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/pacman.png" loading="lazy" alt="Pacman hexpansion" data-title="Pacman by The Untitled Goose" data-description="">
    <span class="label">Pacman by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/keycard.jpg" loading="lazy" alt="Doom Keycard hexpansion" data-title="Doom Keycard by The Untitled Goose" data-description="">
    <span class="label">Doom Keycard by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hexnotoad.gif" loading="lazy" alt="Hexnotoad hexpansion" data-title="Hexnotoad by The Untitled Goose" data-description="">
    <span class="label">Hexnotoad by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/hacktheplanet.png" loading="lazy" alt="Hack the Planet hexpansion" data-title="Hack the Planet by The Untitled Goose" data-description="">
    <span class="label">Hack the Planet by The Untitled Goose</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/henchmen.jpg" loading="lazy" alt="Henchmen hexpansion" data-title="Henchmen by Brian Corteil" data-description="">
    <span class="label">Henchmen by Brian Corteil</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/alien.jpg" loading="lazy" alt="Googly Eye Alien hexpansion" data-title="Googly Eye Alien by Brian Corteil" data-description="">
    <span class="label">Googly Eye Alien by Brian Corteil</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/tilde-lamp.jpg" loading="lazy" alt="Lamp hexpansion" data-title="Lamp hexpansion by Tilde" data-description="">
    <span class="label">Lamp hexpansion by Tilde</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/tilde-breakout.jpg" loading="lazy" alt="Breakout hexpansion" data-title="Breakout hexpansion by Tilde" data-description="">
    <span class="label">Breakout hexpansion by Tilde</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/jittery.jpg" loading="lazy" alt="Breakout hexpansion" data-title="Caffeine Jitters by Danny Walker" data-description=".custom-desc-jittery">
    <span class="label"><a href="https://github.com/walkerdanny/caffeine-jitters/">Caffeine Jitters</a> by Danny Walker</span>
    <div class="glightbox-desc custom-desc-jittery">
      <p>Link: <a href="https://github.com/walkerdanny/caffeine-jitters/">GitHub</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/petals.jpg" loading="lazy" alt="petal hexpansions on a badge" data-title="Petals by lornajane" data-description=".custom-desc-petals">
    <span class="label">Petals by <a href="https://indieweb.social/@lornajane/112536772003752312">lornajane</a></span>
    <div class="glightbox-desc custom-desc-petals">
      <p>Petals on a badge</p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/laser.jpg" loading="lazy" alt="Laser Tag and Shieldallion hexpansions" data-title="Laser Tag Shieldallion by kianryan" data-description=".custom-desc-jittery">
    <span class="label">Laser Tag Shieldallion by <a href="https://oldbytes.space/@kianryan/112541772244815335">kianryan</a></span>
    <div class="glightbox-desc custom-desc-jittery">
      <p>Sofware link may be available later...</p>
    </div>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/cat.jpg" loading="lazy" alt="Cat hexpansion" data-title="Cat hexpansion" data-description="">
    <span class="label">Cat hexpansion</span>
  </span>
  <span class="img-container">
    <img src="/images/hexpansions/brainslug.jpeg" loading="lazy" alt="Brain slug hexpansions" data-title="Brainslug by Paul Beech" data-description=".custom-desc-jittery">
    <span class="label">Brainslug by <a href="https://x.com/guru/status/1793620540403613986">Paul Beech</a></span>
    <div class="glightbox-desc custom-desc-jittery">
      <p>Link: <a href="https://x.com/guru/status/1793620540403613986">Twitter</a></p>
    </div>
  </span>
<!--hexpansions-end-->
</div>

!!! tip "Add your hexpansion! We'd love to feature all of your creations!"

    If you want to add your hexpansions to this gallery, you can [add them to the registry](https://github.com/hughrawlinson/hexpansion-registry) or [add them to this issue](https://github.com/emfcamp/badge-2024-documentation/issues/149) or let us know on the IRC/Matrix! We'll do the rest!

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
