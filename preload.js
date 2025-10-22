const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    openMinuteur: (value) => ipcRenderer.send("open-minuteur", value),
    onTimerValue: (callback) => ipcRenderer.on("start-timer", (_event, value) => callback(value))
});
