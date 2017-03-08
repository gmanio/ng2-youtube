import './vendor/youtube/client.js';
import './vendor/youtube/player.js';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot/app/app/app.module.ngfactory';
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
