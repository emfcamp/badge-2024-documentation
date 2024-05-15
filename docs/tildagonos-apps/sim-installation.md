---
title: Simulate Your App
weight: 3
---

You can simulate your badge apps with the [Tildagon badge simulator](https://github.com/emfcamp/badge-2024-software/tree/main/sim).

## Installation

1. Clone the [badge-2024-software repo](https://github.com/emfcamp/badge-2024-software/tree/main/).
2. Open a terminal and navigate to the [sim](https://github.com/emfcamp/badge-2024-software/tree/main/sim) folder.
3. From there, run `pipenv install` to install all dependencies.

## Simulate your app

The badge simulator simulates all apps in the [`firmware_apps`](https://github.com/emfcamp/badge-2024-software/tree/main/modules/firmware_apps). To test your app, place your app's python file into the `firmware_apps` folder and run:

```
pipenv run python run.py
```

## What next?

<div class="grid cards" markdown>

- [Publish an app](/tildagonos-apps/publish/)

</div>