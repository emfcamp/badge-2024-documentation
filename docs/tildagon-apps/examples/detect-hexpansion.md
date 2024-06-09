---
title: Detect a hexpansion
weight: 6
---

The following demo app demonstrates how you can detect hexpansion insertions and removals:

```python
import app

from machine import I2C

from app_components import clear_background
from events.input import Buttons, BUTTON_TYPES
from system.eventbus import eventbus
from system.hexpansion.events import HexpansionRemovalEvent, HexpansionInsertionEvent
from system.hexpansion.util import read_hexpansion_header, detect_eeprom_addr

class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.text = "No hexpansion found."
        self.color = (1,0,0)
        self.scan_for_hexpansion()

        eventbus.on(HexpansionInsertionEvent, self.handle_hexpansion_insertion, self)
        eventbus.on(HexpansionRemovalEvent, self.handle_hexpansion_removal, self)

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
        x,y,z = self.color
        ctx.rgb(x,y,z).move_to(-90,-40).text(self.text)
        ctx.restore()

    def scan_for_hexpansion(self):
        found = False
        for port in range(1, 7):
            print(f"Searching for hexpansion on port: {port}")
            i2c = I2C(port)
            addr = detect_eeprom_addr(i2c)

            if addr is None:
                continue
            else:
                print("Found EEPROM at addr " + hex(addr))

            header = read_hexpansion_header(i2c, addr)
            if header is None:
                continue
            else:
                print("Read header: " + str(header))
            self.text = "Hexp. found.\nvid: {}\npid: {}\nat port: {}".format(hex(header.vid), hex(header.pid), port)
            found = True

            # Swap 0xCAFE with your EEPROM header vid
            # Swap 0xCAFF with your EEPROM header pid
            if (header.vid is 0xCAFE) and (header.pid is 0xCAFF):
                print("Found the desired hexpansion in port " + str(port))
                self.color = (0,1,0)
            else:
                print()
        if not found:
            self.color = (1,0,0)
            self.text = "No hexpansion found."


        return None
```

The code is based on [the Caffeine Jitter app](https://github.com/walkerdanny/caffeine-jitters/blob/main/app.py) which works with the Club Mate hexpansion to make it vibrate.
