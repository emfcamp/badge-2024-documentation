---
title: Capability - Merged Neopixels
---

Capability Identifier:

```bash
https://tildagon.badge.emfcamp.org/capabilities/registry/merged_neopixels/
```

Provides access to a string of neopixels that have a different logical behaviour to their physical arrangement. The neopixel library has some helper methods for dealing with large numbers of neopixels, to allow treating them as a smaller logical string, or re-ordering them.

This can be useful when the routing of the neopixels doesn't make intuitive sense, or when some should always be combined.

This capability is a superset of the [neopixels capability](./neopixels.md). You should always also declare that one if declaring this one. Users of this capability should also read and understand the underlying [neopixels capability](./neopixels.md).

1. The `leds` attribute behaves as before, but now refers to the logical LED string, not the underlying one
2. The `led_owner` attribute behaves as before.
3. There is an `inner_leds` attribute that represents the underlying neopixel string.
4. There is a `setup_led_group(led_group_name)` method, which indicates to the driver which logical ordering is desired.
5. There is a `LED_GROUPS` attribute, which defines the available orderings

## Consumers

Iterate over the apps to find all the LED strings. Once you've found them, set up the LEDs and drive them as desired.


```python

class LEDColourApp(App):
    
    def __init__(self):
        self.color = (0.4, 0, 0.2)
        self.button_states = Buttons(self)
        self.pattern = None

    def update(self, delta):
        led_apps = get_apps_by_capability("https://tildagon.badge.emfcamp.org/capabilities/registry/merged_neopixels/")
        
        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            for led_app in led_apps:
                if led_app.led_owner is self:
                    led_app.led_owner = None
            self.minimise()
            return

        if led_apps:
            led_app = led_apps[0]

            if led_app.led_owner is None:
                led_app.led_owner = self
                arrangements = list(led_app.LED_GROUPS.keys())
                led_app.setup_led_group(random.choice(arrangements))
                
                self.pattern = RainbowPattern(len(led_app.leds))
            
            if led_app.led_owner is self:
                frame = self.pattern.next()
                for i in range(len(led_app.leds)):
                    led_app.leds[i] = frame[i]
                led_app.leds.write()
```


## Providers

When you instantiate your neopixels, make sure you store them on as an `inner_leds` attribute for the raw string. Set up your combined ones on the `leds` attribute. Make sure you implement the relevant physical to logical mapping.

Note: You may use other neopixel like objects as `self.leds`, if desired. Although this example uses `MergedNeopixel`, any wrapper that looks like a neopixel string is acceptable.


```python
class LedsDriverApp:

    LED_GROUPS = {
        "outer": [
            (0, 4),
            (1, 3),
            (2, ),
        ],
        "line": [
            (0, ),
            (1, ),
            (2, ),
            (3, ),
            (4, ),
        ],
        "staggered": [
            (0, ),
            (3, ),
            (1, ),
            (4, ),
            (2, ),
        ]
    }

    def __init__(self, config=None):
        self.led_owner = None
        self.inner_leds = neopixel.NeoPixel(config.pin[3],  5)
        self.setup_led_group('outer')

    def setup_led_group(self, led_group_name):
        self.leds = neopixel.MergedNeoPixel(self.inner_leds, self.LED_GROUPS[led_group_name])

    def update(self, delta):
        if self.led_owner in {None, self}:
            self.leds.fill((1.0, 0.0, 0.0))
            self.leds.write()

```
