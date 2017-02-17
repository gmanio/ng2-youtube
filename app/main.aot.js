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
require("./vendor/youtube/client.js");
require("./vendor/youtube/player.js");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_module_ngfactory_1 = require("../aot/app/app/app.module.ngfactory");
core_1.enableProdMode();
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=main.aot.js.map