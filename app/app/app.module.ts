/**
 * Created on 2016-11-29.
 * @author: Gman Park
 */

// Native Module
import {NgModule} from '@angular/core';
import {BrowserModule, Title}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';

// User Module
import {AppComponent} from './app.component';
import {YoutubeComponent} from "./youtube/youtube.component";
import {PlayerComponent} from "./youtube/player/player.component";
import {PageNotFoundComponent} from "./etc/pagenotfound.component";

import {routingModule} from './app.routes';
import {MDL} from './MaterialDesignLiteUpgradeElement';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routingModule,
    ],
    declarations: [
        AppComponent,
        YoutubeComponent,
        PlayerComponent,
        PageNotFoundComponent,
        MDL
    ],
    providers:[
        Title
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}