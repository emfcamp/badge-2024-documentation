---
title: Capability - Haptic Feedback
---

Capability Identifier:

```bash
https://tildagon.badge.emfcamp.org/capabilities/registry/haptic-feedback/
```

The capability to give haptic feedback to your user via a hexpansion. This could be through an Eccentric Rotating Mass (ERM) motor or Linear Resonant Actuator (LRA), or via some other weird mechanical thing!

## Consumers

It is expected that consumers are hexpansions with some form of mechanical actuator attached.

Consumers should subscribe to events of type `haptic` on the event bus:

```python

eventbus.on("haptic", self.haptic_handler, app)

```

From there, your handler will need to parse the event and its parameters to decide what to do with it. This will be specific to your hexpansion hardware design (actuator choice, motor driver etc.) For a list of parameters, see the [Parameters](#parameters) section below

For more info on the event bus, see [the EventBus
docs](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/pingpong_app.py)

## Providers

To give your app some haptic feedback via a compatible hexpansion, just emit a `haptic` type `CustomEvent` on the event bus.

There's no need to scan for consumer hexpansions to do this, but you might want to implement that if your app requires haptic feedback to function at all. For apps where haptic feedback is an enhancement, like when you crash in a game of snake, simply emitting the event would be enough.

```python

from events.custom import CustomEvent

eventbus.emit(CustomEvent(type="haptic", params={}))

```


## Parameters

The following parameters are valid for the `haptic` event type:

Haptic capability consumers may choose to implement a subset of these parameters based on their hardware capabilities, but as a minimum should aim to implement `"effect":"continuous"` and `"duration":XYZ`.

- `"effect"`: The type of haptic effect you want to feel. Valid effects are:
    - `"click"`
    - `"double_click"`
    - `"double_click_long"`
    - `"triple_click"`
    - `"buzz"`
    - `"tick"`
    - `"ramp_up_medium"`
    - `"ramp_up_short"`
    - `"ramp_up_long"`
    - `"ramp_down_short"`
    - `"ramp_down_medium"`
    - `"ramp_down_long"`
    - `"continuous"` (See below)
    - `"hum"` (See below)
- `"duration"`: The amount of time you want the effect to last for, in milliseconds. Required only for `continuous` and `hum` effects. Emitting one of these event types without a `duration` parameter should result in no response. Other effects do nothing with this parameter.
- `"strength"`: The strength of the effect, as a float from 0.0 to 1.0. Consumers should default to 1.0 if no strength is passed, and can ignore this parameter if not implemented.

## List of known Consumers

An incomplete list of hexpansions that are consumers of this capability:

- [Caffeine Jitters](https://github.com/emfcamp/hexpansion-firmwares/tree/main/0x70ad/0xcaff)