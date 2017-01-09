var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { YoutubeComponent } from "./youtube/youtube.component";
import { PlayerComponent } from "./youtube/player/player.component";
import { PageNotFoundComponent } from "./etc/pagenotfound.component";
import { routingModule } from './app.routes';
import { MDL } from './MaterialDesignLiteUpgradeElement';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        providers: [
            Title
        ],
        bootstrap: [AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
