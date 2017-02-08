import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
})

export class AppComponent {
    constructor(private titleService: Title) {
        this.setTitle("It works");

        this.printLogo();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    private printLogo() {
        setTimeout(console.log.bind(console, "%cGMAN", "font:8em Arial;color:#EC6521;font-weight:bold"), 0);
        setTimeout(console.log.bind(console, "%cDevTools@2017", "font:2em sans-serif;color:#333;"), 0);
    }
}