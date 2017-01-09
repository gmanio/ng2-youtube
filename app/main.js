/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */
// import 'core-js/client/shim';
// import 'zone.js';
// import 'reflect-metadata';
"use strict";
// RxJS
// import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
//youtube
// require('./vendor/material/material.min.css');
// require('./vendor/material/material.min.js');
require("./vendor/material/material.min.css");
require("./vendor/material/material.min.js");
require("./vendor/youtube/client.js");
require("./vendor/youtube/player.js");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const core_1 = require("@angular/core");
const app_module_1 = require("./app/app.module");
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
