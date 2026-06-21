---
title: Run your app on your badge
weight: -3
---

You can test your app on-device, without publishing it, using [`mpremote`](https://docs.micropython.org/en/latest/reference/mpremote.html).

1. Plug the badge into your computer over USB-C. Make sure the cable is going into the USB IN port not the USB OUT port!
1. Install [Python](https://www.python.org/downloads/) if you don't already have it.
1. Install `mpremote` following the [installation instructions](https://docs.micropython.org/en/latest/reference/mpremote.html).
1. You should now be able to run `mpremote --version` in a terminal and it shouldn't error. If you don't, try `python -m mpremote --version`. If that works but `mpremote --version` didn't, you'll need to remember to type `python -m` before `mpremote` for the rest of this guide.
1. Create a `metadata.json` file in your app's directory. This is necessary **only** during development. Remove this file before publishing your app to the app store.

   ```json
   {
     "name": "<app-name>",
     "path": "apps.<folder-name>.<source-name>"
   }
   ```

   The folder name is the name of the folder you will copy the app to. The source name is the name of the Python source file containing your app, without the `.py` extension. For example, if your app is in a file called `app.py`:

   ```json
   {
     "name": "The OG Snake app",
     "path": "apps.snake.app"
   }
   ```

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
