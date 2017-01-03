/**
 * Created on 2017-01-04.
 * @author: Gman Park
 */

import 'zone.js';
import 'reflect-metadata';

// RxJS
import 'rxjs';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

//youtube
import './vendor/material/material.min.css';
import './vendor/material/material.min.js';
import './vendor/youtube/client.js';
import './vendor/youtube/player.js';

import {platformBrowser}    from '@angular/platform-browser';
import {enableProdMode} from "@angular/core";
import {AppModuleNgFactory} from '../aot/src/app/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);