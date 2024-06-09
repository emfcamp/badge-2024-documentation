---
title: Tildagon End User Manual
weight: 1
---

![A hexagonal camp badge, with three smaller hexagonal PCBs containing breakout
pins peaking out from the edges, and a screen showing
@emfcamp](../images/badge-photos/badge-with-screen.jpg "Tildagon with attached
Hexpansions and screen"){: style="width:300px; height: auto" , align=right }

The Tildagon is a badge that you can wear around your neck. It has a round screen, six buttons, and lots of colourful LEDs. It has a USB-C connector, WiFi, and a battery. It can run MicroPython, and has six hexpansion connectors.

The badge will automatically connect to camp wifi, and you can use the [app store](https://apps.badge.emfcamp.org/) to install apps.

The hexpansions that the badge supports allow you to extend the functionality of the badge with hardware made by [yourself](../hexpansions/creating-hexpansions.md) or other attendees.

<div class="grid cards" markdown>

- [I want to know how to assemble the badge](#assembly)
- [I want to connect to another Wi-Fi network](./connect-to-wifi.md)
- [(Re)flash your badge](#flash-your-badge)
- [Operate your badge](#operate-your-badge)
- [Accessories](./accessory-ideas.md)
- [Common problems](./common-problems.md)

</div>

## Assembly

The following components come with each badge kit:

![Badge component](../images/badge-photos/badge-components.jpg){: style="width:500px;height: auto;margin:auto;display:block;" }

From top to bottom, left to right:

- Tildagon information with link to docs
- battery
- badge front
- badge base
- display
- 3 screws, 2 glue stickers
- display cable
- Tildagon sticker

### 1. Attach the standoffs to the base of the badge

Get the three golden standoffs. Remove the plastic protector stickers on top of the middle screw mounts wherever you see three mounts together:

<p style="text-align: center;">
  <img src="../../images/badge-photos/screws1.jpg" width="100" alt="Screw mounts" style="width:200px;height: auto;" />
  <img src="../../images/badge-photos/screws2.jpg" width="100" alt="Screw mounts without protective stickers" style="width:200px;height: auto;" />
  <img src="../../images/badge-photos/screws3.jpg" width="100" alt="Screw mounts with added separator connector" style="width:200px;height: auto;" />
</p>

![The standoffs attached to the badge](../images/badge-photos/standoffs.jpg){: style="width:300px;height: auto;margin:auto;display:block;" }

### 2. Assemble the front of the badge

Start with the badge front, display cable, and glue bits:

![Components for the front](../images/badge-photos/front-components.jpg){: style="width:400px;height: auto;margin:auto;display:block;" }

Flip the badge front, so you can see the names of the badge team:

![Battery side of the front of the badge](../images/badge-photos/front-battery-side.jpg){: style="width:300px;height: auto;margin:auto;display:block;" }

Attach the display ribbon to connector. Lift the black bit and slide the ribbon cable into the connector. The contacts should be placed towards the board. The blue side of the ribbon should remain visible.

<p style="text-align: center;">
  <img src="../../images/badge-photos/ribbon1.jpg" width="100" alt="Ribbon connector with black bit lifted" style="width:200px;height: auto;" />
  <img src="../../images/badge-photos/ribbon2.jpg" width="100" alt="Ribbon connector with black bit lifted" style="width:200px;height: auto;" />
</p>

Next, attach the glue stickers to the badge front inside the rectangle.

![Glue stickers on the front of the badge](../images/badge-photos/gluedots.jpg){: style="width:300px;height: auto;margin:auto;display:block;" }

Peel the protectors from the glue stickers to attach the battery. Then, get the battery and place it **over** the ribbon cable inside the rectangle ensuring the battery goes completely inside the rectangle.

![Place the battery](../images/badge-photos/battery-over-ribbon.jpg){: style="width:500px;height: auto;margin:auto;display:block;" }

### 3. Attach the display

Attach the other end of the ribbon display cable to the back board. Then gently push the display into the pins on the front of the badge.

!!! note "Display not working?"

    See [Replace your screen](./common-problems.md#replace-your-screen).

### 4. Flash your badge

Follow the directions in [Flash your badge](#flash-your-badge) before you continue assembly.

### 5. Attach the battery to the back of the badge

On the back of the battery, remove the plastic lid from the battery connector:

<p style="text-align: center;">
  <img src="../../images/badge-photos/battery2.jpg" width="100" alt="Battery connector" style="width:200px;height: auto;" />
  <img src="../../images/badge-photos/battery3.jpg" width="100" alt="Battery connector without lid" style="width:200px;height: auto;" />
</p>

Then attach the battery cable to battery connector on the back board.

<p style="text-align: center;">
  <img src="../../images/badge-photos/battery4.jpg" width="100" alt="Battery connector" style="width:200px;height: auto;" />
  <img src="../../images/badge-photos/ribbon.jpg" width="100" alt="Battery connector without lid" style="width:200px;height: auto;" />
</p>

### 6. Screw the badge front to the badge back

Use the 3 screws to screw the badge front to the badge base. The top of the base board is between the two USB-C ports and should be aligned with the top of the front board which is where the **A** button is.

<p style="text-align: center;">
  <img src="../../images/badge-photos/orientation.jpg" width="100" alt="Aligned orientation of the front and back" style="width:auto;height: 200px;" />
  <img src="../../images/badge-photos/connect.jpg" width="100" alt="Connected badge side view" style="width:auto;height: 200px;" />
</p>

![Finished badge](../images/badge-photos/finished.jpg){: style="width:500px;height: auto;margin:auto;display:block;" }

That's it!

## Flash your badge

!!! info "Optional"

    If you received your badge after 1pm Friday 31st May, you do not need to complete this step as badges were pre-flashed!

To flash your badge, your badge must be completely powered off. If your badge is not yet flashed, it is best if the battery is not yet connected because. It may not work with the battery connected.

1. Open the [web flasher](https://emfcamp.github.io/badge-2024-software/) in a Chromium-based browser.

    !!! info "The flasher may not work in other browsers."

1. Hold the middle button, designated **boop** (the designation is on the back of the badge), while you connect the badge **USB in** port to your computer. This will load the bootloader.
1. Keep holding the **boop** button until you click on the **Connect** button on the web flasher and select the Tildagon. You can now let go of the **boop** button.
1. Select the **Install Tildagon** option.

    !!! warning "This will erase all data on the badge"

1. When prompted to confirm the installation, click *Install*. Installation may take a few minutes.

![Provisioning flow](../images/badge-photos/provision.gif)

When you see the **Installation complete** notification, your badge is flashed. To test your badge, press and hold the **reboop** button which will perform a soft reboot. When you are done testing, [power off your badge](#power-off) and disconnect it from your computer.

!!! info "Don't want to use Chromium?"

    You can also manually flash the badge following the instructions in the [`badge-2024-software` Readme](https://github.com/emfcamp/badge-2024-software).

## Operate your badge

### Power on

To power on your badge, press and hold the bottom button designated _bat_ (the designation is on the back of the badge) for 2 seconds.

### Navigate the menu

Use the buttons **A** (`UP`) and **D** (`DOWN`) to move up and down in the menu. To select a menu item, press **C** (`CONFIRM`). To go back to a previous menu or exit an app, press **F** (`CANCEL`).

!!! info "Note that badge apps may use buttons differently."

### Power off

To power off the badge, select the menu item **Power off**.

If your screen is broken, follow the steps in [Turn off badge with broken screen](./common-problems.md#turn-off-badge-with-broken-screen).

## Buttons

### Front of the badge

- **A** (`UP`): In the menu, this button navigates up. In apps the functionality may vary.
- **B** (`RIGHT`): When entering text in a dialogue, this button allows you to add another letter. In apps the functionality may vary.
- **C** (`CONFIRM`): This generally confirm the selection. In a dialogue, this button means yes. In apps the functionality may vary.
- **D** (`DOWN`): In the menu, this button navigates down. In apps the functionality may vary.
- **E** (`LEFT`): When entering text in a dialogue, this button allows you to move left. In apps the functionality may vary.
- **F** (`CANCEL`): This generally cancels the selection. In a dialogue, this button means no. In apps the functionality may vary.

### Back of the board

- **reboop**: Press and hold the **reboop** button to perform a soft (re)boot.
- **boop**: Press and hold the **boop** button while connecting to power to load the bootloader (the badge needs to be powered off before connecting to power).
- **bat**: Press the **bat** button to power on your badge.

### Troubleshooting

For common issues, see [Common problems](../using-the-badge/common-problems.md).
