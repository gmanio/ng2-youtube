/**
 * Created on 2016-12-08.
 * @author: Gman Park
 */

import {Component, OnInit, HostListener} from "@angular/core";

@Component({
    templateUrl: 'player.component.html'
})


export class PlayerComponent implements OnInit {
    private player;

    ngOnInit(): void {
        window['onYoutubeIframeAPIReady'] = this.onYoutubeReady ;

        console.log("ready");
        console.log(window['YT']);
        setTimeout(() => {
            console.log(window['YT']);
        }, 2000)
    }

    onYoutubeReady() {
        this.player = new window['YT'].Player('youtube_player', {
            width: window.innerWidth,
            height: window.innerHeight,
            events: {
                // 'onReady': onPlayerReady,
                // 'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
                // 'onStateChange': onPlayerStateChange,
                // 'onError': onPlayerError
            }
        });
    }
}