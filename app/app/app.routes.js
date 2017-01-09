/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */
"use strict";
const router_1 = require("@angular/router");
const youtube_component_1 = require("./youtube/youtube.component");
const player_component_1 = require("./youtube/player/player.component");
const pagenotfound_component_1 = require("./etc/pagenotfound.component");
exports.routingModule = router_1.RouterModule.forRoot([
    { path: '', redirectTo: 'youtube', pathMatch: 'full' },
    {
        path: 'youtube', component: youtube_component_1.YoutubeComponent,
        children: [
            { path: 'player/:id', component: player_component_1.PlayerComponent }
        ]
    },
    {
        path: "**",
        component: pagenotfound_component_1.PageNotFoundComponent
    }
]);
