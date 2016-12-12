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
    private player: any;
    private isPlayerOpen: boolean = false;
    private videoId: string;

    constructor(private router: ActivatedRoute, private cdRef: ChangeDetectorRef) {
        this.router = router;
        this.cdRef = cdRef;
    }

    ngOnInit(): void {
        window.addEventListener('resize', this.onResize.bind(this), false);

        window['onYouTubeIframeAPIReady'] = () => {
            if (window['YT'] && window['YT'].Player) {
                console.log('Youtube API is ready');
                this.onYoutubeReady();
            }
        };

        this.router.params.subscribe(params => {
            console.log("player router change");
            this.isPlayerOpen = true;
            this.videoId = params['id'];

            if (this.player) {
                this.player.loadVideoById(this.videoId);
                this.player.playVideo();
            }else{
                this.onYoutubeReady();
            }
        });
    }

    hide() {
        this.player.stopVideo();
        this.router
        // this.isPlayerOpen = false;
    }

    onResize() {
        if (this.player) {
            this.player.setSize(window.innerWidth, window.innerHeight);
        }
    }

    onYoutubeReady() {
        console.log(window.innerHeight + " " + window.innerWidth);
        console.log(this.router.snapshot.params['id']);
        this.player = new window['YT'].Player('youtube_player', {
            width: window.innerWidth,
            height: window.innerHeight,
            videoId: this.router.snapshot.params['id'],
            events: {
                'onReady': this.onPlayerReady.bind(this),
                'onStateChange': this.onPlayerStateChange.bind(this)
                // 'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
                // 'onStateChange': onPlayerStateChange,
                // 'onError': onPlayerError
            }
        });
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
    onPlayerStateChange() {
        // var youtubeIframe = document.querySelector('#youtube_player');
        // console.log(youtubeIframe.querySelector('.ytp-title-link'));
        console.log(this.player.getPlayerState());
        // switch (this.player.getPlayerState()) {
        //     case (0):
        //         break;
        //     case (1):
        //         this.isPlayerOpen = true;
        //         this.cdRef.detectChanges();
        //         break;
        //     case (3):
        //         this.isPlayerOpen = true;
        //         this.cdRef.detectChanges();
        //         break;
        //     default:
        //         this.isPlayerOpen = true;
        //         break;
        // }
        // this.isPlayerOpen = true;
        // this.cdRef.detectChanges();
    }

    onPlayerReady() {
        console.log("player ready");
        this.player.playVideo();
    }
}