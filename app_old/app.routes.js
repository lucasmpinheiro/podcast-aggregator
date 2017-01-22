"use strict";
var router_1 = require('nativescript-angular/router');
var search_component_1 = require('./pages/search/search.component');
var podcast_details_component_ts_1 = require('./pages/podcast-details/podcast-details.component.ts');
exports.routes = [
    { path: '', component: search_component_1.SearchPage },
    { path: 'podcast-details', component: podcast_details_component_ts_1.PodcastDetailsPage },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map