var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
        var _this = this;
        this.player = new window['YT'].Player('youtube_player', {
            width: window.innerWidth,
            height: window.innerHeight,
            videoId: this.videoId,
            events: {
                'onReady': this.playVideo.bind(this),
                'onStateChange': this.onPlayerStateChange.bind(this),
            }
        });
        setTimeout(function () {
            _this.player.playVideo();
        }, 3000);
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
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: './player.component.html',
        styleUrls: ['./player.component.css'],
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ChangeDetectorRef])
], PlayerComponent);
export { PlayerComponent };
