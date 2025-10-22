const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on("open-minuteur", (event, value) => {
    win.loadFile("show_timer.html").then(() => {
        win.webContents.send("start-timer", value);
    });
});

ipcMain.on("open-menu", (event, value) => {
    win.loadFile("index-html").then(() => {});
});

