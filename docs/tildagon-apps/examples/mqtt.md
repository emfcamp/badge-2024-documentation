---
title: Use MQTT in an app
weight: 7
---

MQTT is a lightweight publish/subscribe protocol that works well for badge apps talking to brokers on your network or the internet. The badge firmware includes MicroPython's [`umqtt.simple`](https://docs.micropython.org/en/latest/library/umqtt.simple.html) library.

## EMF Camp MQTT broker

At EMF Camp there is an on-site MQTT broker at `mqtt.emf.camp` (port `1883`, no authentication). Full connection details, topic rules, and wildcard tips are on the [MQTT broker](https://developer.emfcamp.org/mqtt/) page.

You can publish and subscribe on any topic name **except** those starting with `emf/`, which are reserved for event infrastructure. You can still **subscribe** to `emf/` topics to read live camp data. Known namespaces include:

- `emf/bar/` — live stats from the bars
- `emf/films/` — EMF Films data
- `emf/weather/` — live weather from HQ

For your own badge apps or village projects, pick a topic outside `emf/` — for example `emfcamp/tildagonapp` or `myvillage/badge/status`. Use a hierarchical name so others can subscribe with wildcards (see the [developer docs](https://developer.emfcamp.org/mqtt/) for `+` and `#`).

The examples below use the public test broker `test.mosquitto.org` so you can try them at home. At the event, swap the hostname for `mqtt.emf.camp` and use a topic that is not under `emf/`.

## Connect to WiFi first

MQTT needs a working network connection, like HTTP requests do.
Check whether the badge is already connected to WiFi and if not try to connect and wait for the connection before opening a socket to your broker:

```python
import wifi


def _connect_wifi():
    try:
        if wifi.status():
            return True

        wifi.disconnect()
        wifi.connect()
        if wifi.wait():
            return True

        return False
    except OSError as e:
        return False
```

If your badge is not connected to WiFi yet, see [connect to Wi-Fi](../../using-the-badge/connect-to-wifi.md).

## Connect to MQTTT

```python
from umqtt.simple import MQTTClient


def _connect_mqtt():
    try:
        client = MQTTClient("tildagon-demo", "test.mosquitto.org")
        client.connect()
        return True
    except OSError as e:
        client = None
        return False
```

## Subscribe to a channel

The following code connects to a channel and listens for messages:

```python
import app
from umqtt.simple import MQTTClient
import wifi

from app_components.tokens import line_height
from events.input import Buttons, BUTTON_TYPES

TOPIC = b"emfcamp/tildagonapp"


class MqttListenerApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.message = "Starting..."
        self.client = None

    def _connect_wifi(self):
        try:
            if wifi.status():
                self.message = "WiFi OK"
                return True

            wifi.disconnect()
            wifi.connect()
            if wifi.wait():
                self.message = "WiFi OK"
                return True

            self.message = "WiFi failed"
            return False
        except OSError as e:
            self.message = f"WiFi error: {e}"
            return False

    def _connect_mqtt(self):
        try:
            self.client = MQTTClient("tildagon-demo", "test.mosquitto.org")
            self.client.set_callback(self.on_message)
            self.client.connect()
            self.client.subscribe(TOPIC)
            self.message = "Waiting for messages..."
            return True
        except OSError as e:
            self.message = f"MQTT error: {e}"
            self.client = None
            return False

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            self.minimise()
            return

        if self.message == "Starting...":
            if self._connect_wifi():
                self._connect_mqtt()

    def on_message(self, topic, msg):
        self.message = msg.decode()
        print("Message received:", self.message)

    def _reduce_text_until_fits(self, ctx, text, width_limit):
        extra_text = ""
        text_that_fits = text
        while ctx.text_width(text_that_fits) > width_limit and text_that_fits:
            character = text_that_fits[-1]
            text_that_fits = text_that_fits[:-1]
            extra_text = character + extra_text
        return text_that_fits, extra_text

    def _wrap_text(self, ctx, text, width_limit):
        lines = []
        remaining = text
        while remaining:
            line, remaining = self._reduce_text_until_fits(
                ctx, remaining, width_limit
            )
            if not line:
                line = remaining[:1]
                remaining = remaining[1:]
            lines.append(line)
        return lines

    def background_update(self, delta):
        if self.client:
            try:
                self.client.check_msg()
            except OSError:
                self.message = "MQTT disconnected"
                self.client = None

    def draw(self, ctx):
        ctx.save()
        ctx.rgb(0.2, 0, 0).rectangle(-120, -120, 240, 240).fill()
        ctx.rgb(1, 1, 1)

        text = f"Message: {self.message}"
        width_limit = 200  # 240px screen minus margins
        lines = self._wrap_text(ctx, text, width_limit)

        spacing = line_height * 16  # scale to your font size
        start_y = -((len(lines) - 1) * spacing) / 2

        for i, line in enumerate(lines):
            y = start_y + i * spacing
            line_width = ctx.text_width(line)
            ctx.move_to(-line_width / 2, y).text(line)

        ctx.restore()


__app_export__ = MqttListenerApp
```

In a Tildagon app, call `client.check_msg()` from `update()` or `background_update()`to check for new messages on subscribed topics. For a full example, see [Example app](#example-app).

To receive a message from a computer, install [Mosquitto](https://mosquitto.org/download/) and use `mosquitto_sub`:

```bash
mosquitto_sub -h test.mosquitto.org -t emfcamp/tildagonapp
```

## Send messages to a channel

The following code connects to a channel and sends a message `"hello from a badge"`:

```python
import app
from umqtt.simple import MQTTClient
import wifi

from app_components.tokens import line_height
from events.input import Buttons, BUTTON_TYPES

TOPIC = b"emfcamp/tildagonapp"


class MqttPublisherApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.message = "Starting..."
        self.client = None

    def _connect_wifi(self):
        try:
            if wifi.status():
                self.message = "WiFi OK"
                return True

            wifi.disconnect()
            wifi.connect()
            if wifi.wait():
                self.message = "WiFi OK"
                return True

            self.message = "WiFi failed"
            return False
        except OSError as e:
            self.message = f"WiFi error: {e}"
            return False

    def _connect_mqtt(self):
        try:
            self.client = MQTTClient("tildagon-demo", "test.mosquitto.org")
            self.client.set_callback(self.on_message)
            self.client.connect()
            self.client.publish(b"emfcamp/tildagonapp", b"hello from a badge")
            self.message = "Message sent"
            self.client.disconnect()
            return True
        except OSError as e:
            self.message = f"MQTT error: {e}"
            self.client = None
            return False

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            self.minimise()
            return

        if self.message == "Starting...":
            if self._connect_wifi():
                self._connect_mqtt()

    def on_message(self, topic, msg):
        self.message = msg.decode()
        print("Message received:", self.message)

    def _reduce_text_until_fits(self, ctx, text, width_limit):
        extra_text = ""
        text_that_fits = text
        while ctx.text_width(text_that_fits) > width_limit and text_that_fits:
            character = text_that_fits[-1]
            text_that_fits = text_that_fits[:-1]
            extra_text = character + extra_text
        return text_that_fits, extra_text

    def _wrap_text(self, ctx, text, width_limit):
        lines = []
        remaining = text
        while remaining:
            line, remaining = self._reduce_text_until_fits(
                ctx, remaining, width_limit
            )
            if not line:
                line = remaining[:1]
                remaining = remaining[1:]
            lines.append(line)
        return lines

    def draw(self, ctx):
        ctx.save()
        ctx.rgb(0.2, 0, 0).rectangle(-120, -120, 240, 240).fill()
        ctx.rgb(1, 1, 1)

        text = f"Message: {self.message}"
        width_limit = 200  # 240px screen minus margins
        lines = self._wrap_text(ctx, text, width_limit)

        spacing = line_height * 16  # scale to your font size
        start_y = -((len(lines) - 1) * spacing) / 2

        for i, line in enumerate(lines):
            y = start_y + i * spacing
            line_width = ctx.text_width(line)
            ctx.move_to(-line_width / 2, y).text(line)

        ctx.restore()


__app_export__ = MqttPublisherApp
```

To send a message from a computer, install [Mosquitto](https://mosquitto.org/download/) and use `mosquitto_pub`:

```bash
mosquitto_pub -h test.mosquitto.org -t emfcamp/tildagonapp -m "hello from my laptop"
```

## Troubleshooting

!!! tip "`OSError: -202` when connecting or publishing"

    If you see `OSError: -202` while using MQTT (or other network code such as `requests` or `socket`), the badge is probably not connected to Wi-Fi yet and you are trying to do something that needs the network — for example resolving your broker hostname or opening a socket.

    Call `wifi.connect()` and use `wifi.wait()` (or check `wifi.status()`) before `client.connect()` or similar calls. Wi-Fi connection is asynchronous; calling your network code too early is a common cause of this error.

    If you are definitely connected and still see `-202`, it can also indicate a DNS problem resolving the hostname — try your broker's IP address instead to narrow it down.
