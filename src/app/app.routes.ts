/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";
import {YoutubeComponent} from "./youtube/youtube.component";

export const routingModule = RouterModule.forRoot([
    {path: 'youtube', component: YoutubeComponent}
    // {path: '', redirectTo: 'main', pathMatch: 'full'},
    // {path: 'main', component: AppComponent},
    // {path: 'about', component: AboutComponent, pathMatch: 'full'},
    // {
    //     path: "**",
    //     component: PageNotFoundComponent
    // }
]);