---
title: Publish Your App
weight: -2
---

!!! danger

      This guide is subject to change. If you start developing now, check back later to see if anything has changed.

To publish your Tildagon App, you need to create a GitHub repository with:

- a `main.py` file containing the app
- a `tildagon.toml` file containing metadata about the app
- a [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
- the `tildagon-app` [label applied to the repo](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-a-label)

## Get started

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

3. Edit the `main.py`. This is a simple hello world app:

      ```python
      from app import app

      class HelloWorld(App):
      def __init__():
      pass

      def update():
      pass:

      def draw():
      ctx.move_to(0, 0).text("Hello, world!"]
      ```

4. Add the `tildagon-app` [label applied to the repo](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-a-label).

5. Create a [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) using GitHub. If you are unsure what settings to use, choose
      -  `v0.0.1` for your tag
      -  `v0.0.1` for your release title

Your app will now become available in the Tildagon App store.

!!! note "Updating the version"

      If you make changes to your app, you will need to update the version number in the `tildagon.toml` file create a new release on GitHub with an incremented version number.

## Support

You can currently only publish Tildagon Apps through GitHub. Contributions to support other ways of publishing are welcome!

## What next?

<div class="grid cards" markdown>

- [Using the badge simulator][simulator]

</div>

[simulator]: https://github.com/emfcamp/badge-2024-software/tree/main/sim
