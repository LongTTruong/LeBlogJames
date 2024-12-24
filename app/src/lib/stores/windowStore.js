
import { writable } from 'svelte/store';

export const windowStore = writable([]);

export function addWindow(windowData) {
    windowStore.update((windows) => {
        if (windows.some((win) => win.id === windowData.id)) return windows;
        return [...windows, windowData];
    });
}

export function closeWindow(windowId) {
    windowStore.update((windows) => windows.filter((win) => win.id !== windowId));
}

export function updateWindow(windowId, newProps) {
    windowStore.update((windows) =>
        windows.map((win) => (win.id === windowId ? { ...win, ...newProps } : win))
    );
}
