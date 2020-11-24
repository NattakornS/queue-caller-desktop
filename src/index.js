import { app, BrowserWindow, global } from 'electron';
import { init } from 'electron-compile';
import { truncate } from 'fs';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const initArgv = () => {
  console.log(global);
  // global.sharedVariable = {
  //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZSI6Img0dSIsImRlc2NyaXB0aW9uIjoiZm9yIGFjY2VzcyBRNFUgYXBpIiwiUVVFVUVfQ0VOVEVSX1RPUElDIjoicXVldWUvY2VudGVyIiwiU0VSVklDRV9QT0lOVF9UT1BJQyI6InF1ZXVlL3NlcnZpY2UtcG9pbnQiLCJERVBBUlRNRU5UX1RPUElDIjoicXVldWUvZGVwYXJ0bWVudCIsIkdST1VQX1RPUElDIjoicXVldWUvZ3JvdXAiLCJOT1RJRllfVVNFUiI6InE0dSIsIk5PVElGWV9QQVNTV09SRCI6IiMjcTR1IyMiLCJOT1RJRllfU0VSVkVSIjoiMTI3LjAuMC4xIiwiTk9USUZZX1BPUlQiOiI4ODg4IiwiU1BFQUtfU0lOR0xFIjoiWSIsImlhdCI6MTYwNjE5ODg5NSwiZXhwIjoxNjM3NzU2NDk1fQ.eFtbVsXyKBjP21Ba5UmuawkJhMWpcn3-sldm3F4yHXo',
  //   clinic_code: '1000',
  //   apiUrl: 'http://localhost/api/v1'
  // }
  //{token: process.argv[0], clinic_code: process.argv[1],apiUrl: process.argv[2]}
  process.argv = ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZSI6Img0dSIsImRlc2NyaXB0aW9uIjoiZm9yIGFjY2VzcyBRNFUgYXBpIiwiUVVFVUVfQ0VOVEVSX1RPUElDIjoicXVldWUvY2VudGVyIiwiU0VSVklDRV9QT0lOVF9UT1BJQyI6InF1ZXVlL3NlcnZpY2UtcG9pbnQiLCJERVBBUlRNRU5UX1RPUElDIjoicXVldWUvZGVwYXJ0bWVudCIsIkdST1VQX1RPUElDIjoicXVldWUvZ3JvdXAiLCJOT1RJRllfVVNFUiI6InE0dSIsIk5PVElGWV9QQVNTV09SRCI6IiMjcTR1IyMiLCJOT1RJRllfU0VSVkVSIjoiMTI3LjAuMC4xIiwiTk9USUZZX1BPUlQiOiI4ODg4IiwiU1BFQUtfU0lOR0xFIjoiWSIsImlhdCI6MTYwNjE5ODg5NSwiZXhwIjoxNjM3NzU2NDk1fQ.eFtbVsXyKBjP21Ba5UmuawkJhMWpcn3-sldm3F4yHXo','1000','http://localhost/api/v1']
}

const createWindow = () => {
  // initArgv()
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 300,
    height: 800,
    minWidth: 300,
    alwaysOnTop: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      additionalArguments: ['--token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZSI6Img0dSIsImRlc2NyaXB0aW9uIjoiZm9yIGFjY2VzcyBRNFUgYXBpIiwiUVVFVUVfQ0VOVEVSX1RPUElDIjoicXVldWUvY2VudGVyIiwiU0VSVklDRV9QT0lOVF9UT1BJQyI6InF1ZXVlL3NlcnZpY2UtcG9pbnQiLCJERVBBUlRNRU5UX1RPUElDIjoicXVldWUvZGVwYXJ0bWVudCIsIkdST1VQX1RPUElDIjoicXVldWUvZ3JvdXAiLCJOT1RJRllfVVNFUiI6InE0dSIsIk5PVElGWV9QQVNTV09SRCI6IiMjcTR1IyMiLCJOT1RJRllfU0VSVkVSIjoiMTI3LjAuMC4xIiwiTk9USUZZX1BPUlQiOiI4ODg4IiwiU1BFQUtfU0lOR0xFIjoiWSIsImlhdCI6MTYwNjE5ODg5NSwiZXhwIjoxNjM3NzU2NDk1fQ.eFtbVsXyKBjP21Ba5UmuawkJhMWpcn3-sldm3F4yHXo','--clinic_code=1000','--apiUrl=http://localhost/api/v1']
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/login.html`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
