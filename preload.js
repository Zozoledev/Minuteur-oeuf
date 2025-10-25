const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    openMinuteur: (value) => ipcRenderer.send("open-minuteur", value),
    onTimerValue: (callback) => {
        // Retirer l'ancien listener avant d'en ajouter un nouveau
        ipcRenderer.removeAllListeners("start-timer");
        ipcRenderer.on("start-timer", (_event, value) => callback(value));
    },
    openMenu: () => ipcRenderer.send("open-menu"),
});


