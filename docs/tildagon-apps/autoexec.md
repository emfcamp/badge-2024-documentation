---
title: Run an app automatically at startup
---

You can make your badge run an app automatically at startup, for example if you would like a namebadge app to start rather than the default launcher.

Create a file called `autoexec.bat` on your Tildagon, containing the name of the app you would like to start, as named in the launcher menu.

For example, you can use `mpremote`:

   ```sh
   mpremote edit :/autoexec.bat
   ```

If you'd chosen to launch the built-in settings app, you would then see this:

   ```sh
   $ mpremote cat :/autoexec.bat
   Settings
   ```
