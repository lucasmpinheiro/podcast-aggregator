"use strict";
var core_1 = require('@angular/core');
var http = require('http');
require('rxjs/add/operator/map');
var ItunesService = (function () {
    function ItunesService() {
        // Itunes search URL.
        this.itunesUrl = 'https://itunes.apple.com/search';
        // Search parameters.
        this.searchParams = 'media=podcast&attribute=titleTerm&entity=podcast';
    }
    // Fetch podcasts.
    ItunesService.prototype.fetchPodcastsList = function (term) {
        var queryUrl = this.itunesUrl + "?" + this.searchParams + "&term=" + term;
        return http.request({
            url: queryUrl,
            method: 'GET'
        }).then(function (res) { return res.content.toJSON().results; });
    };
    ItunesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItunesService);
    return ItunesService;
}());
exports.ItunesService = ItunesService;
//# sourceMappingURL=itunes.service.js.map