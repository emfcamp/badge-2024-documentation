---
title: Inter-Badge Communication
weight: 3
---

[Here is a demo of using ESPNOW to achieve badge-to-badge communication](https://github.com/ntflix/TildaDrop).

As noted in the repo, currently this only works when the sender knows the receiver's MAC address.
Broadcast functionality, which does not require the MAC address of a recipient, does not seem to work as it shows in the [espnow docs](https://docs.micropython.org/en/latest/library/espnow.html#broadcast-and-multicast).

MAC address can be found through like so:

```python3
import network
import ubinascii

wlan_sta = network.WLAN(network.STA_IF)
wlan_sta.active(True)

wlan_mac = wlan_sta.config("mac")
mac_str = ubinascii.hexlify(wlan_mac).decode()
print(f"MAC address: {mac_str}")
```

[See the ESPNOW micropython docs for more information and inspiration](https://docs.micropython.org/en/latest/library/espnow.html).
If you get broadcast working, please submit a PR on these docs with your solution.
