---
title: Publish your app
weight: 4
---

To publish your Tildagon App, you need to create a GitHub repository with:

- an `app.py` file containing the app and defining the `__app_export__` variable
- a [`tildagon.toml` file](https://github.com/npentrel/tildagon-demo/blob/main/tildagon.toml) file containing metadata about the app
- a [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
- the `tildagon-app` [topic applied to the repo](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics#adding-topics-to-your-repository)

## Instructions

1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this [GitHub repository](https://github.com/hughrawlinson/tildagon-demo/).
2. Edit the app properties in the [`tildagon.toml` file](https://github.com/npentrel/tildagon-demo/blob/main/tildagon.toml) with your name, the category of the app, and other metadata:

   ```toml
   [app]
   # The name of your app as displayed in the menu
   name = "Your Hexceptional App"

   # The submenu where your app should appear.
   # One of: "Badge", "Music", "Media", "Apps", "Games"
   category = "Badge"

   # OPTIONAL: Same as above, for compatibility with older firmware
   # versions that can't handle categories introduced afterwards.
   # One of: "Badge", "Music", "Apps"
   # menu = "Badge"

   # OPTIONAL: If your app prefers wifi to be off or on when entering.
   # Useful if you want more resources (false) or need wifi (true).
   # Remove if you don't want to change wifi state!
   # wifi_preference = false

   [entry]
   # The name of your entry point `Application` class
   # class = "NickApp"

   [metadata]
   # Your nickname.  Must be at most 32 characters!
   author = "your-name"

   # License of your app as an SPDX identifier: <https://spdx.org/licenses/>
   license = "LGPL-3.0-only"

   # URL to the repository of your app.
   url = "https://www.github.com/username/repo"

   # Description of your app.  Maximum 140 characters!
   description = "A hexceptional tildagon app for hexceptional people."

   # Version number of your app.  If you push a commit where this number is
   # increased, we interpret this as a new version being released.
   #
   # Version number must be an integer!
   version = "0.0.1"
   ```

3. Edit the `app.py` to set the `__app_export__` variable and to add your app contents.

   This is a simple hello world app:

   ```python
   import asyncio
   import app

   from events.input import Buttons, BUTTON_TYPES

   class ExampleApp(app.App):
       def __init__(self):
           self.button_states = Buttons(self)

   def update(self, delta):
       if self.button_states.get(BUTTON_TYPES["CANCEL"]):
           # The button_states do not update while you are in the background.
           # Calling clear() ensures the next time you open the app, it stays open.
           # Without it the app would close again immediately.
           self.button_states.clear()
           self.minimise()

   def draw(self, ctx):
       ctx.save()
       ctx.rgb(0.2,0,0).rectangle(-120,-120,240,240).fill()
       ctx.rgb(1,0,0).move_to(-80,0).text("Hello world")
       ctx.restore()

   __app_export__ = ExampleApp
   ```

4. Add the `tildagon-app` [topic to the repo](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics#adding-topics-to-your-repository).

5. Create a [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) using GitHub. If you are unsure what settings to use, choose

   - `v0.0.1` for your tag
   - `v0.0.1` for your release title

Your app will become available in the Tildagon [app store](https://apps.badge.emfcamp.org/) within 15 minutes.

!!! note "Updating the version"

      If you make changes to your app, you will need to update the version number in the `tildagon.toml` file create a new release on GitHub with an incremented version number.

## Troubleshooting

### My app isn't showing up

If your app doesn't show up within 15 minutes, check the [Errors page](https://apps.badge.emfcamp.org/errors/) page. If there's no error there, that means either:

- the app store can't see your app, for example because your repository is private or that you may need to [add the `tildagon-app` topic to your repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics#adding-topics-to-your-repository), or
- your app is listed and available to the badge - and may have an error there. In this case, check [debug your app on your badge](./run-on-badge.md).

## Support

You can currently only publish Tildagon Apps through GitHub. Contributions to support other ways of publishing are welcome at [emfcamp/badge-2024-app-store](https://github.com/emfcamp/badge-2024-app-store)!

## What next?

<div class="grid cards" markdown>

- [End user manual](../using-the-badge/end-user-manual.md)

</div>

[simulator]: https://github.com/emfcamp/badge-2024-software/tree/main/sim
