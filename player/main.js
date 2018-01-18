const electron = require('electron');
const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {

    let mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(`file://${__dirname}/index.html`);

});