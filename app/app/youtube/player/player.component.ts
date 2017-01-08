/**
 * Created on 2016-12-08.
 * @author: Gman Park
 */

import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
    public player: any;
    public isPlayerOpen: boolean = false;
    public videoId: string;

    constructor(public router: ActivatedRoute, public cdRef: ChangeDetectorRef) {
        this.router = router;
        this.cdRef = cdRef;

        window.addEventListener('resize', this.onResize.bind(this), false);

        window['onYouTubeIframeAPIReady'] = () => {
            if (window['YT'] && window['YT'].Player) {
                this.initYoutubePlayer();
            }
        };
    }

    ngOnInit(): void {
        this.router.params.subscribe(params => {
            this.isPlayerOpen = true;
            this.videoId = params['id'];
            this.cdRef.detectChanges();

            if (this.player) {
                this.playVideo();
            } else {
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
                // 'onError': onPlayerError
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
    onPlayerStateChange(event: any) {
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
}