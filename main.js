const electron = require("electron");
const url = require('url');
const path = require("path");
const { BrowserWindow } = require("electron");

const {app, browserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready
app.on("ready", function(){
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load HTML file into the window
    mainWindow.loadFile("mainWindow.html");

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label: "File",
    }
];
