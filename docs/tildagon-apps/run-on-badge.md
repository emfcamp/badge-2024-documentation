---
title: Run your app on your badge
weight: -3
---

You can test your app on-device, without publishing it, using [`mpremote`](https://docs.micropython.org/en/latest/reference/mpremote.html).

1. Create a `metadata.json` file in your app's directory. This is necessary **only** during development. Remove this file before publishing your app to the app store.

   ```json
   {
     "name": "<app-name>",
     "path": "apps.<folder-name>.app"
   }
   ```

   The folder name is the name of the folder you will copy the app to. For example:

   ```json
   {
     "name": "The OG Snake app",
     "path": "apps.snake.app"
   }
   ```

1. Install `mpremote` following the [installation instructions](https://docs.micropython.org/en/latest/reference/mpremote.html).
1. Create the `apps` folder if it doesn't already exist:

   ```sh
   mpremote mkdir apps
   ```

1. Create the folder for your app inside the `apps` folder, for example:

   ```sh
   mpremote mkdir apps/snake
   ```

1. Copy your app files to the new folder:

   ```sh
   mpremote cp path/to/app/dir/* :/apps/snake/
   ```

   For example:

   ```sh
   mpremote cp apps/snake/* :/apps/snake/
   ```

1. Restart your app by holding the **reboop** button for 2 seconds.

### Debug your app on your badge

If your app crashes when it's started, you can get debug information from `mpremote`:

1. Run `mpremote` to get a shell with access to the device:

   ```sh
   mpremote
   ```

2. Press `CTRL-C` to cancel the current running program and then `CTRL-D` to do a soft-reset while staying connected to the shell.
3. Now you can use the badge menu to start your app and you will see errors and print statements from your app.
