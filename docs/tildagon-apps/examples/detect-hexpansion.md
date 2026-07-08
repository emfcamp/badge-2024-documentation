---
title: Detect a hexpansion
weight: 6
---

The following demo app demonstrates how you can detect hexpansion insertions and removals for Hexpansions with an EEPROM, to determine if an insertion is a specific, supported Hexpansion.

```python
import app

from machine import I2C

from app_components import clear_background
from events.input import Buttons, BUTTON_TYPES
from system.eventbus import eventbus
from system.hexpansion.events import \
    HexpansionUnmountedEvent, HexpansionMountedEvent
from system.hexpansion.util import \
    read_hexpansion_header, detect_eeprom_addr, get_slots_by_vid_pid


class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.text = "No hexpansion found."
        self.color = (1, 0, 0)
        self.scan_for_hexpansion()

        eventbus.on(
            HexpansionMountedEvent,
            self.handle_hexpansion_insertion,
            self)
        eventbus.on(
            HexpansionUnmountedEvent,
            self.handle_hexpansion_removal,
            self)

    def handle_hexpansion_insertion(self, event):
        self.scan_for_hexpansion()

    def handle_hexpansion_removal(self, event):
        self.scan_for_hexpansion()

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.minimise()

    def draw(self, ctx):
        ctx.save()
        clear_background(ctx)
        x, y, z = self.color
        ctx.rgb(x, y, z).move_to(-90, -40).text(self.text)
        ctx.restore()

    def scan_for_hexpansion(self):
        ports = get_slots_by_vid_pid(0xCAFE, 0xCAFF)
        if ports:
            self.text = "Found in ports: {}".format(", ".join(ports))
            self.color = (0, 1, 0)
        else:
            self.text = "No hexpansion found."
            self.color = (1, 0, 0)
        return None
```

The code is based on [the Caffeine Jitter app](https://github.com/walkerdanny/caffeine-jitters/blob/main/app.py) which works with the Club Mate hexpansion to make it vibrate.
