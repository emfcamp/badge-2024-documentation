# Eventbus

You can register your events and event handlers with the [`Eventbus`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/system/eventbus.py) package:

## Usage

You can use your own events directly with an event handler that you register on the [`eventbus`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/system/eventbus.py).

1. Import the `system.eventbus` package:

    ```python
    from system.eventbus import eventbus
    ```

2. Define an event:

    ```python
    class SpecialEvent:
    def __init__(self):
        pass

    def __str__(self):
        return "special event"
    ```

3. Define a synchronous or asynchronous method to be called when the event occurs:

    ```python
    def handle_event(self, event):
        # do something
    ```

    ```python
    async def handle_event_async(self, event):
        # do something
    ```

4. Register your event handler, for example in the `__init__` method of your app with the event and the event handler. Depending on whether the event handler is a synchronous or asynchronous method call `on()` or `on_async()`:

    ```python
    def __init__(self):
        eventbus.on(SpecialEvent, self.handle_event, self.app)
    ```

    ```python
    def __init__(self):
        eventbus.on_async(SpecialEvent, self.handle_event_async, self.app)
    ```

5. Add code to emit the event, for example in your app's `update()` method. Depending on whether the event handler is a synchronous or asynchronous method call `emit()` or `emit_async()`:

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

6. Remove the event handler when the app is minimised or closed.

    ```python
    eventbus.remove(SpecialEvent, self.handle_event, self.app)
    ```

    !!! warning

        Make sure you remove the event handler when the app is minimised or closed!

You can see a more comprehensive example in [`dialog.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/app_components/dialog.py) or [`pingpong_app.py`](https://github.com/emfcamp/badge-2024-software/blob/main/modules/firmware_apps/pingpong_app.py).

## Methods

You can use the following methods on the `eventbus`:

| Method | Description | Arguments | Returns |
| ------ | ----------- | --------- | ------- |
| `on(event_type, event_handler, app)` | Register an event for an app alongside the synchronous handler to be called when the event fires. | <ul><li><code>event_type</code>: The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`.</li><li><code>event_handler</code>: The synchronous function to be called when the event fires to handle the event.</li><li><code>app</code>: The app this event is being registered for.</li></ul> | None |
| `on_async(event_type, event_handler, app)` | Register an event for an app alongside the asynchronous handler to be called when the event fires. | <ul><li><code>event_type</code>: The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`.</li><li><code>event_handler</code>: The asynchronous function to be called when the event fires to handle the event.</li><li><code>app</code>: The app this event is being registered for.</li></ul> | None |
| `emit(event)` | Emit an event to the eventbus. The handler for the event must be synchronous. | `event` : The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`. | None |
| `emit_async(event)` | Emit an event to the eventbus. The handler for the event must be asynchronous. | `event` : The event, for example `ButtonDownEvent`. An `event` object must have the methods `__init__()` and `__str__()`. | None |
| `remove(event_type, event_handler, app)` | Remove the event for an app from the eventbus. | <ul><li><code>event_type</code>: The event to be removed.</li><li><code>event_handler</code>: The asynchronous function to be called when the event fires to handle the event.</li><li><code>app</code>: The app this event is being removed for.</li></ul> | None |
