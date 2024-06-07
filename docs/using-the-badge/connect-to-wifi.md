---
title: Connect To Wi-Fi After EMF
weight: 2
---

There are several ways to connect your Tildagon to Wi-Fi depending on what approach you want to take.

# Option 1 - Through the GUI

!!! warning "Early versions of the firmware did not include support for updating the Wi-Fi details through the GUI, you'll need to update the firmware before completing this option."


This is the easiest option, but a real pain to do because you have to type out each letter using the up (A), down (D) and select (B) keys.

1. On the home screen scroll down to settings using the D key, and enter using C key.
2. Scroll through the key to "WIFI SSID" and press enter.
3. Use the up and down keys to select each letter, pressing B to select.
4. Press C to save.
5. Repeat for the "WIFI passsword" option.
6. If not using WPA2 Enterprise, empty the Enterprise username by editing then submitting without picking any characters.
7. Exit the Settings app using F.
8. Push the Reboop button and try connecting.

# Option 2 - Use Tildagon Flasher

Probably the simplest option is to open [Tildagon Flasher](https://emfcamp.github.io/badge-2024-software/) in a Chromium browser.

1. Open [Tildagon Flasher](https://emfcamp.github.io/badge-2024-software/) in a Chromium based web browser.
2. With the device connected via USB-C to your computer press "Connect".
3. Select the Tildagon from the list.
4. Select "Logs & Console".
5. Enter the following commands one at a time, followed by enter, editing the "changeme" sections with your details :

```
import settings
settings.set("wifi_ssid", "changeme")
settings.set("wifi_password", "changeme")
```

If you are connecting to a WPA2-Enterprise network, you also need to run the following command, swapping out `wifi_wpa2ent_username` for your WPA2-Enterprise username:

```
settings.set("wifi_wpa2ent_username", None)
settings.save()
```

6. Push the Reboop button and try connecting.

# Option 3 - Create a clone of the EMF Wi-Fi network

This could be a good option if you manage a Makerspace or other location where multiple EMF badges might visit.

Because this involves configuring your network this guide can't give detailed instructions.

At a high level you need to:

1. Create a new SSID called "emf2024" that uses WPA2 Enterprise.
2. Create a RADIUS username "badge" and password "badge"
3. Push the Reboop button and try connecting.

!!! warning "Any device will be able to connect to your network using this relatively guessable network connection, you could use MAC filtering, but may also want to consider isolating this network from general internet access and communicating with your other devices for security."
