/**
 * Created on 2016-11-29.
 * @author: Gman Park
 */

// Native Module
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {FormsModule} from '@angular/forms';

// User Module
import {AppComponent} from './app.component';
import {YoutubeComponent} from "./youtube/youtube.component";

import {routingModule} from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routingModule
    ],
    declarations: [
        AppComponent,
        YoutubeComponent
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}