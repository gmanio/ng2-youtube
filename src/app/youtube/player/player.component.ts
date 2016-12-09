/**
 * Created on 2016-12-08.
 * @author: Gman Park
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'player.component.html'
})

export class PlayerComponent implements OnInit {
    private player;
    private isPlayerOpen: boolean = true;
    private videoId;

    constructor(private router: ActivatedRoute) {
        this.router = router;
    }

    ngOnInit(): void {
        console.log("init");
        window['onYouTubeIframeAPIReady'] = () => {
            if (window['YT'] && window['YT'].Player) {
                console.log('Youtube API is ready');
                this.onYoutubeReady.bind(this);
            }
        };

        this.router.params.subscribe(params => {
            this.videoId = params['id'];
        });
    }

    onYoutubeReady() {
        console.log(window.innerHeight + " " + window.innerWidth);
        this.player = new window['YT'].Player('youtube_player', {
            width: window.innerWidth,
            height: window.innerHeight,
            videoId: this.videoId,
            events: {
                'onReady': this.onPlayerReady,
                // 'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
                // 'onStateChange': onPlayerStateChange,
                // 'onError': onPlayerError
            }
        });
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }
}