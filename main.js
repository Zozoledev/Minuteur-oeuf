const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 400,
        title: "Ma première app Electron",
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on("open-minuteur", () => {
    win.loadFile("show_timer.html");
});


