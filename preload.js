const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    openMinuteur: () => ipcRenderer.send("open-minuteur"),
});