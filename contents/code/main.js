/*
    SPDX-FileCopyrightText: 2025 Jordan Callicoat <jordan.callicoat@gmail.com>

    SPDX-License-Identifier: GPL-2.0-or-later
*/

class SwitchToVirtualDesktopShortcut {
    constructor() {
        this.previousDesktop = 1;

        workspace.currentDesktopChanged.connect(desktop => {
            this.previousDesktop = desktop.x11DesktopNumber;
        });

        registerShortcut("Toggle Desktop 1", "Toggle Desktop 1", "Meta+1", () => {
            this.switchToVirtualDesktop(1);
        });

        registerShortcut("Toggle Desktop 2", "Toggle Desktop 2", "Meta+2", () => {
            this.switchToVirtualDesktop(2);
        });

        registerShortcut("Toggle Desktop 3", "Toggle Desktop 3", "Meta+3", () => {
            this.switchToVirtualDesktop(3);
        });

        registerShortcut("Toggle Desktop 4", "Toggle Desktop 4", "Meta+4", () => {
            this.switchToVirtualDesktop(4);
        });

        registerShortcut("Toggle Desktop 5", "Toggle Desktop 5", "Meta+5", () => {
            this.switchToVirtualDesktop(5);
        });

        registerShortcut("Toggle Desktop 6", "Toggle Desktop 6", "Meta+6", () => {
            this.switchToVirtualDesktop(6);
        });

        registerShortcut("Toggle Desktop 7", "Toggle Desktop 7", "Meta+7", () => {
            this.switchToVirtualDesktop(7);
        });

        registerShortcut("Toggle Desktop 8", "Toggle Desktop 8", "Meta+8", () => {
            this.switchToVirtualDesktop(8);
        });

        registerShortcut("Toggle Desktop 9", "Toggle Desktop 9", "Meta+9", () => {
            this.switchToVirtualDesktop(9);
        });
    }

    switchToVirtualDesktop(targetDesktop) {
        for (const desktop of workspace.desktops) {
            // IF we are already on the desktop, switch to previous if available
            if (workspace.currentDesktop.x11DesktopNumber == targetDesktop) {
                if (desktop.x11DesktopNumber == this.previousDesktop) {
                    workspace.currentDesktop = desktop;
                    break;
                }
            // Otherwise, switch to the requested desktop
            } else {
                if (desktop.x11DesktopNumber == targetDesktop) {
                    workspace.currentDesktop = desktop;
                    break;
                }
            }
        }
    }
}

new SwitchToVirtualDesktopShortcut();
