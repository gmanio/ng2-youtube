/**
 * Created on 2016-12-08.
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PlayerComponent = (function () {
    function PlayerComponent(router, cdRef) {
        var _this = this;
        this.router = router;
        this.cdRef = cdRef;
        this.isPlayerOpen = false;
        this.router = router;
        this.cdRef = cdRef;
        window.addEventListener('resize', this.onResize.bind(this), false);
        window['onYouTubeIframeAPIReady'] = function () {
            if (window['YT'] && window['YT'].Player) {
                _this.initYoutubePlayer();
            }
        };
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.isPlayerOpen = true;
            _this.videoId = params['id'];
            _this.cdRef.detectChanges();
            if (_this.player) {
                _this.playVideo();
            }
            else {
                if (window['YT'] && window['YT'].Player) {
                    _this.initYoutubePlayer();
                }
            }
        });
    };
    PlayerComponent.prototype.initYoutubePlayer = function () {
        this.player = new window['YT'].Player('youtube_player', {
            width: window.innerWidth,
            height: window.innerHeight,
            videoId: this.videoId,
            events: {
                'onReady': this.playVideo.bind(this),
                // 'onStateChange': this.onPlayerStateChange.bind(this)
                // 'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
                'onStateChange': this.onPlayerStateChange.bind(this),
            }
        });
    };
    PlayerComponent.prototype.hide = function () {
        this.player.stopVideo();
        this.isPlayerOpen = false;
        this.cdRef.detectChanges();
    };
    PlayerComponent.prototype.onResize = function () {
        if (this.player) {
            this.player.setSize(window.innerWidth, window.innerHeight);
        }
    };
    /*
     * -1(시작되지 않음)
     0(종료됨)
     1(재생 중)
     2(일시중지됨)
     3(버퍼링 중)
     5(동영상 신호)
     YT.PlayerState.ENDED
     YT.PlayerState.PLAYING
     YT.PlayerState.PAUSED
     YT.PlayerState.BUFFERING
     YT.PlayerState.CUED
     */
    PlayerComponent.prototype.onPlayerStateChange = function (event) {
        switch (event.data) {
            case (0):
                break;
            case (1):
                this.isPlayerOpen = true;
                this.cdRef.detectChanges();
                break;
            case (3):
                break;
            case (5):
                break;
        }
    };
    PlayerComponent.prototype.playVideo = function () {
        this.player.loadVideoById(this.videoId);
        this.player.playVideo();
    };
    PlayerComponent = __decorate([
        core_1.Component({
            templateUrl: 'player.component.html',
            styleUrls: ['./player.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map