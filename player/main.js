
const electron = require('electron');
const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {

    let mainScreenDimensions = (((electron.screen).getPrimaryDisplay()).size);

    //let mainWindow = new BrowserWindow({width: 550, height: 120, alwaysOnTop: true, x: mainScreenDimensions.width - 500, y: 0, autoHideMenuBar: true});
    
    let mainWindow = new BrowserWindow({width: (mainScreenDimensions.width / 4), height: (Math.round(mainScreenDimensions.height / 9)), alwaysOnTop: true, x: (mainScreenDimensions.width * 75 / 100), y: 0, autoHideMenuBar: true});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

});