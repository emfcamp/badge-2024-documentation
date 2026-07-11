---
title: Capability - Neopixels
---

Capability Identifier:

```bash
https://tildagon.badge.emfcamp.org/capabilities/registry/neopixels/
```

Provides access to a string of Neopixels.

1. The `leds` attribute contains an instance of a neopixel string.
2. The `led_owner` attribute marks which app is exclusively controlling the LEDs. This is because the standard approach for stopping patterns does not apply here, as these LEDs are part of independent hexpansions.

## Consumers

Iterate over the apps to find all the LED strings. Before you drive them, you must change `led_owner`. Once you're finished, and you're happy for another app to take over, change `led_owner` to `None`.

Do not release ownership between frames of a pattern unless you do not intend to reacquire ownership soon, as otherwise two apps could fight over access.


```python

class LEDColourApp(App):
    # Changes all LEDs on hexpansion to the same colour
    
    def __init__(self):
        self.color = (0.4, 0, 0.2)
        self.button_states = Buttons(self)

    def update(self, delta):
        led_apps = get_apps_by_capability("https://tildagon.badge.emfcamp.org/capabilities/registry/neopixels/")
        
        strings = []

        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            for led_app in led_apps:
                if led_app.led_owner is self:
                    led_app.led_owner = None
            self.minimise()
            return

        for led_app in led_apps:
            if led_app.led_owner is None:
                led_app.led_owner = self
            if led_app.led_owner is self:
                strings.append(led_app.leds)
            
        for string in strings:
            string.fill(self.color)
            string.write()

```


## Providers

When you instantiate your neopixels, make sure you store them on as an `leds` attribute. Also, before writing to them, check if the lease is held.

As the hexpansion driver, you may write to the leds when the lease is `None`. This allows you to differentiate between when you don't mind someone taking over the LEDs, and when you are holding them exclusively:

```python
class FiveRedLedsDriverApp:
    def __init__(self, config=None):
        self.led_owner = None
        self.leds = neopixel.NeoPixel(config.pin[3], 5)

    def update(self, delta):
        if self.led_owner in {None, self}:
            self.leds.fill((1.0, 0.0, 0.0))
            self.leds.write()

```
