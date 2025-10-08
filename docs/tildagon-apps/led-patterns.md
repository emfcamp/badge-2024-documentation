---
title: LED Pattern Apps
weight: -3
---

There's a type of app that allows the LED Patterns customised. The LEDs are controlled by the PatternDisplay task. This can control the LEDs based on firmware patterns, a pattern app, or any app by setting a new class containing the interface of the BasePattern class

## Using the BasePattern class

```python
class BasePattern:
    def __init__(self):
        self._current_frame_id = 0
        self.fps = 1
        self.frames = [[(255, 255, 255)] * 12]

    def next(self):
        self._current_frame_id += 1
        if self._current_frame_id == len(self.frames):
            self._current_frame_id = 0
        return self.frames[self._current_frame_id]

    def current(self):
        return self.frames[self._current_frame_id]
```

The inheriting class overwrites the fps with the speed to update the LEDs and overwrites the frames with the frames to be displayed. The next function returns the next frame to be displayed. The frames must be a list or nested list of 12 tuples containing rgb values from 0 -255. For example, the following simply flashes alternate LEDs green:

```python
from patterns.base import BasePattern


class FlashPattern(BasePattern):
    def __init__(self):
        super().__init__()
        self.fps = 1
        self.frames = [
            [
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
            ],
            [
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
                (255, 0, 0),
                (0, 0, 0),
            ],
        ]
        
__Pattern_export__ = FlashPattern
```

The \_\_Pattern_export\_\_ is used to import the pattern when PatternDisplay reloaded by the settings app.

## Without using the BasePattern

To create a pattern the essentials are fps, frames, \_\_Pattern_export\_\_ and the next() function. The next function must return a list of twelve tuples containing the rgb values of 0-255

```python
class FlashPattern():
    def __init__(self):
        self.fps = 1
        self.on = False
        
    def next(self):
        frame = []
        for led in range(12):
            if self.on:
                frame.append((255, 0, 0))
                self.on = False
            else:
                frame.append((0, 0, 0))
                self.on = True
        self.on = not self.on
        return frame
            

__Pattern_export__ = FlashPattern
```

## Setting the pattern from an app

Any app can pass a pattern class, either using the base class or not, using the PatternSet event.

```python
from system.patterndisplay.events import PatternEnable, PatternSet


class FlashPattern():
    def __init__(self):
        self.fps = 1
        self.on = False
        
    def next(self):
        frame = []
        for led in range(12):
            if self.on:
                frame.append((0, 0, 255))
                self.on = False
            else:
                frame.append((0, 0, 0))
                self.on = True
        self.on = not self.on
        return frame


class ExampleApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        eventbus.emit(PatternSet(FlashPattern))
        eventbus.emit(PatternEnable())

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            # The button_states do not update while you are in the background.
            # Calling clear() ensures the next time you open the app, it stays
            # open. Without it the app would close again immediately.
            self.button_states.clear()
            eventbus.emit(PatternEnable())
            self.minimise()


__app_export__ = ExampleApp
```
