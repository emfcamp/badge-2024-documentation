---
title: Use an API in an app
weight: 5
---

Application Programming Interfaces are a great way to interact with data sources that you don't necessarily own.

Sometimes they can be tricky to deal with due to the data formats, however if they're in JSON format we can use
python requests to retrieve and format the data into something we can work with.

Even better, requests is included in the libraries on the badge, so we can easily use it!

## Examples

### Film schedule example

Here's an example that takes the output from the EMF Film API and lists all the films that are on show over the
weekend:

```python
import app
# Requests is a great library for working with API's, and it's included
# in the badge libraries, so let's use it here!
#
# See https://requests.readthedocs.io/ for more information on how to use
# it properly!
import requests

from app_components import Menu, Notification, clear_background
from events.input import Buttons


class FilmScheduleApp(app.App):
    def __init__(self):
        # When we load, grab all the API data in JSON format
        # Requests will automatically convert this to a python dict
        # for us, it really is that good!
        self.schedule = requests.get("https://emffilms.org/schedule.json").json()
        self.button_states = Buttons(self)
        # Setup lists to hold our film titles and timings
        main_menu_items = []
        self.timings = []
        # Iterate over the films, adding the title to the menu
        for film in self.schedule['films']:
            text = f"{film['title']}"
            time = f"{film['showing']['text']}"
            main_menu_items.append(text)
            self.timings.append(time)
        # Create the menu object
        self.menu = Menu(
            self,
            main_menu_items,
            select_handler=self.select_handler,
            back_handler=self.back_handler,
        )
        self.notification = None

    def select_handler(self, item, position):
        self.notification = Notification('Showing at ' + self.timings[position] + '!')

    def back_handler(self):
        self.button_states.clear()
        self.minimise()

    def update(self, delta):
        self.menu.update(delta)
        if self.notification:
            self.notification.update(delta)


    def draw(self, ctx):
        clear_background(ctx)
        # Display the menu on the device
        # as a scrollable list of film titles
        self.menu.draw(ctx)
        if self.notification:
            self.notification.draw(ctx)

__app_export__ = FilmScheduleApp
```

You can see the full app at [https://github.com/proffalken/tildagon-basic-api-demo](https://github.com/proffalken/tildagon-basic-api-demo),
and it's listed in the app store as "API Demo" so you can install it and have a play!

Good luck, and happy API-ing! 

### Weather example

- [A simple example to fetch and display current weather at EMFCamp location](https://github.com/ntflix/Tildagon-Weather).
=======