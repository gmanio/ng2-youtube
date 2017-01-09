/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

// import 'core-js/client/shim';
// import 'zone.js';
// import 'reflect-metadata';

// RxJS
// import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

//youtube
import './vendor/youtube/client.js';
import './vendor/youtube/player.js';

import {platformBrowser}    from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import {AppModuleNgFactory} from '../aot/app/app/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);