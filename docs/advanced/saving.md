---
sidebar_position: 1
---

# Saving your game

The good news about Cardtable is that it will automatically save your game in whatever browser you are playing! About once a second, the game will be saved for you.

This means if you accidentally close your browser or refresh the page, you won't lose any progress!

However, because cardtable is a browser-based game with no central server to save your game, your game is only saved on a particular computer in a particular browser. So if you go to a different computer or device, you won't be able to automatically load your game from another device.

:::note
For the technically inclined, the game state is stored in `localStorage` in a browser, so if you have settings or a plugin that impacts the ability to use localStorage, your game might not save as expected
:::

## Transferring a game to another device

However, there is a way to share a game at a particular point in time with someone else (or move it to another device).

To copy the state of the game to the clipboard, simply Right click (or click/tap the <img style={{height: "2rem", verticalAlign: "middle"}} src="/cardtable-docs/img/screenshots/menu-icon.png"/> menu button) and select `Copy game to clipboard`. This will copy a URL that contains the entire state of the game. This basically means you have a link that you can click on any other device to load your game.

:::note
Be careful when clicking a link that includes game state, as it will override whatever last game you had been playing in the browser
:::
