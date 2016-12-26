/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {Component, HostListener, OnInit, ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    styleUrls: ['youtube.component.css'],
    templateUrl: 'youtube.component.html'
})

/**
 *
 * [ref] : https://developers.google.com/youtube/v3/docs/search/list?hl=ko
 */
export class YoutubeComponent implements OnInit {
    static apiKey = 'AIzaSyA4k_7jggyPzjs1Tv90go3eoRyn5War9LQ';

    private oYoutubeSearchRequest;
    private query: string = 'america president';
    private order: string = 'relevance';
    private isLoading: boolean = false;
    private cdRef: ChangeDetectorRef;
    private videos = [];
    private router;
    private nextPageToken;
    private isNavHide: boolean = false;

    @HostListener('window:googleApiClientReady')
    ngOnInit(): void {
        window['gapi'].load('client', () => {
            let oClient = window['gapi']['client'];

            oClient.setApiKey(YoutubeComponent.apiKey);
            oClient.load('youtube', 'v3').then(() => {
                this.oYoutubeSearchRequest = window['gapi']['client']['youtube']['search']['list'];
                this.requestYoutubeData({type: 'init'});
            })
        })

    }


    constructor(cdRef: ChangeDetectorRef, router: Router) {
        this.cdRef = cdRef;
        this.router = router;
    }

    requestYoutubeData(htOption) {
        this.onLoading();

        let initOption = {
            part: 'snippet', //required
            type: 'video',
            q: this.query,
            order: this.order,
            maxResults: 20,
            region: 'KR'
        }

        if (htOption.type == "init") {
            this.videos = [];
        } else {
            initOption = Object.assign({}, initOption, {pageToken: this.nextPageToken});
            console.log(initOption);
        }

        this.oYoutubeSearchRequest(initOption).then(this.onSuccess.bind(this), this.onFailed.bind(this));
    }

    onLoadMoreContent() {
        this.requestYoutubeData({pageToken: this.nextPageToken});
    }

    onClickedSort(sortType) {
        this.order = sortType;
        this.requestYoutubeData({type: 'init'});
    }

    onSearch(event) {
        console.log(event);

        if (event.button != 0 && event.which != 13) {
            return;
        }

        this.requestYoutubeData({type: 'init'});
        return true;
    }

    onSuccess(data) {
        this.onLoaded();
        this.nextPageToken = data.result.nextPageToken;
        this.videos = this.videos.concat(data.result.items);
        this.cdRef.detectChanges();

        let elList = [].slice.call(document.querySelectorAll('.video_item'));
        let interval = 0;

        for (let el of elList) {
            this.delay(10000);
        }
        // [].forEach.call(elList, function (li) {
        //     // do whatever
        //     setTimeout(() => {
        //         li.className = 'video_item show';
        //     }, interval);
        // });
    }

    async delay(ms) {
         let promise = new Promise(resolve => setTimeout(console.log("delay"), ms));
    }

    onFailed() {
        this.onLoaded();
        console.log('error');
    }

    onLoading() {
        this.isLoading = true;
        this.cdRef.detectChanges();
    }

    onLoaded() {
        this.isLoading = false;
        this.cdRef.detectChanges();
    }
}