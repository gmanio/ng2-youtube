/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// if (process.env.ENV === 'production') {
//     enableProdMode();
// }
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);