/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */
"use strict";
// import 'core-js/client/shim';
// import 'zone.js';
// import 'reflect-metadata';
// RxJS
// import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
//youtube
// import './vendor/material/material.min.css';
// import './vendor/material/material.min.js';
require("./vendor/youtube/client.js");
require("./vendor/youtube/player.js");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map