---
title: Flash the badge
weight: 3
---

Flashing the badge **erases everything on the badge** and installs the Tildagon operating system on it.

You can do this to reset your badge or to update the operating system on the badge.

To flash your badge, your badge **must be completely powered off**. If your badge is not yet flashed, it is best if the battery is not yet connected. Flashing may not work with the battery connected.

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

### Troubleshooting

For common issues, see [Common problems](../using-the-badge/common-problems.md).
