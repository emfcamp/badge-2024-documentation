---
title: Background Apps
weight: -3
---

There's a type of app that allows the Background of firmware apps to be customised. These follow the standard app with a few exceptions. A background is selected in the settings app.

## A simple Background app

This is a default Tildagon Background app. The app imports the [Hexagon class](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/intro_app.py), creates 6 hexagons, then wiggles them:

```python
from firmware_apps.intro_app import Hexagon
from app_components import clear_background


class WigglingHexagons:
    def __init__(self):
        self.wiggling_hexagons = [Hexagon() for _ in range(6)]
        self.time_elapsed = 0

    def update(self, delta):
        self.time_elapsed += delta / 1_000
        for hexagon in self.wiggling_hexagons:
            hexagon.update(self.time_elapsed)

    def draw(self, ctx):
        clear_background(ctx)
        for hexagon in self.wiggling_hexagons:
            hexagon.draw(ctx)


__Background__ = WigglingHexagons
```

Only the update and draw functions are called to display the background before the firmware app displays on top. The background should be fairly simple so as to not slow down the badge.

The differences with a standard app are that nothing is passed in to the constructor and the export is named \_\_Background\_\_. The toml file category also needs to be set to Background in order for the app store to detect it is a Background and for it to be installed into the backgrounds folder.

Any app can use the background by importing the background object:

```python
from app_components.background import Background as bg
```

then call the update and draw functions from the same functions in your app:

```python
def draw(self, ctx):
    bg.draw(ctx)
    # add you code


def update(self, delta):
    bg.update(delta)
    # add you code
```
