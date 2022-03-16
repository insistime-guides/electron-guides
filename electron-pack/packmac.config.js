'use strict';

// app config
var appConfig = require('./app.config.js');

// packmac config
module.exports = {
    dir             : 'electron-src',
    out             : 'electron-out',
    arch            : 'x64',
    name            : appConfig.appName,
    icon            : appConfig.appIconPath,
    appVersion      : appConfig.appVersion,
    appCopyright    : appConfig.appCopyright
};