import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private titleService: Title) {
        this.setTitle("It's works");
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}