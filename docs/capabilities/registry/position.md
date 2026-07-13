---
title: Capability - Position
---

Capability Identifier:

```bash
https://tildagon.badge.emfcamp.org/capabilities/registry/position/
```

Provides the position of the badge to applications.

## Consumers

Find an implementor of the position capability from the currently running apps. This application will have a `position` attribute, which contains either `None`, or the tuple `(latitude, longitude)`.

It also provides some additional metadata, which isn't always available on all position implementations.

| Attribute  | Description                          | Value                                         |
| ---------- | ------------------------------------ | --------------------------------------------- |
| `position` | The current position of the user     | `(lat, lon)` or `None` (if no lock)           |
| `speed`    | Current speed                        | Speed in knots, or `None` if not tracked      |
| `bearing`  | Direction of travel at that speed    | Degrees from true north, or `None`            |

```python

class LocationConsumerApp(App):
    def __init__(self):
        pass

    def update(self, delta):
        position = None
        position_apps = get_running_apps_by_capability(
            "https://tildagon.badge.emfcamp.org/capabilities/registry/"
            "position/"
        )
        for position_app in position_apps:
            if position_app.position:
                position = position_app.position
                break
        if position is None:
            # No lock
            return
        else:
            latitude, longitude = position
            ...
```

## Providers

You must add three attributes (or methods decorated with `@property`) to your app, matching the description at the top of this file.

You may return `None` from any of these, but the attribute must always be present. Return `None` if the value is unknown or not supported.

Do not change the format of the data. If you have speed in metres per second, convert it to knots using the following formula:

```python
def ms_to_knots(speed_ms):
    return speed_ms / 0.514444
```

```python
class LocationProviderApp:
    def __init__(self):
        self.speed = None
        self.bearing = None

    @property
    def position(self):
        try:
            # determine lat,lon here
            return my_positioning_method()
        except Exception:
            return None
```
