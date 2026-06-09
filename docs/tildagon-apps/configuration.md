---
title: Configuration management in an app
weight: 0
---

Apps can persist user preferences and other data across restarts using the [`settings`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/settings.py) module.
Settings are stored as JSON in `/settings.json` on the badge.
The settings file store all badge settings, including Wi-Fi credentials and your display name.

## The `settings` module

The module provides four functions:

| Function | Description |
| -------- | ----------- |
| `settings.get(key, default=None)` | Return the value for `key`, or `default` if it is not set. Loads the file on first use. |
| `settings.set(key, value)` | Set `key` to `value`. Pass `None` to remove the key. |
| `settings.save()` | Write changes to `/settings.json`. Only writes if something has changed since the last load or save. |
| `settings.load()` | Reload settings from disk. You rarely need to call this directly. |

Because the file is JSON, values can be strings, numbers, booleans, lists, dictionaries, or `null` (`None` in Python).

## Storing app configuration

Store your app's configuration under a single key whose value is a JSON object.
**Use a unique key** for each app, such as `"snake_OG"` or `"naomis_cool_app"`, so you do not overwrite badge or other app settings.
This keeps your settings together and avoids clashes with badge-level keys such as `name`, `wifi_ssid`, or `pattern`.

```python
import settings

CONFIG_KEY = "example_app"  # set to a unique key

DEFAULT_CONFIG = {
    "player_name": "Player",
    "difficulty": "normal",
    "high_score": 0,
}


def load_config():
    config = settings.get(CONFIG_KEY)
    if config is None:
        return DEFAULT_CONFIG.copy()
    merged = DEFAULT_CONFIG.copy()
    merged.update(config)
    return merged


def save_config(config):
    settings.set(CONFIG_KEY, config)
    settings.save()
```

`load_config()` returns the current config file.
If later versions of your app change the config it will also merge the config to add any new fields from the `DEFAULT_CONFIG`.

`save_config()` writes the whole object back to disk.
You must call `settings.save()` after you change values.
Updates are not written to disk until you save.

!!! tip "View or edit settings.json"

    You can copy `settings.json` onto your computer by using `mpremote cp :settings.json settings.json`. You can also view or edit the file directly with `mpremote edit settings.json`. Make sure the JSON remains valid!

## Example app

This app loads its configuration when it starts.
Press **C** to increase the score; when it beats the saved high score, the new value is written to `/settings.json`:

```python
import app
import settings

from events.input import Buttons, BUTTON_TYPES

CONFIG_KEY = "score_demo"

DEFAULT_CONFIG = {
    "high_score": 0,
}


def load_config():
    config = settings.get(CONFIG_KEY)
    if config is None:
        return DEFAULT_CONFIG.copy()
    merged = DEFAULT_CONFIG.copy()
    merged.update(config)
    return merged


def save_config(config):
    settings.set(CONFIG_KEY, config)
    settings.save()


class ScoreDemoApp(app.App):
    def __init__(self):
        self.button_states = Buttons(self)
        self.config = load_config()
        self.score = 0

    def update(self, delta):
        if self.button_states.get(BUTTON_TYPES["CONFIRM"]):
            self.score += 1
            if self.score > self.config["high_score"]:
                self.config["high_score"] = self.score
                save_config(self.config)

        if self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.button_states.clear()
            self.minimise()

    def draw(self, ctx):
        ctx.save()
        ctx.rgb(0.2, 0, 0).rectangle(-120, -120, 240, 240).fill()
        ctx.rgb(1, 1, 1).move_to(-80, -20).text(f"Score: {self.score}")
        ctx.move_to(-80, 20).text(
            f"High: {self.config['high_score']}"
        )
        ctx.restore()


__app_export__ = ScoreDemoApp
```

## Building a settings screen

For a full in-app settings UI, use a [`Layout`](./reference/ui-elements.md#layouts) with `DefinitionDisplay` and [`TextDialog`](./reference/ui-elements.md#text-dialog) entries. Keep a dictionary in memory while the user edits values, then call `save_config()` when they confirm changes.

The [layout menu demo](./reference/ui-elements.md#layouts) in the UI elements reference shows this pattern with an in-memory `app_settings` dict. Replace that dict with `load_config()` on startup and `save_config()` when the user finishes editing.
