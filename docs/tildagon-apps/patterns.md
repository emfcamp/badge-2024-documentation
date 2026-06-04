---
title: Pattern Apps
weight: -3
---

Pattern apps allow you to create asynchronous custom LED animations that run in the background to drive the RGB LEDs around the badge ring. The pattern choice is made in the badge settings app.

## Non-Blocking Architecture

Pattern apps are executed asynchronously, by the system module `PatternDisplay`.

The badge runs a background loop calling the pattern's `next()` method. Since `next()` is synchronous, you **must not** perform blocking calls (like synchronous network requests, file I/O, or busy loops) inside it, as this will block the main badge UI and make it unresponsive.

If your pattern needs to be driven by network events (say, an MQTT feed or HTTP poll), you can spawn an asynchronous background task using `asyncio.create_task()` in your constructor (`__init__`). The task can then listen to the network in a non-blocking manner and update a local state. The `next()` method should then immediately return the cached state.

## A simple Pattern app

This is a default Tildagon Pattern app that cycles through a set of solid colours:

```python
class CyclePattern:
    def __init__(self, num_leds=12):
        self.fps = 2  # The speed at which next() is called
        self.num_leds = num_leds
        self.colors = [
            (255, 0, 0),    # Red
            (0, 255, 0),    # Green
            (0, 0, 255),    # Blue
        ]
        self.index = 0

    def next(self):
        # Update state and return the next frame (list of 12 RGB tuples)
        color = self.colors[self.index]
        self.index = (self.index + 1) % len(self.colors)
        return [color] * self.num_leds

# Export both casing variations to satisfy the Pattern Display manager and App Store
__pattern_export__ = CyclePattern
__Pattern_Export__ = CyclePattern
```

## Structure and Configuration

The differences between a standard app and a Pattern app are:

*   The entry point exports must be named `__pattern_export__` and `__Pattern_Export__`.
*   The class constructor takes the number of LEDs as an optional argument: `def __init__(self, num_leds=12)`.
*   The class must expose an `fps` property (integer frames per second) to govern the speed of the background rendering task.
*   The class must implement a synchronous `next(self)` method that returns a list/tuple of 12 RGB tuples `(r, g, b)` (0-255).
*   The `tildagon.toml` file category must be set to `Pattern` so it is installed into the `/pattern` folder.

## Activating a custom pattern

Any app can activate a custom pattern or built-in pattern by configuring settings and triggering a reload:

```python
import settings
from system.eventbus import eventbus
from system.patterndisplay.events import PatternReload

# Format: (display_name, app_dir_name)
settings.set("pattern", ("Cheerlights", "tildagon-cheerlights-pattern"))
eventbus.emit(PatternReload())
```
