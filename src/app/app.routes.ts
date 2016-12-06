/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";
import {YoutubeComponent} from "./youtube/youtube.component";

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'youtube', pathMatch: 'full'},
    {path: 'youtube', component: YoutubeComponent},
    // {path: 'main', component: AppComponent},
    // {path: 'about', component: AboutComponent, pathMatch: 'full'},
    // {
    //     path: "**",
    //     component: PageNotFoundComponent
    // }
]);