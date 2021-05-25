const { ipcMain, BrowserWindow, app, Menu } = require("electron");

function createMainWindow() {
  var mainWin = new BrowserWindow({
    resizable: true,
    title: "Login - Dhaka Restaurant",
    minimizable: true,
    fullscreenable: true,
    modal: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWin.loadFile("assests/html/index.html");
  mainWin.maximize();
  mainWin.webContents.openDevTools();
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
