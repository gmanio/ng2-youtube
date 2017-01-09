/**
 * Created on 2016-11-29.
 * @author: Gman Park
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Native Module
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
// User Module
const app_component_1 = require("./app.component");
const youtube_component_1 = require("./youtube/youtube.component");
const player_component_1 = require("./youtube/player/player.component");
const pagenotfound_component_1 = require("./etc/pagenotfound.component");
const app_routes_1 = require("./app.routes");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routes_1.routingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            youtube_component_1.YoutubeComponent,
            player_component_1.PlayerComponent,
            pagenotfound_component_1.PageNotFoundComponent
        ],
        providers: [
            platform_browser_1.Title
        ],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
