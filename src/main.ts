/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import './vendor/material/material.min.css';
import './vendor/material/material.min.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// if (process.env.ENV === 'production') {
//     enableProdMode();
// }
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);