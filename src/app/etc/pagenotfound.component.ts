/**
 * Created on 2016-12-14.
 * @author: Gman Park
 */

import {Component} from '@angular/core';

@Component({
    template:`
        <div>
            <span>{{title}}</span>
        </div>`,
})

export class PageNotFoundComponent{
    title = 'Page Not Found';
}