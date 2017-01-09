/**
 * Created on 2017-01-09.
 * @author: Gman Park
 */

import {Directive, AfterViewChecked, ElementRef} from '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})

export class MDL implements AfterViewChecked {

    constructor(private el: ElementRef) {}

    ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }

}