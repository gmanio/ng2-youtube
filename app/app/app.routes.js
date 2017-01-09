/**
 * Created on 2016-12-06.
 * @author: Gman Park
 */
"use strict";
var router_1 = require("@angular/router");
var youtube_component_1 = require("./youtube/youtube.component");
var player_component_1 = require("./youtube/player/player.component");
var pagenotfound_component_1 = require("./etc/pagenotfound.component");
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
//# sourceMappingURL=app.routes.js.map