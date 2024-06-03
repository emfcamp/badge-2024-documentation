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

The app needs a couple of seconds to start up as Wi-Fi is initialised.

You can see the full app at [https://github.com/proffalken/tildagon-basic-api-demo](https://github.com/proffalken/tildagon-basic-api-demo),
and it's listed in the app store as "API Demo" so you can install it and have a play!

Good luck, and happy API-ing!

### Weather example

This is an example that shows you how to fetch and display current weather at EMFCamp location using the [OpenWeatherAPI](https://openweathermap.org/current).

!!! note "API key required"

    You need to add a tile called `api_key.txt` with an API key in it to your app's folder. You can obtain a free API key from [OpenWeather](https://openweathermap.org/api).

```python
import app

from events.input import Buttons, BUTTON_TYPES
from app_components import Notification
from typing import Any
import requests


def FetchWeather():
    print("Fetching weather data")

    # https://openweathermap.org/current
    api_key = open("./apps/example/api_key.txt", "r").read().strip()
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    units = "metric"
    emf_lat_long = (52.039554, -2.378344)

    final_url = (
        base_url
        + "lat="
        + str(emf_lat_long[0])
        + "&lon="
        + str(emf_lat_long[1])
        + "&appid="
        + api_key
        + "&units="
        + units
    )

    current_data: dict[Any, Any] = {}

    response = requests.get(final_url)
    current_data = response.json()

    if current_data:
        weather = WeatherInfo.from_json(current_data)
        return weather
    else:
        print("Error fetching weather data")
        raise Exception("Error fetching weather data")

class WeatherType:
    id: int
    main: str
    description: str
    icon: str

    @staticmethod
    def from_json(data: dict[str, Any]):
        weather_type = WeatherType()
        weather_type.id = data["id"]
        weather_type.main = data["main"]
        weather_type.description = data["description"]
        weather_type.icon = data["icon"]
        return weather_type


class WeatherInfo:
    temp: float
    feels_like: float
    temp_min: float
    temp_max: float
    pressure: int
    humidity: int
    weather: WeatherType

    @staticmethod
    def from_json(data: dict[str, Any]):
        main = data["main"]
        weather_info = WeatherInfo()
        weather_info.temp = main["temp"]
        weather_info.weather = WeatherType.from_json(data["weather"][0])
        return weather_info

    def human_readable(self):
        return f"{self.weather.main}, {round(self.temp, 1)}°C"

class WeatherApp(app.App):
    text: str
    connected: bool
    notification: Notification

    def __init__(self):
        self.button_states = Buttons(self)
        self.text = ""
        self.connected = False
        self.notification = None
        self.try_connect()

    def update(self, delta):
        if not self.connected:
            self.try_connect()

        if self.button_states.get(BUTTON_TYPES["RIGHT"]):
            self.weather()
            self.button_states.clear()
        elif self.button_states.get(BUTTON_TYPES["CANCEL"]):
            self.minimise()
            self.button_states.clear()

    def draw(self, ctx):
        ctx.rgb(0, 0, 0).rectangle(-120, -120, 240, 240).fill()
        ctx.rgb(0, 1, 0).move_to(-95, 0).text(self.text)

    def try_connect(self):
        self.connected = True
        self.text = "Connecting to\nwifi..."
        try:
            import wifi

            wifi.connect()
            self.text = "Connected to\nwifi. Press right\nto get weather."
        except ImportError as e:
            self.connected = False
            self.text = "Wifi failure"
            raise e

    def weather(self):
        self.text = "Fetching weather"
        try:
            weather = FetchWeather()
            self.text = weather.human_readable()
        except:
            self.text = "API failure.\nTry again."


__app_export__ = WeatherApp
```

The app needs a couple of seconds to start up as Wi-Fi is initialised.

You can see the full app at [https://github.com/ntflix/Tildagon-Weather](https://github.com/ntflix/Tildagon-Weather). The above is a simplified version to display it here.
