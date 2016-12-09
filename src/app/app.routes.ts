/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */

import {RouterModule} from "@angular/router";
import {YoutubeComponent} from "./youtube/youtube.component";
import {PlayerComponent} from "./youtube/player/player.component";

export const routingModule = RouterModule.forRoot([
    {path: '', redirectTo: 'youtube', pathMatch: 'full'},
    {path: 'youtube', component: YoutubeComponent,
        children: [
            { path: 'player', component: PlayerComponent }
        ]
    },
    // {path: 'main', component: AppComponent},
    // {path: 'about', component: AboutComponent, pathMatch: 'full'},
    // {
    //     path: "**",
    //     component: PageNotFoundComponent
    // }
]);