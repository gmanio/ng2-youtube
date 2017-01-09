var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
var YoutubeComponent = YoutubeComponent_1 = (function () {
    function YoutubeComponent(cdRef, router) {
        this.query = 'donald trump';
        this.order = 'relevance';
        this.isLoading = false;
        this.videos = [];
        this.cdRef = cdRef;
        this.router = router;
    }
    YoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window['gapi'].load('client', function () {
            var oClient = window['gapi']['client'];
            oClient.setApiKey(YoutubeComponent_1.apiKey);
            oClient.load('youtube', 'v3').then(function () {
                _this.oYoutubeSearchRequest = window['gapi']['client']['youtube']['search']['list'];
                _this.requestYoutubeData({ type: 'init' });
            });
        });
        window["componentHandler"].upgradeAllRegistered();
    };
    YoutubeComponent.prototype.requestYoutubeData = function (htOption) {
        this.onLoading();
        var initOption = {
            part: 'snippet',
            type: 'video',
            q: this.query,
            order: this.order,
            maxResults: 20,
            region: 'KR'
        };
        if (htOption.type == "init") {
            this.videos = [];
        }
        else {
            initOption = Object.assign({}, initOption, { pageToken: this.nextPageToken });
        }
        this.oYoutubeSearchRequest(initOption).then(this.onSuccess.bind(this), this.onFailed.bind(this));
    };
    YoutubeComponent.prototype.onLoadMoreContent = function () {
        this.requestYoutubeData({ pageToken: this.nextPageToken });
    };
    YoutubeComponent.prototype.onClickedSort = function (sortType) {
        this.order = sortType;
        this.requestYoutubeData({ type: 'init' });
    };
    YoutubeComponent.prototype.onSearch = function (event) {
        if (event.button != 0 && event.which != 13) {
            return;
        }
        this.requestYoutubeData({ type: 'init' });
    };
    YoutubeComponent.prototype.onSuccess = function (data) {
        this.nextPageToken = data.result.nextPageToken;
        this.videos = this.videos.concat(data.result.items);
        this.onLoaded();
    };
    YoutubeComponent.prototype.onFailed = function () {
        this.onLoaded();
    };
    YoutubeComponent.prototype.onLoading = function () {
        this.isLoading = true;
        this.cdRef.detectChanges();
    };
    YoutubeComponent.prototype.onLoaded = function () {
        this.isLoading = false;
        this.cdRef.detectChanges();
    };
    return YoutubeComponent;
}());
YoutubeComponent.apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';
__decorate([
    HostListener('window:googleApiClientReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], YoutubeComponent.prototype, "ngOnInit", null);
YoutubeComponent = YoutubeComponent_1 = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: './youtube.component.html',
        styleUrls: ['./youtube.component.css']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, Router])
], YoutubeComponent);
export { YoutubeComponent };
var YoutubeComponent_1;
