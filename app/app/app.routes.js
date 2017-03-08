import { RouterModule } from "@angular/router";
import { YoutubeComponent } from "./youtube/youtube.component";
import { PlayerComponent } from "./youtube/player/player.component";
import { PageNotFoundComponent } from "./etc/pagenotfound.component";
export var routingModule = RouterModule.forRoot([
    { path: '', redirectTo: 'youtube', pathMatch: 'full' },
    {
        path: 'youtube', component: YoutubeComponent,
        children: [
            { path: 'player/:id', component: PlayerComponent }
        ]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
]);
