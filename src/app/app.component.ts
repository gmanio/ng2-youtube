import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private titleService: Title) {
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}