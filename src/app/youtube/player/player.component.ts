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

        window.addEventListener('resize', this.onResize.bind(this), false);


    }

    ngOnInit(): void {
        this.router.params.subscribe(params => {
            console.log("player router change");
            this.isPlayerOpen = true;
            this.videoId = params['id'];
            this.cdRef.detectChanges();

            if (this.player) {
                console.log("call: playVideo");
                this.playVideo();
            }
        });


        window['onYouTubeIframeAPIReady'] = () => {
            if (window['YT'] && window['YT'].Player) {
                console.log('Youtube API is ready');
                console.log("init");
                this.player = new window['YT'].Player('youtube_player', {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    videoId: this.router.snapshot.params['id'],
                    events: {
                        // 'onReady': this.playVideo.bind(this),
                        'onStateChange': this.onPlayerStateChange.bind(this)
                        // 'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
                        // 'onStateChange': onPlayerStateChange,
                        // 'onError': onPlayerError
                    }
                });
            }
        };
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
                this.isPlayerOpen = true;
                this.cdRef.detectChanges();
                break;
            case (5):
                // this.hide();
                break;
            // default:
            //     this.isPlayerOpen = false;
            //     this.cdRef.detectChanges();
            //     break;
        }
    }

    playVideo(){
        this.player.loadVideoById(this.videoId);
        this.player.playVideo();
    }

    // onPlayerReady() {
    //     console.log("player ready");
    //     this.player.playVideo();
    // }
}