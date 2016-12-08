/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {Component, HostListener, OnInit, ChangeDetectorRef, ViewEncapsulation} from "@angular/core";

@Component({
    styleUrls: ['youtube.component.css'],
    templateUrl: 'youtube.component.html'
})

export class YoutubeComponent implements OnInit {
    static apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';

    private oYoutubeSearchRequest;
    private query: string = 'america president';
    private order: string = 'relevance';
    private isLoading: boolean = false;
    private cdRef;
    private videos = [];

    @HostListener('window:googleApiClientReady')
    ngOnInit(): void {
        window['gapi'].load('client', () => {
            let oClient = window['gapi']['client'];

            oClient.setApiKey(YoutubeComponent.apiKey);
            oClient.load('youtube', 'v3').then(() => {
                this.oYoutubeSearchRequest = window['gapi']['client']['youtube']['search']['list'];
                this.requestYoutubeData();
            })
        })
    }

    constructor(cdRef: ChangeDetectorRef) {
        this.cdRef = cdRef;
        // this.cdRef.detectChanges();
    }

    requestYoutubeData() {
        let initOption = {
            part: 'snippet', //required
            q: this.query,
            order: this.order,
            maxResults: 20,
            region: 'KR'
        }

        this.oYoutubeSearchRequest(initOption).then(this.onSuccess.bind(this), this.onFailed.bind(this));
    }

    onSuccess(data) {
        this.videos = this.videos.concat(data.result.items);
        console.log(this.videos[0]);
        // debugger;
        this.cdRef.detectChanges();
    }

    onFailed() {
        console.log('error');
    }

    onLoading() {
        this.isLoading = true;
    }

    onLoaded() {
        this.isLoading = false;
    }
}