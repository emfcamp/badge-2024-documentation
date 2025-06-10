---
title: Inter-Badge Communication
weight: 3
---

[Here is a demo of using ESPNOW to achieve badge-to-badge communication](https://github.com/ntflix/TildaDrop).

~~As noted in the repo, currently this only works when the sender knows the receiver's MAC address.
Broadcast functionality, which does not require the MAC address of a recipient, does not seem to work as it shows in the [espnow docs](https://docs.micropython.org/en/latest/library/espnow.html#broadcast-and-multicast).~~

> As of Tildagon OS 1.9.0, broadcast functionality works, so you can send messages to all badges in 'receiving' mode without needing to know their MAC addresses. Use the broadcast MAC address `b'\xff\xff\xff\xff\xff\xff'` to send messages to all badges.

MAC address can be found through like so:

```python
import network
import ubinascii

wlan_sta = network.WLAN(network.STA_IF)
wlan_sta.active(True)

wlan_mac = wlan_sta.config("mac")
mac_str = ubinascii.hexlify(wlan_mac).decode()
print(f"MAC address: {mac_str}")
```

[See the ESPNOW MicroPython docs for more information and inspiration](https://docs.micropython.org/en/latest/library/espnow.html).
