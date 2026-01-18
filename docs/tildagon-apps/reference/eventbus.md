# Eventbus overview

The [`Eventbus`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/system/eventbus.py) lets a Tildagon app broadcast an event, and other apps register to receive that event if they are interested. Some examples are: a button press (a ``ButtonDownEvent``) or an app wants to take over the pattern LEDs (a ``PatternDisable`` event). You can also define your own types of event, if you have something interesting to broadcast to other apps.

## Usage

Here are the basic steps for using the Eventbus. Often you won't need to do all of the steps, because some other piece of the software has already done it.

1.  Import the `system.eventbus` and `events` packages:

    ```python
    from system.eventbus import eventbus
    from events import Event
    ```

2.  Import an event definition, or define your own event type.

    To use button events, for example:

    ```python
    from events.input import ButtonDownEvent
    ```

    To define your own event type, subclass ``Event``:

    ```python
    from system.eventbus import Event

    class SpecialEvent(Event):
    def __init__(self):
        pass

        def __str__(self):
            return "special event"
    ```

3.  Define a synchronous or asynchronous method to be called when the event occurs:

    ```python
    def handle_event(self, event):
        # do something
    ```

    ```python
    async def handle_event_async(self, event):
        # do something
    ```

4.  Register your event handler, for example in the `__init__` method of your app with the event and the event handler. Depending on whether the event handler is a synchronous or asynchronous method call `on()` or `on_async()`:

    ```python
    def __init__(self):
        eventbus.on(SpecialEvent, self.handle_event, self.app)
    ```

    ```python
    def __init__(self):
        eventbus.on_async(SpecialEvent, self.handle_event_async, self.app)
    ```

5.  Add code to emit the event, for example in your app's `update()` method. Depending on whether you are emitting in a synchronous or asynchronous method, call `emit()` or `emit_async()`:

    ```python
    def update(self, delta):
        # If something happens
        eventbus.emit(SpecialEvent())
    ```

    ```python
    async def update(self, delta):
        # If something happens
        await eventbus.emit_async(SpecialEvent())
    ```

6.  Remove the event handler when the app is minimised or closed.

    ```python
    eventbus.remove(SpecialEvent, self.handle_event, self.app)
    ```

    !!! warning

        Make sure you remove the event handler when the app is minimised or closed!

You can see a more comprehensive example in [`dialog.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py) or [`pingpong_app.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/pingpong_app.py).

## Methods

You can use the following methods on the `eventbus`:

<!-- prettier-ignore -->
| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `on(event_type, event_handler, app)` | Register an event for an app alongside the synchronous handler to be called when the event fires. | <ul><li><code>event_type</code>: The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`.</li><li><code>event_handler</code>: The synchronous function to be called when the event fires to handle the event.</li><li><code>app</code>: The app this event is being registered for.</li></ul> | None |
| `on_async(event_type, event_handler, app)` | Register an event for an app alongside the asynchronous handler to be called when the event fires. | <ul><li><code>event_type</code>: The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`.</li><li><code>event_handler</code>: The asynchronous function to be called when the event fires to handle the event.</li><li><code>app</code>: The app this event is being registered for.</li></ul> | None |
| `emit(event)` | Emit an event to the eventbus. The handler for the event must be synchronous. | `event` : The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`. | None |
| `emit_async(event)` | Emit an event to the eventbus. The handler for the event must be asynchronous. | `event` : The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`. | None |
| `remove(event_type, event_handler, app)` | Remove the event for an app from the eventbus. | <ul><li><code>event_type</code>: The event to be removed.</li><li><code>event_handler</code>: The event handler previously registered with `on` or `on_async`.</li><li><code>app</code>: The app this event is being removed for.</li></ul> | None |

## Common built-in events

There are a lot of event types built into the firmware. Here are a few that are useful to know about:

* ``ButtonDownEvent`` and ``ButtonUpEvent``

  This is sent by the firmware when one of the buttons is pressed.

  You can register to receive this event if you want to respond to button presses in your application.

  If you want to make the Tildagon think a button has been pressed, you can emit this event. For example, the megadrive controller hexpansion [firmware](https://github.com/MatthewWilkes/md-updater/blob/main/sega.py) emits a button event when a user presses the equivalent buttons on an attached megadrive controller - so controller can be used to nagivate Tildagon apps.

  ```python
  from events.input import Button
  ```

* ``PatternDisable`` and ``PatternEnable``

  When an app wants to take over the front LEDs that usually show a pattern, it can emit a ``PatternDisable`` event. The pattern manager will receive that event and stop updating the LEDs, leaving them free for the app. Then the app can set the LEDs however it wants. When the app is finished with the LEDs (for example, when it is put in the background) it can emit a ``PatternEnable`` event to start the pattern again.

  You probably don't need to listen for this event.

  ```python
  from system.patterndisplay.events import PatternDisable, PatternEnable
  ```

* ``HexpansionInsertionEvent`` and ``HexpansionRemovalEvent``

  The hexpansion manager emits these events when it detects a hexpansion has been inserted or removed.

  You can listen for these events if you want to do something interesting when a hexpansion is inserted or removed.

  These events are only emitted for a PCB hexpansion with circuity on it, because it is the electrical connection that triggers these events. Purely-decorative (cardboard or 3-d printed) hexpansions won't cause these events to be emitted.

  You probably shouldn't emit these events yourself.

  ```python
  from system.hexpansion.events import HexpansionInsertionEvent, HexpansionRemovalEvent
  ```
