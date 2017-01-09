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
// require('./vendor/material/material.min.css');
// require('./vendor/material/material.min.js');
import './vendor/material/material.min.css';
import './vendor/material/material.min.js';
import './vendor/youtube/client.js';
import './vendor/youtube/player.js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './app/app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);