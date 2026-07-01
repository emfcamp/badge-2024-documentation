# Tildagon

![A hexagonal camp badge, with three smaller hexagonal PCBs containing breakout pins peaking out from the edges, and a screen showing @emfcamp](images/badge-photos/badge-with-screen.jpg "Tildagon with attached Hexpansions and screen"){: style="width:300px; height: auto" , align=right }

This year's badge is the Tildagon badge. It's a hexagon with a slot on each side that you can plug _[hexpansions](#hexpansions)_ into. A hexpansion is a 1 mm thick object with a hexagon shape on one edge (a six-sided polygon like this: ⬡). It can be made of card stock, so you can quickly add some cat ears to your badge, or it can be a printed circuit.

Unlike in previous years, [Electromagnetic Field](https://www.emfcamp.org/) is trying to make a [longer-lasting platform](#a-reusable-platform-with-an-interchangeable-part) so any apps developed for it will work for multiple years.

<br>

## What would you like to do with your badge?

<div class="grid cards" markdown>

- [I want to get my own badge](https://www.emfcamp.org/about/badge)
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
<div class="scroll-container admonition info">
<!--hexpansions-start-->
  <span class="img-container pinned">
    <img src="https://blog.emfcamp.org/images/2026-badge-photos/keebdeck_prototype.jpeg" loading="lazy" alt="Keyboard hexpansion prototype with Tildagon badge" data-title="Keebdexspansion by sodoku and davedarko" data-description=".custom-desc-keyboard-hexpansion">
    <span class="label"><a href="https://www.emfcamp.org/tickets/badge">Keebdexspansion</a> by sodoku, davedarko, and kliment</span>
    <span class="buyme"><a href="https://www.emfcamp.org/tickets/badge"><p>💰 BUY HERE</p></a></span>
    <span class="viewme"><a href="https://github.com/davedarko/KeebDeckHexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-keyboard-hexpansion">
      <div class="detailbuttons">
        <span class="buyme"><a href="https://www.emfcamp.org/tickets/badge"><p>💰 BUY HERE</p></a></span>
        <span class="viewme"><a href="https://github.com/davedarko/KeebDeckHexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/og-hexpansion.jpg" loading="lazy" alt="hexpansion exposing pins" data-title="The OG Hexpansion by kliment" data-description=".custom-desc-og">
    <span class="label"><a href="https://github.com/emfcamp/badge-2024-hardware/tree/main/hexpansion">OG Hexpansion</a> by kliment</span>
    <span class="viewme"><a href="https://github.com/emfcamp/badge-2024-hardware/tree/main/hexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-og">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/emfcamp/badge-2024-hardware/tree/main/hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/ducks.jpg" loading="lazy" alt="Tildagon badge with five duck hexpansions and an emergency hot sauce hexpansion" data-title="Duck hexpansion by Tiff" data-description=".custom-desc-ducks">
    <span class="label"><a href="https://www.instagram.com/tiffleek/reel/C7yx5jmNJ9d/">Ducks hexpansion</a> by Tiff</span>
    <div class="glightbox-desc custom-desc-ducks">
      <p>EMF ducks sixties style flying porcelain ducks</p>
      <p>Link: <a href="https://www.instagram.com/tiffleek/reel/C7yx5jmNJ9d/">Instagram</a></p>
    </div>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/goose.png" loading="lazy" alt="Skyler's Goosespansion" data-title="Goosespansion by Skyler Mansfield" data-description=".custom-desc-goosespansion">
    <span class="label">Goosespansion by Skyler Mansfield</span>
    <span class="viewme"><a href="https://github.com/skyler84-tildagon-addons/goosepansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-goosespansion">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/skyler84-tildagon-addons/goosepansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
    <span class="img-container">
    <img src=" ../../images/hexpansions/bleepie.jpg" loading="lazy" alt="Bleepie paging hexpansion on Tildagon badge" data-title="Bleepie paging hexpansion by Sam Machin" data-description=".custom-desc-bleepie">
    <span class="label"><a href="https://www.youtube.com/watch?v=itg0bViiKIg">Bleepie paging hexpansion</a> by Sam Machin</span>
    <span class="viewme"><a href="https://www.youtube.com/watch?v=itg0bViiKIg"><p>🎥 WATCH IT</p></a></span>
    <div class="glightbox-desc custom-desc-bleepie">
      <p>Paging hexpansion with RAIO2, RP2040, and bleeper modules. The badge detects the hexpansion on plug-in and can send and receive pages.</p>
      <p>Videos: <a href="https://www.youtube.com/watch?v=itg0bViiKIg">YouTube</a> · <a href="https://www.youtube.com/watch?v=791P1Sn_h2k">YouTube</a></p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://www.youtube.com/watch?v=itg0bViiKIg"><p>🎥 WATCH IT</p></a></span>
        <span class="viewme"><a href="https://www.youtube.com/watch?v=791P1Sn_h2k"><p>🎥 WATCH IT</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/interposer.jpg" loading="lazy" alt="interposer hexpansion" data-title="Interposer by The Untitled Goose" data-description=".custom-desc-interposer">
    <span class="label"><a href="https://github.com/eastabrooka/badge-2024-addons/tree/eastabrooka/Interposer/UntitledGoose-Eastabrooka">Interposer</a> by The Untitled Goose</span>
    <span class="buyme"><a href="https://www.gavinchester.com/Hexpansion.htm"><p>💰 BUY HERE</p></a></span>
    <span class="viewme"><a href="https://github.com/eastabrooka/badge-2024-addons/tree/eastabrooka/Interposer/UntitledGoose-Eastabrooka"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-interposer">
      <div class="detailbuttons">
        <span class="buyme"><a href="https://www.gavinchester.com/Hexpansion.htm"><p>💰 BUY HERE</p></a></span>
        <span class="viewme"><a href="https://github.com/eastabrooka/badge-2024-addons/tree/eastabrooka/Interposer/UntitledGoose-Eastabrooka"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/plotter.gif" loading="lazy" alt="Plotter hexpansion" data-title="Plotter hexpansion by Danny Walker" data-description="">
    <span class="label">Plotter hexpansion by Danny Walker</span>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/protoboard.jpg" loading="lazy" alt="A prototyping hexpansion for the EMF 2024 Tildagon Badge." data-title="Protoboard Hexpansion by Jake Walker" data-description=".custom-desc-protoboard">
    <span class="label"><a href="https://www.tindie.com/products/jakew/protoboard-hexpansion/">Protoboard Hexpansion</a> by Jake Walker</span>
    <span class="buyme"><a href="https://www.tindie.com/products/jakew/protoboard-hexpansion/"><p>💰 BUY HERE</p></a></span>
    <div class="glightbox-desc custom-desc-protoboard">
      <div class="detailbuttons">
        <span class="buyme"><a href="https://www.tindie.com/products/jakew/protoboard-hexpansion/"><p>💰 BUY HERE</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container">
    <img src=" ../../images/hexpansions/gps.webp" loading="lazy" alt="GPS Hexpansion" data-title="GPS Hexpansion by The Machine Shop" data-description=".custom-desc-gps-hexpansion">
    <span class="label"><a href="https://themachineshop.uk/products/gps-hexpansion">GPS Hexpansion</a> by The Machine Shop</span>
    <span class="buyme"><a href="https://themachineshop.uk/products/gps-hexpansion"><p>💰 BUY HERE</p></a></span>
    <span class="viewme"><a href="https://github.com/TechCabin/EMFBadge-Hexpansions-GPS"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-gps-hexpansion">
      <div class="detailbuttons">
        <span class="buyme"><a href="https://themachineshop.uk/products/gps-hexpansion"><p>💰 BUY HERE</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/dectspansion.png" loading="lazy" alt="DECTspansion PCB render" data-title="DECTspansion by jasonalexander-ja" data-description=".custom-desc-dectspansion">
    <span class="label"><a href="https://github.com/jasonalexander-ja/dectspansion">DECTspansion</a> by <a href="https://github.com/jasonalexander-ja">jasonalexander-ja</a></span>
    <span class="viewme"><a href="https://github.com/jasonalexander-ja/dectspansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-dectspansion">
      <p>DECT module for the Tildagon badge. Requires a headphone (audio) connection. Design builds on the SC14CVM DECT devboard and the EMF hexpansion. Early prototype. License: CERN-OHL-S-2.0.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/jasonalexander-ja/dectspansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/rainbow.jpg" loading="lazy" alt="LED Rainbow Filament hexpansion" data-title="LED Filament hexpansion by John Thurmond" data-description="">
    <span class="label">LED Filament hexpansion by John Thurmond</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/robotmad.jpg" loading="lazy" alt="Hex-Drive plugged into Hex-Dev" data-title="Hex-Drive and Hex-Dev by Team RobotMad" data-description=".custom-desc-robotmad">
    <span class="label"><a href="https://robotmad.odoo.com/shop">Hex-Drive and Hex-Dev</a> by Team RobotMad</span>
    <span class="buyme"><a href="https://robotmad.odoo.com/shop"><p>💰 BUY HERE</p></a></span>
    <div class="glightbox-desc custom-desc-robotmad">
      <div class="detailbuttons">
        <span class="buyme"><a href="https://robotmad.odoo.com/shop"><p>💰 BUY HERE</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/eeh.gif" loading="lazy" alt="Rabbit hexpansion" data-title="EEH Hexpansion by Matt" data-description="">
    <span class="label">EEH Hexpansion by Matt</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/tabasco.jpg" loading="lazy" alt="Hot Sauce hexpansion (chipotle flavor)" data-title="Emergency Hot Sauce hexpansion (chipotle flavor) by John Thurmond" data-description="">
    <span class="label">Emergency Hot Sauce hexpansion (chipotle flavor) by John Thurmond</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/makerspace.gif" loading="lazy" alt="Makerspace hexpansion" data-title="Maker Space badge by Dan Nixon" data-description=".custom-desc-makerspace">
    <span class="label"><a href="https://www.makerspace.org.uk/">Maker Space</a> badge by Dan Nixon</span>
    <span class="viewme"><a href="https://github.com/DanNixon/hexpansions/tree/main/makerspace-badge"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-makerspace">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/DanNixon/hexpansions/tree/main/makerspace-badge"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/ethernet.jpg" loading="lazy" alt="Ethernet and PoE hexpansion on Tildagon badge" data-title="Ethernet hexpansion by Dan Nixon" data-description=".custom-desc-ethernet">
    <span class="label"><a href="https://github.com/DanNixon/ethernet-hexpansion">Ethernet hexpansion</a> by Dan Nixon</span>
    <span class="viewme"><a href="https://github.com/DanNixon/ethernet-hexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-ethernet">
      <p>W5500-based Ethernet and PoE hexpansion using a WIZnet WIZPoE-P1 module.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/DanNixon/ethernet-hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/doubleSD.jpg" loading="lazy" alt="Dual micro SD card hexpansion on Tildagon badge" data-title="Dual SD Card hexpansion by Dan Nixon" data-description=".custom-desc-dual-sd-hexpansion">
    <span class="label"><a href="https://themachineshop.uk/products/dual-sd-card-hexpansion">Dual SD Card hexpansion</a> by Dan Nixon</span>
    <span class="buyme"><a href="https://themachineshop.uk/products/dual-sd-card-hexpansion"><p>💰 BUY HERE</p></a></span>
    <span class="viewme"><a href="https://github.com/DanNixon/microsd-hexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-dual-sd-hexpansion">
      <p>Two microSD card slots on a shared SPI bus, with physical card detection.</p>
      <p>Link: <a href="https://fediscience.org/@samtygier/116778172027213412">@samtygier on fediscience.org</a></p>
      <div class="detailbuttons">
        <span class="buyme"><a href="https://themachineshop.uk/products/dual-sd-card-hexpansion"><p>💰 BUY HERE</p></a></span>
        <span class="viewme"><a href="https://github.com/DanNixon/microsd-hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/smol-breakout.jpeg" loading="lazy" alt="Two smol breakout hexpansions, showing both sides" data-title="Smol breakout hexpansion by Dan Nixon" data-description="">
    <span class="label">Smol breakout hexpansion by Dan</span>
    <span class="viewme"><a href="https://github.com/DanNixon/smol-breakout-hexpansion"><p>👀 VIEW FILES</p></a></span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/jwst-hexpansion.jpg" loading="lazy" alt="Tildagon badge surrounded by yellow hexagons in James Webb Space Telescope mirror style" data-title="James Webb Space Telescope hexpansion by Ben C" data-description=".custom-desc-jwst-hexpansion">
    <span class="label"><a href="https://morehammer.uk/@bencc/116704814965510084">James Webb Space Telescope hexpansion</a> by Ben C</span>
    <div class="glightbox-desc custom-desc-jwst-hexpansion">
      <p>Decorative hexpansion with 18 yellow hexagonal tiles arranged like the James Webb Space Telescope primary mirror.</p>
      <p>Link: <a href="https://morehammer.uk/@bencc/116704814965510084">@bencc on morehammer.uk</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/floppy-disk.jpg" loading="lazy" alt="Floppy disk hexpansion" data-title="Floppy disk 'Flopagon' by Nathan Dumont" data-description=".custom-desc-flopagon">
    <span class="label">Floppy disk <a href="https://github.com/hairymnstr/Flopagon">"Flopagon"</a> by Nathan
    Dumont</span>
    <span class="viewme"><a href="https://github.com/hairymnstr/Flopagon"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-flopagon">
      <p>Floppy disk hexpansion with app and EEPROM support. See the <a href="https://github.com/hairymnstr/flopagon#software">software setup instructions</a> on GitHub.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/hairymnstr/Flopagon"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/croc-clip.jpg" loading="lazy" alt="Croc-clip friendly I/O pads hexpansion on Tildagon badge" data-title="Croc-clip friendly I/O pads hexpansion by Nathan Dumont" data-description="">
    <span class="label">Croc-clip friendly I/O pads hexpansion by Nathan Dumont</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/flipspansion.png" loading="lazy" alt="Flipspansion adapter PCB" data-title="Flipspansion by kliment" data-description=".custom-desc-flipspansion">
    <span class="label"><a href="https://codeberg.org/kliment/flipspansion">Flipspansion</a> by kliment</span>
    <span class="viewme"><a href="https://codeberg.org/kliment/flipspansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-flipspansion">
      <p>Adapter to mount a hexpansion upside down. Use only in hexpansion slots that are <em>not</em> above a USB port (see project README).</p>
      <p>As requested by DuncanT.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://codeberg.org/kliment/flipspansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/microsd.jpg" loading="lazy" alt="Micro SD card hexpansion with Tildagon badge" data-title="SD card hexpansion by DuncanT" data-description="">
    <span class="label">SD card hexpansion by DuncanT</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/keebdeck-hexpansion.jpg" loading="lazy" alt="KeebDeck keyboard hexpansion Prototype with Tildagon badge" data-title="KeebDeck Hexpansion by davedarko and sodoku" data-description=".custom-desc-keebdeck">
    <span class="label"><a href="https://github.com/davedarko/KeebDeckHexpansion">KeebDeck Hexpansion Prototype</a> by davedarko and sodoku</span>
    <span class="viewme"><a href="https://github.com/davedarko/KeebDeckHexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-keebdeck">
      <p>Full-layout keyboard hexpansion using the <a href="https://www.solder.party/docs/keebdeck/keyboard/">solder.party KeebDeck</a>, with RGB-backlit keys for typing in text inputs. Hardware by Dave; software by sodoku.</p>
      <p>Software: <a href="https://github.com/sodoku/tildagon-keebdexpansion">tildagon-keebdexpansion</a></p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/davedarko/KeebDeckHexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src="../../images/hexpansions/hexapod-hexpansion.png" loading="lazy" alt="LEGspansion PCB render with three servo connectors" data-title="LEGspansion by davedarko" data-description=".custom-desc-legspansion">
    <span class="label"><a href="https://codeberg.org/davedarko/LEGspansion">LEGspansion</a> by davedarko</span>
    <span class="viewme"><a href="https://codeberg.org/davedarko/LEGspansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-legspansion">
      <p>Tildagon hexpansion PCB with three servo outputs. Firmware for the CH32V003 microcontroller is based on <a href="https://github.com/deshipu/mite-servo">deshipu's mite-servo</a>.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://codeberg.org/davedarko/LEGspansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/microphone-hexpansion.png" loading="lazy" alt="Tildagon badge with microphone hexpansion" data-title="Microphone hexpansion by Lix" data-description=".custom-desc-microphone-hexpansion">
    <span class="label"><a href="https://mastodon.social/@GlitchEngine/116410291765902200">Microphone hexpansion</a> by Lix</span>
    <span class="viewme"><a href="https://mastodon.social/@GlitchEngine/116410291765902200"><p>🎥 WATCH IT</p></a></span>
    <div class="glightbox-desc custom-desc-microphone-hexpansion">
      <p>Microphone hexpansion that captures audio samples and runs on-device visualisations from EEPROM.</p>
      <p>Video: <a href="https://mastodon.social/@GlitchEngine/116410291765902200">@GlitchEngine on Mastodon</a></p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://mastodon.social/@GlitchEngine/116410291765902200"><p>🎥 WATCH IT</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/fridgehead.jpg" loading="lazy" alt="DECTalk speech synthesizer hexpansion" data-title="DECTalk hexpansion by tomwyatt" data-description=".custom-desc-dectalk">
    <span class="label"><a href="https://infosec.exchange/@fridgehead/116240064715205161">DECTalk hexpansion</a> by tomwyatt</span>
    <div class="glightbox-desc custom-desc-dectalk">
      <p>Hexpansion with a DECtalk speech synthesizer</p>
      <p>Link: <a href="https://infosec.exchange/@fridgehead/116240064715205161">@fridgehead on infosec.exchange</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/headphone-hexpansion.png" loading="lazy" alt="Headphone jack hexpansion PCB render" data-title="Headphone jack hexpansion by ArcaneNibble" data-description=".custom-desc-headphone-hexpansion">
    <span class="label"><a href="https://github.com/ArcaneNibble/hexpansion-headphones">Headphone jack hexpansion</a> by ArcaneNibble</span>
    <span class="viewme"><a href="https://github.com/ArcaneNibble/hexpansion-headphones"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-headphone-hexpansion">
      <p>Hexpansion with ES8388 headphone codec and 3.5mm jack.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/ArcaneNibble/hexpansion-headphones"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/ir-hexpansion.jpg" loading="lazy" alt="IR Tx/Rx hexpansion PCB render" data-title="IR Tx/Rx hexpansion by ArcaneNibble" data-description=".custom-desc-ir-hexpansion">
    <span class="label"><a href="https://github.com/ArcaneNibble/hexpansion-ir-tool">IR Tx/Rx hexpansion</a> by ArcaneNibble</span>
    <span class="viewme"><a href="https://github.com/ArcaneNibble/hexpansion-ir-tool"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-ir-hexpansion">
      <p>38 kHz consumer infrared transmit and receive, with a Puya PY32 microcontroller.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/ArcaneNibble/hexpansion-ir-tool"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/light-hexpansion.jpg" loading="lazy" alt="TGSTL sound-to-light hexpansion (still from project video)" data-title="TGSTL sound-to-light by Tony Goacher" data-description=".custom-desc-tgstl">
    <span class="label"><a href="https://github.com/tonygoacher/tildagon_soundtolight">TGSTL</a> sound-to-light by Tony Goacher</span>
    <span class="viewme"><a href="https://github.com/tonygoacher/tildagon_soundtolight"><p>👀 VIEW FILES</p></a></span>
    <span class="viewme"><a href="https://hackaday.io/project/205329-sound-to-light-for-emf-tildagon-badge"><p>📖 READ BLOG</p></a></span>
    <span class="viewme"><a href="https://www.youtube.com/watch?v=Oy822CMz1iM"><p>🎥 WATCH IT</p></a></span>
    <div class="glightbox-desc custom-desc-tgstl">
      <p>TGSTL turns the Tildagon badge into a portable sound-to-light unit using the onboard LEDs, with multiple lighting effects and adjustable sensitivity. There is also a manually selectable RGB fader when there is no music.</p>
      <p>Video: <a href="https://www.youtube.com/watch?v=Oy822CMz1iM">YouTube</a> · Photo: <a href="https://photos.app.goo.gl/WsUy2U74gAunsbfm8">Google Photos</a> · Resources: <a href="https://github.com/tonygoacher/tildagon_soundtolight">GitHub</a></p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/tonygoacher/tildagon_soundtolight"><p>👀 VIEW FILES</p></a></span>
        <span class="viewme"><a href="https://hackaday.io/project/205329-sound-to-light-for-emf-tildagon-badge"><p>📖 READ BLOG</p></a></span>
        <span class="viewme"><a href="https://www.youtube.com/watch?v=Oy822CMz1iM"><p>🎥 WATCH IT</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hexpansions-models.webp" loading="lazy" alt="EMF Tildagon hexpansion template" data-title="EMF Tildagon hexpansion template by Andy Piper" data-description=".custom-desc-hexpansion-template">
    <span class="label"><a href="https://www.printables.com/model/826094-emf-tildagon-hexpansion-template">EMF Tildagon hexpansion template</a> by Andy Piper</span>
    <span class="printme"><a href="https://www.printables.com/model/826094-emf-tildagon-hexpansion-template"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-hexpansion-template">
      <p>Templates for prototyping hexpansion boards for the Tildagon badge.</p>
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/826094-emf-tildagon-hexpansion-template"><p>🖨️ PRINT ME (Printables)</p></a></span>
        <span class="printme"><a href="https://www.thingiverse.com/thing:6556964"><p>🖨️ PRINT ME (Thingyverse)</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/johnT.jpg" loading="lazy" alt="Edge-lit Millennium Falcon hexpansion" data-title="Edge-lit Millennium Falcon hexpansion by grajohnt" data-description="">
    <span class="label">Edge-lit Millennium Falcon hexpansion by grajohnt</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/Hexatetrahedron.jpg" loading="lazy" alt="Hexatetrahedron hexpansion" data-title="Hexatetrahedron by grajohnt" data-description="">
    <span class="label">Hexatetrahedron by grajohnt</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/radio.jpg" loading="lazy" alt="Audio output hexpansion" data-title="Audio output hexpansion by Andrea" data-description="">
    <span class="label">Audio output hexpansion hexpansion by Andrea</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/Radiolarian.png" loading="lazy" alt="Radiolarian hexpansion" data-title="Radiolarian by webmariner" data-description=".custom-desc-radiolarian">
    <span class="label"><a href="https://github.com/webmariner/Radiolarian">Radiolarian</a> by webmariner</span>
    <span class="viewme"><a href="https://github.com/webmariner/Radiolarian"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-radiolarian">
      <p>A flexible digital radio hexpansion for the Tildagon.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/webmariner/Radiolarian"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/gppk.jpg" loading="lazy" alt="Mustache hexpansion" data-title="Mustache hexpansion by GPPK" data-description="">
    <span class="label">Mustache hexpansion by GPPK</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/gppk2.jpg" loading="lazy" alt="EMF sign hexpansion" data-title="EMF sign hexpansion by GPPK" data-description="">
    <span class="label">EMF sign hexpansion by GPPK</span>
  </span>
    <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/max.jpg" loading="lazy" alt="Max hexpansion by Catherine" data-title="Max hexpansion by Catherine" data-description="">
    <span class="label">Max hexpansion by Catherine</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/googly.jpg" loading="lazy" alt="Floppy disk hexpansion" data-title="40mm Googly Eye by John Dumont" data-description="">
    <span class="label">40mm Googly Eye by John Dumont</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/wheel.jpg" loading="lazy" alt="Wheel hexpansion" data-title="Omni wheel by Nathan Dumont" data-description=".custom-desc-wheel">
    <span class="label"><a href="https://github.com/hairymnstr/omni-wheel-hexpansion">Omni wheel</a> by Nathan Dumont</span>
    <span class="viewme"><a href="https://github.com/hairymnstr/omni-wheel-hexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-wheel">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/hairymnstr/omni-wheel-hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/monsters.jpg" loading="lazy" alt="little monster hexpansions" data-title="Little Monsters by Talula" data-description="">
    <span class="label">Little Monsters by Talula</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/segment-display.jpg" loading="lazy" alt="A 7 segment display hexpansion" data-title="7-segment display by Iain Yarnall" data-description=".custom-desc-segment">
    <span class="label"><a href="https://www.printables.com/model/888549-emf-tildagon-hexpansion-7-segment-display">7-Segment display</a> by Iain Yarnall</span>
    <span class="printme"><a href="https://www.printables.com/model/888549-emf-tildagon-hexpansion-7-segment-display"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-segment">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/888549-emf-tildagon-hexpansion-7-segment-display"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/earplug-case.jpg" loading="lazy" alt="Earplug case hexpansion on Tildagon badge" data-title="Earplug case hexpansion by Iain Yarnall" data-description=".custom-desc-earplug-case">
    <span class="label"><a href="https://www.printables.com/model/1746745-emf-festival-tildagon-hexpansion-earplug-case">Earplug case hexpansion</a> by Iain Yarnall</span>
    <span class="printme"><a href="https://www.printables.com/model/1746745-emf-festival-tildagon-hexpansion-earplug-case"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-earplug-case">
      <p>Box hexpansion for keeping earplugs safe at the festival.</p>
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/1746745-emf-festival-tildagon-hexpansion-earplug-case"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/multi-threading.jpg" loading="lazy" alt="Multi-threading hexpansion with spools of thread on Tildagon badge" data-title="Multi-threading hexpansion by Iain Y" data-description=".custom-desc-multi-threading-hexpansion">
    <span class="label"><a href="https://mastodon.social/@IainY/116782414199666576">Multi-threading hexpansion</a> by Iain Yarnall</span>
    <div class="glightbox-desc custom-desc-multi-threading-hexpansion">
      <p>A multi-threading hexpansion for EMF Camp.</p>
      <p>Link: <a href="https://mastodon.social/@IainY/116782414199666576">Iain Y</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/sample-tube-holders.jpg" loading="lazy" alt="Sample tube holder hexpansions on Tildagon badge" data-title="Sample tube holders hexpansion by NekoLilly" data-description=".custom-desc-sample-tube-holders">
    <span class="label"><a href="https://www.printables.com/model/1741153-hexpansion-sample-tube-holders">Sample tube holders hexpansion</a> by NekoLilly</span>
    <span class="printme"><a href="https://www.printables.com/model/1741153-hexpansion-sample-tube-holders"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-sample-tube-holders">
      <p>Hexpansion adapters for 5 ml sample tubes.</p>
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/1741153-hexpansion-sample-tube-holders"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/mysterious-qr.jpg" loading="lazy" alt="A hexpansion with a QR code that might rickroll you" data-title="Mysterious QR Code by grajohnt" data-description="">
    <span class="label">Mysterious QR Code by grajohnt</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/badge-photos/hexpansion.png" loading="lazy" alt="Spirit level hexpansion" data-title="Spirit level by Chris" data-description="">
    <span class="label">Spirit level by Chris</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/rabbit.jpg" loading="lazy" alt="Rabbit hexpansion" data-title="That Rabbit by Dan Nixon" data-description="">
    <span class="label">That Rabbit by Dan Nixon</span>
    <span class="viewme"><a href="https://github.com/DanNixon/hexpansions/tree/main/rabbit"><p>👀 VIEW FILES</p></a></span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/duck.jpg" loading="lazy" alt="Rabbit hexpansion" data-title="Le Carnard de Bleu by Dan Nixon" data-description="">
    <span class="label">Le Carnard de Bleu by Dan Nixon</span>
    <span class="viewme"><a href="https://github.com/DanNixon/hexpansions/tree/main/le-carnard-bleu"><p>👀 VIEW FILES</p></a></span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/duck-light.jpg" loading="lazy" alt="Duck light hexpansion" data-title="Duck light by Frankie" data-description="">
    <span class="label">Duck light by Frankie</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/flame.gif" loading="lazy" alt="Flame hexpansion" data-title="Flame hexpansion by Frankie (Threadz 'n' Webz)" data-description="">
    <span class="label">Flame hexpansion by Frankie (Threadz 'n' Webz)</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/light-driver.jpg" loading="lazy" alt="LED driver hexpansion" data-title="LED driver hexpansion by grajohnt" data-description="">
    <span class="label">LED driver hexpansion by grajohnt</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hypnosnail.gif" loading="lazy" alt="HypnoSnail hexpansion" data-title="HypnoSnail hexpansion by grajohnt" data-description=".custom-desc-snail">
    <span class="label">HypnoSnail hexpansion by grajohnt</span>
    <span class="viewme"><a href="https://photos.app.goo.gl/PaQdymf4zkRWYKiZ8"><p>🎥 WATCH IT</p></a></span>
    <div class="glightbox-desc custom-desc-snail">
      <p>Video: <a href="https://photos.app.goo.gl/PaQdymf4zkRWYKiZ8">watch this</a></p>
      <span class="viewme"><a href="https://photos.app.goo.gl/PaQdymf4zkRWYKiZ8"><p>🎥 WATCH IT</p></a></span>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/duospander.png" loading="lazy" alt="Duospander hexpansion on Tildagon badge with two googly-eyed hexpansions" data-title="Duospander by grajohnt" data-description=".custom-desc-duospander">
    <span class="label"><a href="https://chaos.social/@grajohnt/116261942753286887">Duospander</a> by grajohnt</span>
    <div class="glightbox-desc custom-desc-duospander">
      <p>Unpowered hexpansion duospander. These will be available at EMF Camp.</p>
      <p>Link: <a href="https://chaos.social/@grajohnt/116261942753286887">grajohnt on chaos.socia</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/fidget.jpg" loading="lazy" alt="Fidget Spinner hexpansion" data-title="Fidget Spinner by Catherine" data-description=".custom-fidget">
    <span class="label"><a href="https://www.printables.com/model/925402-tildagon-hexpansion-fidget-spinnery">Fidget Spinner</a> by Catherine</span>
    <span class="printme"><a href="https://www.printables.com/model/925402-tildagon-hexpansion-fidget-spinner"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-fidget">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/925402-tildagon-hexpansion-fidget-spinner"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/breadbeard.jpg" loading="lazy" alt="Breadbeard hexpansion" data-title="Breadbeard Hexpansion by Danny Walker" data-description="">
    <span class="label">Breadbeard Hexpansion by Danny Walker</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/robotmad2.jpg" loading="lazy" alt="Many Hex-Drives" data-title="Hex-Drives by Team RobotMad" data-description="">
    <span class="label">Hex-Drives by Team RobotMad</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/gridfinity-expansion.webp" loading="lazy" alt="Gridfinity expansion" data-title="Gridfinity expansion hexpansion by Jack Fitton" data-description=".custom-desc-gridfinity">
    <span class="label"><a href="https://www.printables.com/model/883719-emf-tildagon-hexpansion-gridfinity">Gridfinity expansion hexpansion</a> by Jack Fitton</span>
    <span class="printme"><a href="https://www.printables.com/model/883719-emf-tildagon-hexpansion-gridfinity"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-gridfinity">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/883719-emf-tildagon-hexpansion-gridfinity"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/markers.jpg" loading="lazy" alt="GCHQ.net markers" data-title="GCHQ.NET markers by GCHQ.NET" data-description=".custom-desc-markers">
    <span class="label">GCHQ.NET markers by <a href="https://gchq.net/">GCHQ.NET</a></span>
    <div class="glightbox-desc custom-desc-markers">
      <p>Link: <a href="https://gchq.net/">GCHQ</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/cable.jpg" loading="lazy" alt="Megadrive controller hexpansion" data-title="Megadrive controller by Matthew Wilkes" data-description="">
    <span class="label">Megadrive controller by Matthew Wilkes</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/matt-w.gif" loading="lazy" alt="Too many LED hexpansion" data-title="Too many LED hexpansion by Matthew Wilkes" data-description="">
    <span class="label">Too many LED hexpansion by Matthew Wilkes</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/eyes.jpg" loading="lazy" alt="Eye hexpansion" data-title="Eye hexpansion by Alistair" data-description=".custom-desc-eyes">
    <span class="label"><a href="https://www.thingiverse.com/thing:6633547">Eye hexpansion</a> by Alistair</span>
    <span class="printme"><a href="https://www.thingiverse.com/thing:6633547"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-eyes">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.thingiverse.com/thing:6633547"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/smile.webp" loading="lazy" alt="Smile hexpansion" data-title="Smile hexpansion by Alistair" data-description=".custom-desc-smile">
    <span class="label"><a href="https://www.thingiverse.com/thing:6635025">Smile hexpansion</a> by Alistair</span>
    <span class="printme"><a href="https://www.thingiverse.com/thing:6635025"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-smile">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.thingiverse.com/thing:6635025"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/spirits.jpg" loading="lazy" alt="Spirit level hexpansions" data-title="Spirit level hexpansions by Andy Piper" data-description=".custom-desc-spirits">
    <span class="label"><a href="https://www.printables.com/model/893545-spirit-level-hexpansions">Spirit level hexpansions</a> by Andy Piper</span>
    <span class="printme"><a href="https://www.printables.com/model/893545-spirit-level-hexpansions"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-spirits">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/893545-spirit-level-hexpansions"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/duckpond.jpg" loading="lazy" alt="Duck pond hexpansion" data-title="Duck pond hexpansion by Andy Piper" data-description="">
    <span class="label">Duck pond hexpansion by Andy Piper</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/batwings.jpg" loading="lazy" alt="Bat wing hexpansion" data-title="Bat wing hexpansions by clayalien" data-description=".custom-desc-wings">
    <span class="label"><a href="https://www.printables.com/model/910264-emf-tildagon-dragon-wings-hexpansion">Bat wing hexpansions</a> by clayalien</span>
    <span class="printme"><a href="https://www.printables.com/model/910264-emf-tildagon-dragon-wings-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-wings">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/910264-emf-tildagon-dragon-wings-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/fairy-wings.jpg" loading="lazy" alt="Fairy wings hexpansion" data-title="Fairy wings by Charlotte Dumont" data-description="">
    <span class="label">Fairy wings by Charlotte Dumont</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/not_lego_but_compatible.webp" loading="lazy" alt="Not lego baseplate hexpansion" data-title="Not lego baseplate hexpansion by adie" data-description=".custom-desc-compatible">
    <span class="label"><a href="https://www.printables.com/model/894472-not-lego-baseplate-hexpansion">Not lego baseplate hexpansion</a> by adie</span>
    <span class="printme"><a href="https://www.printables.com/model/894472-not-lego-baseplate-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-compatible">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/894472-not-lego-baseplate-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/lego-2.jpg" loading="lazy" alt="Brickspansion (6x6) hexpansion" data-title="Brickspansion (6x6) by Crumplump" data-description=".custom-desc-brickspansion-6x6">
    <span class="label"><a href="https://www.printables.com/model/895774-lego-compatible-hexpansion-for-emf-tilgadon-badge">Brickspansion (6x6)</a> by Crumplump</span>
    <span class="printme"><a href="https://www.printables.com/model/895774-lego-compatible-hexpansion-for-emf-tilgadon-badge"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-brickspansion-6x6">
      <p>Remix of Adie's design to allow 6 plates to be attached to the badge, without colliding.</p>
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/895774-lego-compatible-hexpansion-for-emf-tilgadon-badge"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/interlocking-brick-hexpansions.png" loading="lazy" alt="Interlocking brick hexpansions in several plate sizes" data-title="Interlocking Brick Hexpansions by Floppy" data-description=".custom-desc-brick-hexpansions">
    <span class="label"><a href="https://manyfold.floppy.org.uk/models/pqlm541tkf16">Interlocking Brick Hexpansions</a> by Floppy</span>
    <span class="printme"><a href="https://manyfold.floppy.org.uk/models/pqlm541tkf16"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-brick-hexpansions">
      <p>Stud-compatible plates in several sizes, including versions with a USB-C cutout. (The 2x6 is slightly oversize for the spec if you want to go there.) FDM: print on their side so layer lines are not along the board edge. Hexpansion base template: <a href="https://3dprint.social/@andypiper">@andypiper@3dprint.social</a>.</p>
      <div class="detailbuttons">
        <span class="printme"><a href="https://manyfold.floppy.org.uk/models/pqlm541tkf16"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/legospansion.jpg" loading="lazy" alt="A Lego 2x1 plate hotglued into a repurposed hexpansion mount" data-title="Legospansion by pikesley" data-description=".custom-desc-legospansion">
    <span class="label"><a href="https://mastodon.me.uk/@pikesley/116358523931957822">Legospansion</a> by pikesley</span>
    <div class="glightbox-desc custom-desc-legospansion">
      <p>Lego stud hexpansion idea, prototyped with hot glue.</p>
      <p>Link: <a href="https://mastodon.me.uk/@pikesley/116358523931957822">@pikesley on mastodon.me.uk</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/display.webp" loading="lazy" alt="Display platform hexpansion" data-title="Display platform hexpansion by adie" data-description=".custom-desc-display">
    <span class="label"><a href="https://www.printables.com/model/894438-display-platform-hexpansion">Display platform hexpansion</a> by adie</span>
    <span class="printme"><a href="https://www.printables.com/model/894438-display-platform-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-display">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/894438-display-platform-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/glonouns.jpg" loading="lazy" alt="glowing pronoun hexpansions" data-title="Glowing pronoun hexpansions by Emily S" data-description=".custom-desc-glonouns">
    <span class="label"><a href="https://www.printables.com/model/885935-pronoun-hexpansion">Glowing pronoun hexpansions</a> by Emily S</span>
    <span class="printme"><a href="https://www.printables.com/model/885935-pronoun-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-glonouns">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/885935-pronoun-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/pronouns.jpg" loading="lazy" alt="pronoun hexpansions" data-title="Pronoun hexpansions by Emily S" data-description=".custom-desc-pronouns">
    <span class="label"><a href="https://www.printables.com/model/885935-pronoun-hexpansion">Pronoun hexpansions</a> by Emily S</span>
    <span class="printme"><a href="https://www.printables.com/model/885935-pronoun-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-pronouns">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/885935-pronoun-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/keyboard.png" loading="lazy" alt="Keyboard hexpansion" data-title="Keyboard by Bob" data-description="">
    <span class="label">Keyboard by Bob</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/bob-frog.jpg" loading="lazy" alt="Bob's frog prototype" data-title="Frog prototype by Bob" data-description="">
    <span class="label">Frog prototype by Bob</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/social-battery.jpg" loading="lazy" alt="Social battery hexpansion with LED bar graph" data-title="Social battery by Bob" data-description="">
    <span class="label">Social battery by Bob</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/eyes-lit.gif" loading="lazy" alt="Bob's googly eye hexpansion" data-title="Many eyes by Bob" data-description=".custom-desc-lit">
    <span class="label"><a href="https://github.com/emfcamp/badge-2024-addons/tree/main/thinkl33t/googly-eye-hexpansion">Many eyes</a> by Bob</span>
    <span class="viewme"><a href="https://github.com/emfcamp/badge-2024-addons/tree/main/thinkl33t/googly-eye-hexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-lit">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/emfcamp/badge-2024-addons/tree/main/thinkl33t/googly-eye-hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/sao.jpg" loading="lazy" alt="&quot;Legacy&quot; adapter" data-title="Legacy adapter (SAO, TiDAL, QW/ST) by dratini0" data-description=".custom-desc-dratini">
      <div><span class="label"><a href="https://github.com/dratini0/legacy-adapter-hexpansion">"Legacy" adapter (SAO, TiDAL, QW/ST)</a> by dratini0</span>
      <span class="viewme"><a href="https://github.com/dratini0/legacy-adapter-hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
      <div class="glightbox-desc custom-desc-dratini">
        <div class="detailbuttons">
          <span class="viewme"><a href="https://github.com/dratini0/legacy-adapter-hexpansion"><p>👀 VIEW FILES</p></a></span>
        </div>
      </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hub75.jpg" loading="lazy" alt="HUB75 hexpansion" data-title="HUB75 hexpansion by dratini0" data-description=".custom-desc-hub75">
    <span class="label"><a href="https://github.com/dratini0/hub75-hexpansion">HUB75 hexpansion</a> by dratini0</span>
    <span class="viewme"><a href="https://github.com/dratini0/hub75-hexpansion"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-hub75">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/dratini0/hub75-hexpansion"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/blank.jpg" loading="lazy" alt="blank hexpansion" data-title="Blank Hexpansion by Nathan Dumont" data-description="">
    <span class="label">Blank Hexpansion by Nathan Dumont</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/falcon.jpg" loading="lazy" alt="Corellian Freigher hexpansion" data-title="Corellian Freighter Hexpansion by Andy Piper" data-description="">
    <span class="label">Corellian Freighter Hexpansion by Andy Piper</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/catear.webp" loading="lazy" alt="Cat ears and whiskers hexpansion" data-title="Cat ears and whiskers by catnerd" data-description=".custom-desc-whisker">
    <span class="label"><a href="https://www.printables.com/de/model/888105-catear-and-whisker-hexpansion">Cat ears and whiskers</a> by catnerd</span>
    <span class="printme"><a href="https://www.printables.com/de/model/888105-catear-and-whisker-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-whisker">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/de/model/888105-catear-and-whisker-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/ECHQ.jpg" loading="lazy" alt="ECHQ hexpansion" data-title="ECHQ hexpansion by ECHQ village" data-description="">
    <span class="label">ECHQ hexpansion by ECHQ village</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/breakout-garden.jpg" loading="lazy" alt="Breakout Garden hexpansion" data-title="Pimoroni Breakout Garden I2C by James Sutton" data-description=".custom-desc-breakout-garden">
    <span class="label">Pimoroni Breakout Garden I2C by <a href="https://github.com/jpwsutton">James Sutton</a></span>
    <div class="glightbox-desc custom-desc-breakout-garden">
      <p>Link: <a href="https://github.com/jpwsutton">GitHub</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hexpansaputer.jpg" loading="lazy" alt="Hexaspansaputer" data-title="Hexaspansaputer (hexpansion supercomputer) by o0mouse0o" data-description="A mini flashing supercomputer in RED, BLUE and GREEN. Called Hexaspansaputer - a pun on Hexpansion and Supercomputer and might be familiar to people who view Big Clives Livestreams.">
    <span class="label">Hexaspansaputer (hexpansion supercomputer) by o0mouse0o</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/pride-rainbow.jpg" loading="lazy" alt="Pride rainbow LED strips hexpansion" data-title="A pride rainbow by o0mouse0o" data-description="A static Pride Flag with 42 LEDs.">
    <span class="label">A pride rainbow by o0mouse0o</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/6flags.webp" loading="lazy" alt="small flag hexpansion" data-title="6flags Hexpansion by Ambrosia" data-description=".custom-desc-6flags">
    <span class="label"><a href="https://www.printables.com/model/895999-6flags-hexpansion">6flags Hexpansion</a> by Ambrosia</span>
    <span class="printme"><a href="https://www.printables.com/model/895999-6flags-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-desc-6flags">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/895999-6flags-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/honk.jpg" loading="lazy" alt="goose hexpansion" data-title="Simple Honk by The Untitled Goose" data-description="">
    <span class="label">Simple Honk by The Untitled Goose</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/pacman.png" loading="lazy" alt="Pacman hexpansion" data-title="Pacman by The Untitled Goose" data-description="">
    <span class="label">Pacman by The Untitled Goose</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/keycard.jpg" loading="lazy" alt="Doom Keycard hexpansion" data-title="Doom Keycard by The Untitled Goose" data-description="">
    <span class="label">Doom Keycard by The Untitled Goose</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hexnotoad.gif" loading="lazy" alt="Hexnotoad hexpansion" data-title="Hexnotoad by The Untitled Goose" data-description="">
    <span class="label">Hexnotoad by The Untitled Goose</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hacktheplanet.jpg" loading="lazy" alt="Hack the Planet hexpansion" data-title="Hack the Planet by The Untitled Goose" data-description="">
    <span class="label">Hack the Planet by The Untitled Goose</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/nyancat.gif" loading="lazy" alt="Nyan cat hexpansion" data-title="Nyan cat hexpansion by The Untitled Goose" data-description="">
    <span class="label">Nyan cat hexpansion by The Untitled Goose</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/doggo.gif" loading="lazy" alt="K9 hexpansion" data-title="K9 hexpansion by emericklaw" data-description=".custom-desc-k9">
    <span class="label">K9 hexpansion by emericklaw</span>
    <span class="viewme"><a href="https://youtube.com/shorts/mpWKbsG5E6w"><p>🎥 WATCH IT</p></a></span>
    <div class="glightbox-desc custom-desc-k9">
      <p>Video: <a href="https://youtube.com/shorts/mpWKbsG5E6w">YouTube</a></p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://youtube.com/shorts/mpWKbsG5E6w"><p>🎥 WATCH IT</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/henchmen.jpg" loading="lazy" alt="Henchmen hexpansion" data-title="Henchmen by Brian Corteil" data-description="">
    <span class="label">Henchmen by Brian Corteil</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/alien.jpg" loading="lazy" alt="Googly Eye Alien hexpansion" data-title="Googly Eye Alien by Brian Corteil" data-description="">
    <span class="label">Googly Eye Alien by Brian Corteil</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/tilde-lamp.jpg" loading="lazy" alt="Lamp hexpansion" data-title="Lamp hexpansion by Tilde" data-description="">
    <span class="label">Lamp hexpansion by Tilde</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/tilde-breakout.jpg" loading="lazy" alt="Breakout hexpansion" data-title="Breakout hexpansion by Tilde" data-description="">
    <span class="label">Breakout hexpansion by Tilde</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/jittery.jpg" loading="lazy" alt="Breakout hexpansion" data-title="Caffeine Jitters by Danny Walker" data-description=".custom-desc-jittery">
    <span class="label"><a href="https://github.com/walkerdanny/caffeine-jitters/">Caffeine Jitters</a> by Danny Walker</span>
    <span class="viewme"><a href="https://github.com/walkerdanny/caffeine-jitters/"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-jittery">
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/walkerdanny/caffeine-jitters/"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/petals.jpg" loading="lazy" alt="petal hexpansions on a badge" data-title="Petals by lornajane" data-description=".custom-desc-petals">
    <span class="label"><a href="https://github.com/magicmonkey/emf_badge/blob/main/hexpansion_footprints.svg">Petals</a> by <a href="https://indieweb.social/@lornajane/112536772003752312">lornajane</a></span>
    <span class="viewme"><a href="https://github.com/magicmonkey/emf_badge/blob/main/hexpansion_footprints.svg"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-petals">
      <p>Petals on a badge</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/magicmonkey/emf_badge/blob/main/hexpansion_footprints.svg"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/laser.jpg" loading="lazy" alt="Laser Tag and Shieldallion hexpansions" data-title="Laser Tag Shieldallion by kianryan" data-description=".custom-desc-jittery">
    <span class="label">Laser Tag Shieldallion by <a href="https://oldbytes.space/@kianryan/112541772244815335">kianryan</a></span>
    <div class="glightbox-desc custom-desc-jittery">
      <p>Software link may be available later...</p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/cat.jpg" loading="lazy" alt="Cat hexpansion" data-title="Cat hexpansion" data-description="">
    <span class="label">Cat hexpansion</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/brainslug.jpg" loading="lazy" alt="Brain slug hexpansions" data-title="Brainslug by Paul Beech" data-description=".custom-desc-jittery">
    <span class="label">Brainslug by <a href="https://x.com/guru/status/1793620540403613986">Paul Beech</a></span>
    <div class="glightbox-desc custom-desc-jittery">
      <p>Link: <a href="https://x.com/guru/status/1793620540403613986">Twitter</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/nullsector.jpg" loading="lazy" alt="Polybius Biotech Employee Authenticator hexpansions" data-title="Polybius Biotech Employee Authenticator by Graham Sutherland (Polybius Biotech)" data-description=".custom-desc-polybius">
    <span class="label">Polybius Biotech Employee Authenticator by Graham Sutherland (Polybius Biotech)</span>
    <div class="glightbox-desc custom-desc-polybius">
      <p>DESCRIPTION REDACTED BY POLYBIUS BIOTECH SECURITY</p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/mrtildagon.jpg" loading="lazy" alt="Mr tildagon" data-title="Helping HexpHANDsion by Yvan" data-description=".custom-hands">
    <span class="label"><a href="https://www.printables.com/model/942402-katarm-hexpansion">Helping HexpHANDsion</a> by Yvan</span>
    <span class="printme"><a href="https://www.printables.com/model/942402-katarm-hexpansion"><p>🖨️ PRINT ME</p></a></span>
    <div class="glightbox-desc custom-hands">
      <div class="detailbuttons">
        <span class="printme"><a href="https://www.printables.com/model/942402-katarm-hexpansion"><p>🖨️ PRINT ME</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/colours.gif" loading="lazy" alt="LEDspansion hexpansion by eastabrooka" data-title="LEDspansion by eastabrooka" data-description="">
    <span class="label">LEDspansion by eastabrooka</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/bodgeham-smart-pass.jpg" loading="lazy" alt="Bodgeham Smart Pass hexpansion by Joe Nash" data-title="Bodgeham Smart Pass by Joe Nash" data-description="">
    <span class="label">Bodgeham Smart Pass by Joe Nash, <a href="https://www.bodgeham-on-wye-gov.uk/">(Bodgeham Electronics Consulting Co-Operative (BECCO))</a></span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/batspansion.jpg" loading="lazy" alt="Batspansion hexpansion by Joe Nash" data-title="Batspansion by Joe Nash" data-description="">
    <span class="label">Batspansion by Joe Nash</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/rox-catear.jpg" loading="lazy" alt="EMF badge with two purple cat ear hexpansions with multicoloured LEDs" data-title="Cat ear hexpansion by Rox" data-description=".custom-desc-rox-catear">
    <span class="label"><a href="https://catcatnya.com/@rox/116739377032116481">Cat ear hexpansion</a> by Rox</span>
    <div class="glightbox-desc custom-desc-rox-catear">
      <p>Purple PCB cat ear hexpansions with multicoloured LEDs.</p>
      <p>Link: <a href="https://catcatnya.com/@rox/116739377032116481">rox</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hexpansion-extender.png" loading="lazy" alt="Hexpansion extender PCB render by Matt" data-title="Hexpansion extender by Matt" data-description="">
    <span class="label">Hexpansion extender by Matt</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hextension.png" loading="lazy" alt="Hextension hexpansion hub PCB render by Danny Walker" data-title="Hextension by Danny Walker" data-description="">
    <span class="label">Hextension by Danny Walker</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/donglegon.jpg" loading="lazy" alt="Donglegon hexpansion PCBs — yellow and purple versions" data-title="Donglegon by Kristian" data-description="">
    <span class="label">Donglegon by Kristian</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/planet.gif" loading="lazy" alt="Orrery hexpansion by Danny Walker" data-title="Orrery hexpansion by Danny Walker" data-description="">
    <span class="label">Orrery hexpansion by Danny Walker</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hexpaaaansion.png" loading="lazy" alt="Hexpaaaansion flexible PCB with extended arm and microSD connector" data-title="Hexpaaaansion by kliment" data-description=".custom-desc-hexpaaaansion">
    <span class="label">Hexpaaaansion by kliment</span>
    <div class="glightbox-desc custom-desc-hexpaaaansion">
      <p>Flexible PCB hexpansion with an extended arm, bringing a connector further away from the badge.</p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/badgebot.png" loading="lazy" alt="Badgebot HEX-DRIVE-V2 PCB render by RobotMad" data-title="Badgebot by RobotMad" data-description=".custom-desc-badgebot">
    <span class="label">Badgebot by Team RobotMad</span>
    <span class="buyme"><a href="https://robotmad.odoo.com/shop"><p>💰 BUY HERE</p></a></span>
    <span class="viewme"><a href="https://www.youtube.com/watch?v=nwokSwrpd7Y"><p>🎥 WATCH IT</p></a></span>
    <div class="glightbox-desc custom-desc-badgebot">
      <p>HEX-DRIVE-V2: robot driver hexpansion with 2 motors, 2 servos, TOF distance sensor, and colour sensor.</p>
      <p>Video: <a href="https://www.youtube.com/watch?v=nwokSwrpd7Y">The Making of BadgeBot 2026</a></p>
      <div class="detailbuttons">
        <span class="buyme"><a href="https://robotmad.odoo.com/shop"><p>💰 BUY HERE</p></a></span>
        <span class="viewme"><a href="https://www.youtube.com/watch?v=nwokSwrpd7Y"><p>🎥 WATCH IT</p></a></span>
      </div>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/space-unicorn.png" loading="lazy" alt="Space unicorn hexpansion" data-title="Space Unicorn hexpansion by Brian C" data-description="">
    <span class="label">Space Unicorn hexpansion by Brian C</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/ktbsupremo-hexpansion.jpg" loading="lazy" alt="KiCAD render of a hexpansion PCB featuring 5 LEDs, 2 piezo buzzers and an EEPROM" data-title="LED/Buzzer/EEPROM hexpansion by Ktbsupremo" data-description=".custom-desc-ktbsupremo">
    <span class="label"><a href="https://mastodon.social/@ktbsupremo/116723111354841051">LED/Buzzer/EEPROM hexpansion</a> by Ktbsupremo</span>
    <div class="glightbox-desc custom-desc-ktbsupremo">
      <p>First PCB design featuring 5 LEDs, 2 piezo electric buzzers and an EEPROM. The EEPROM holds code to auto-load when plugged into the Tildagon.</p>
      <p>Link: <a href="https://mastodon.social/@ktbsupremo/116723111354841051">ktbsupremo</a></p>
    </div>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/ExtSpansion.jpg" loading="lazy" alt="ExtSpansion hexpansion" data-title="ExtSpansion" data-description="">
    <span class="label">ExtSpansion by Bob</span>
  </span>
  <span class="img-container collapsible collapsed">
    <img src=" ../../images/hexpansions/hexpansion-grove.jpg" loading="lazy" alt="Grove I/O Hexpansion PCB with three Grove connectors" data-title="Grove I/O Hexpansion by Andrew Lindsay" data-description=".custom-desc-hexpansion-grove">
    <span class="label"><a href="https://github.com/thiseldo/hexpansion_grove/tree/main">Grove I/O Hexpansion</a> by Andrew Lindsay</span>
    <span class="viewme"><a href="https://github.com/thiseldo/hexpansion_grove/tree/main"><p>👀 VIEW FILES</p></a></span>
    <div class="glightbox-desc custom-desc-hexpansion-grove">
      <p>A hexpansion to enable the many Seeed Studio Grove compatible boards to be used with the badge. Example apps included and more to be added.</p>
      <div class="detailbuttons">
        <span class="viewme"><a href="https://github.com/thiseldo/hexpansion_grove/tree/main"><p>👀 VIEW FILES</p></a></span>
      </div>
    </div>
  </span>
  <span class="button-container">
    <button type="button" id="showmore" aria-expanded="false" onclick="window.hexpansionToggleShowMore()">SHOW MORE</button>
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
