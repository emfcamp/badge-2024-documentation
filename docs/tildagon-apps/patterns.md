---
title: Pattern Apps
weight: -3
---

Pattern apps allow you to create custom, asynchronous LED animations that run in the background to drive the RGB LEDs around the badge ring. The pattern choice can be set globally in the settings app or controlled dynamically by individual apps.

## Non-Blocking Architecture

Pattern apps are executed asynchronously by the system module `PatternDisplay`.

The badge runs a background loop calling the pattern's `next()` method. Since `next()` is called synchronously inside the loop, you **must not** perform blocking operations (like synchronous network requests, file I/O, or busy loops) inside it, as this will block the main badge UI and make it unresponsive.

If your pattern needs to be driven by network events (e.g. an MQTT feed or HTTP poll), spawn an asynchronous background task using `asyncio.create_task()` in your constructor (`__init__`). The task can then listen to the network in a non-blocking manner and update a local state. The `next()` method should then immediately return the cached state.

---

## Defining a Pattern

You can define a pattern in one of two ways: by inheriting from the built-in `BasePattern` class, or by writing a custom pattern class from scratch.

### 1. Inheriting from `BasePattern`

The firmware provides a `BasePattern` class under `patterns.base` that automatically manages state and loops through a list of frames.

To use it, inherit from `BasePattern`, override `self.fps` with your desired update speed (in frames per second), and define `self.frames` as a list of frames. Each frame must be a list of 12 RGB tuples containing values from `0` to `255`.

Here is an example that alternates flashing green and off around the ring:

```python
from patterns.base import BasePattern


class AlternateFlashPattern(BasePattern):
    def __init__(self):
        super().__init__()
        self.fps = 2
        self.frames = [
            # Frame 1: Alternate green and off
            [
                (0, 255, 0), (0, 0, 0), (0, 255, 0), (0, 0, 0),
                (0, 255, 0), (0, 0, 0), (0, 255, 0), (0, 0, 0),
                (0, 255, 0), (0, 0, 0), (0, 255, 0), (0, 0, 0)
            ],
            # Frame 2: Opposite alternate
            [
                (0, 0, 0), (0, 255, 0), (0, 0, 0), (0, 255, 0),
                (0, 0, 0), (0, 255, 0), (0, 0, 0), (0, 255, 0),
                (0, 0, 0), (0, 255, 0), (0, 0, 0), (0, 255, 0)
            ]
        ]


# Export both casing variations to satisfy PatternDisplay and the App Store
__pattern_export__ = AlternateFlashPattern
__Pattern_Export__ = AlternateFlashPattern
```

### 2. Creating a Custom Pattern from Scratch

If you need more control over state, or want to calculate frames procedurally on the fly, you do not need to use the base class. Your class simply needs to implement:

*   `self.fps`: An integer property representing update speed.
*   `next(self)`: A synchronous method returning a list of 12 RGB tuples.

Here is a procedural cycle pattern:

```python
class CyclePattern:
    def __init__(self, num_leds=12):
        self.fps = 2
        self.num_leds = num_leds
        self.colors = [
            (255, 0, 0),    # Red
            (0, 255, 0),    # Green
            (0, 0, 255),    # Blue
        ]
        self.index = 0

    def next(self):
        # Return next frame: list of self.num_leds RGB tuples
        color = self.colors[self.index]
        self.index = (self.index + 1) % len(self.colors)
        return [color] * self.num_leds


# Export both casing variations to satisfy PatternDisplay and the App Store
__pattern_export__ = CyclePattern
__Pattern_Export__ = CyclePattern
```

> [!WARNING]
> **Important Casing Discrepancy:**
> Currently, Tildagon OS has a casing mismatch in how patterns are handled. The **App Store** (UI catalog) looks for `__Pattern_Export__` (capital `P` and capital `E`) to discover the app, while the **PatternDisplay** engine looks for `__pattern_export__` (all lowercase) to run it. You **must** export your pattern class under both names (as shown above) to ensure the pattern is both visible and executable.

> [!TIP]
> **Brightness is handled automatically:**
> You do not need to read the user's pattern brightness setting or scale your RGB values. The `PatternDisplay` engine automatically scales all colours returned by `next()` using the global brightness configuration. Always return your colours at their full intended brightness (0-255).

---

## App Integration & Control

Apps can control the LEDs by setting custom pattern classes dynamically or by disabling background patterns entirely to take direct hardware control.

### 1. Activating a Global/Settings Pattern

To change the global pattern configured in the badge settings (the same pattern configured visually in the main Settings app on the badge, which persists across reboots), update the `settings` registry and issue a reload:

```python
import settings
from system.eventbus import eventbus
from system.patterndisplay.events import PatternReload

# Format: settings.set("pattern", (display_name, app_dir_name))
settings.set("pattern", ("Cheerlights", "tildagon-cheerlights-pattern"))
eventbus.emit(PatternReload())
```

### 2. Overriding the Pattern Dynamically

If your app wants to temporarily run a custom pattern in the background without modifying the user's settings, you can emit a `PatternSet` event with the pattern class.

To clean up when your app is minimized or closed (so the badge returns to the user's default pattern), emit a `PatternReload` event.

```python
import app
from system.eventbus import eventbus
from system.patterndisplay.events import (
    PatternSet, PatternReload, PatternEnable
)
from events.input import Buttons, BUTTON_TYPES


class MyDynamicPattern:
    def __init__(self):
        self.fps = 1

    def next(self):
        return [(0, 0, 255)] * 12  # Solid blue


class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        # Apply the pattern dynamically
        eventbus.emit(PatternSet(MyDynamicPattern))
        eventbus.emit(PatternEnable())

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            # Restore the user's configured background pattern before leaving
            eventbus.emit(PatternReload())
            self.minimise()
```

### 3. Disabling Background Patterns (Direct Control)

If your app needs to drive the NeoPixel ring directly (e.g. using `tildagonos.leds`), you must disable the background pattern engine first to prevent conflicts.

*   **Disable**: Emit `PatternDisable()`.
*   **Enable/Restore**: Emit `PatternEnable()`.

```python
import app
import asyncio
from system.eventbus import eventbus
from system.patterndisplay.events import PatternEnable, PatternDisable
from tildagonos import tildagonos
from events.input import Buttons, BUTTON_TYPES


class DirectControlApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        # Stop background patterns so we can write to the LEDs
        eventbus.emit(PatternDisable())
        self._set_solid_color((255, 105, 180))  # Pink

    def _set_solid_color(self, color):
        for i in range(1, 13):
            tildagonos.leds[i] = color
        tildagonos.leds.write()

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            # Turn pattern display back on
            eventbus.emit(PatternEnable())
            self.minimise()
```
