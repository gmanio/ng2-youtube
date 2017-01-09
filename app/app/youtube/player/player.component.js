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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let PlayerComponent = class PlayerComponent {
    constructor(router, cdRef) {
        this.router = router;
        this.cdRef = cdRef;
        this.isPlayerOpen = false;
        this.router = router;
        this.cdRef = cdRef;
        window.addEventListener('resize', this.onResize.bind(this), false);
        window['onYouTubeIframeAPIReady'] = () => {
            if (window['YT'] && window['YT'].Player) {
                this.initYoutubePlayer();
            }
        };
    }
    ngOnInit() {
        this.router.params.subscribe(params => {
            this.isPlayerOpen = true;
            this.videoId = params['id'];
            this.cdRef.detectChanges();
            if (this.player) {
                this.playVideo();
            }
            else {
                if (window['YT'] && window['YT'].Player) {
                    this.initYoutubePlayer();
                }
            }
        });
    }
    initYoutubePlayer() {
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
    }
    hide() {
        this.player.stopVideo();
        this.isPlayerOpen = false;
        this.cdRef.detectChanges();
    }
    onResize() {
        if (this.player) {
            this.player.setSize(window.innerWidth, window.innerHeight);
        }
    }
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
    onPlayerStateChange(event) {
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
    }
    playVideo() {
        this.player.loadVideoById(this.videoId);
        this.player.playVideo();
    }
};
PlayerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'player.component.html',
        styleUrls: ['./player.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, core_1.ChangeDetectorRef])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
