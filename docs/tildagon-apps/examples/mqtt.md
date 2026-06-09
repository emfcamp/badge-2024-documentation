---
title: Use MQTT in an app
weight: 7
---

MQTT is a lightweight publish/subscribe protocol that works well for badge apps talking to brokers on your network or the internet. The badge firmware includes MicroPython's [`umqtt.simple`](https://docs.micropython.org/en/latest/library/umqtt.simple.html) library.

## Connect to Wi-Fi first

MQTT needs a working network connection, like HTTP requests do. Call `wifi.connect()` and wait for the connection before opening a socket to your broker:

```python
import wifi

wifi.connect()
if not wifi.wait():
    raise Exception("Could not connect to Wi-Fi")
```

If your badge is not on a network you have configured, see [connect to Wi-Fi](../../using-the-badge/connect-to-wifi.md).

See [Use an API in an app](./api.md) for another example of connecting before doing network I/O.

## Minimal example

```python
from umqtt.simple import MQTTClient
import wifi

wifi.connect()
wifi.wait()

client = MQTTClient("tildagon-demo", "test.mosquitto.org")
client.connect()
client.publish(b"emfcamp/tildagon", b"hello from a badge")
client.disconnect()
```

In a Tildagon app, call `client.check_msg()` from `update()` or `background_update()` if you subscribe to topics and need to process incoming messages.

## Troubleshooting

!!! tip "`OSError: -202` when connecting or publishing"

    If you see `OSError: -202` while using MQTT (or other network code such as `requests` or `socket`), the badge is probably not connected to Wi-Fi yet and you are trying to do something that needs the network — for example resolving your broker hostname or opening a socket.

    Call `wifi.connect()` and use `wifi.wait()` (or check `wifi.status()`) before `client.connect()` or similar calls. Wi-Fi connection is asynchronous; calling your network code too early is a common cause of this error.

    If you are definitely connected and still see `-202`, it can also indicate a DNS problem resolving the hostname — try your broker's IP address instead to narrow it down.
