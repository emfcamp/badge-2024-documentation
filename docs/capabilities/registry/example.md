---
title: Capability - Mysterious Pings
---

Capability Identifier:

```bash
https://tildagon.badge.emfcamp.org/capabilities/registry/example/
```

Consume mysterious stochastic pings of unknown origin. Who knows where they're coming from! What should you do with them? That's up to you.

## Consumers

Subscribe to the event named "mysterious_ping" on the event bus. It contains no data.

```python

class MysteriousPingConsumerApp:
    def __init__(self):
        eventbus.on("mysterious_ping", mysterious_ping_handler, app)

    def mysterious_ping_handler():
        blink_leds_rapidly()
```

For more info on the event bus, see [the EventBus
docs](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/pingpong_app.py)

## Providers

When you feel mysterious, emit an event of type `mysterious_ping` on the event
bus.

```python

from events.custom import CustomEvent


class MysteriousPingProviderApp:
    def __init__(self):
        pass

    def mysteriously():
        eventbus.emit(CustomEvent(type="mysterious_ping", data={}))
```
