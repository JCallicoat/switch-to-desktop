Simple KWin script to implement functionality like i3 `workspace_auto_back_and_forth` and xfce `toggle_workspaces`, where switching to the currently active virtual desktop will instead switch to the previously active desktop.

Installation:
----
```shell
git clone https://github.com/JCallicoat/switch-to-desktop
cd switch-to-desktop
kpackagetool6 --type KWin/Script --install switch-to-desktop
```

Configuration:
----
Go to the "KWin Scripts" settings page and enable "Switch to Desktop"

The following shortcuts are added by the script and can be changed on the "Shortcuts" settings page.

| Shortcut  | Keys |
| ------------- | ------------- |
| Toggle Desktop 1 | Meta+1  |
| Toggle Desktop 2 | Meta+2  |
| Toggle Desktop 3 | Meta+3  |
| Toggle Desktop 4 | Meta+4  |
| Toggle Desktop 5 | Meta+5  |
| Toggle Desktop 6 | Meta+6  |
| Toggle Desktop 7 | Meta+7  |
| Toggle Desktop 8 | Meta+8  |
| Toggle Desktop 9 | Meta+9  |

Credit:
----
Inspired by: https://invent.kde.org/vladz/switch-to-previous-desktop
