const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 310,
    minHeight: 250,
  });
  mainWindow.loadFile('index.html');
  mainWindow.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
