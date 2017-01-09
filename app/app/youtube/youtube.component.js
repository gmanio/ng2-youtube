/**
 * Created on 2016-12-06.
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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let YoutubeComponent = YoutubeComponent_1 = 
/**
 *
 * [ref] : https://developers.google.com/youtube/v3/docs/search/list?hl=ko
 */
class YoutubeComponent {
    constructor(cdRef, router) {
        this.query = 'donald trump';
        this.order = 'relevance';
        this.isLoading = false;
        this.videos = [];
        this.cdRef = cdRef;
        this.router = router;
    }
    ngOnInit() {
        window['gapi'].load('client', () => {
            let oClient = window['gapi']['client'];
            oClient.setApiKey(YoutubeComponent_1.apiKey);
            oClient.load('youtube', 'v3').then(() => {
                this.oYoutubeSearchRequest = window['gapi']['client']['youtube']['search']['list'];
                this.requestYoutubeData({ type: 'init' });
            });
        });
    }
    requestYoutubeData(htOption) {
        this.onLoading();
        let initOption = {
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
    }
    onLoadMoreContent() {
        this.requestYoutubeData({ pageToken: this.nextPageToken });
    }
    onClickedSort(sortType) {
        this.order = sortType;
        this.requestYoutubeData({ type: 'init' });
    }
    onSearch(event) {
        if (event.button != 0 && event.which != 13) {
            return;
        }
        this.requestYoutubeData({ type: 'init' });
    }
    onSuccess(data) {
        this.nextPageToken = data.result.nextPageToken;
        this.videos = this.videos.concat(data.result.items);
        this.onLoaded();
    }
    onFailed() {
        this.onLoaded();
    }
    onLoading() {
        this.isLoading = true;
        this.cdRef.detectChanges();
    }
    onLoaded() {
        setTimeout(() => {
            document.getElementById('search-field').blur();
        }, 3000);
        // document.focus();
        this.isLoading = false;
        this.cdRef.detectChanges();
    }
};
YoutubeComponent.apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';
__decorate([
    core_1.HostListener('window:googleApiClientReady'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], YoutubeComponent.prototype, "ngOnInit", null);
YoutubeComponent = YoutubeComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        styleUrls: ['youtube.component.css'],
        templateUrl: './youtube.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, router_1.Router])
], YoutubeComponent);
exports.YoutubeComponent = YoutubeComponent;
var YoutubeComponent_1;
