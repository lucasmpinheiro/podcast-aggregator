"use strict";
// import {PodcastDetailsPage} from '../podcast-details/podcast-details';
var core_1 = require('@angular/core');
var search_bar_1 = require('ui/search-bar');
var observable_array_1 = require('data/observable-array');
var router_1 = require('@angular/router');
var itunes_service_1 = require('../../shared/itunes/itunes.service');
var SearchPage = (function () {
    function SearchPage(_router, _itunes) {
        this._router = _router;
        this._itunes = _itunes;
        // local: Storage;
        this.searchTerm = '';
        this.results = new observable_array_1.ObservableArray();
        this.isLoading = false;
        // this.local = new Storage(LocalStorage);
    }
    SearchPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.nsSearchBar = this.ngSearchBar.nativeElement;
        this.nsSearchBar.focus();
        this.nsSearchBar.on(search_bar_1.SearchBar.submitEvent, function (e) {
            _this.searchTerm = _this.searchTerm.trim();
            // If no term was searched for, do nothing.
            if (_this.searchTerm == '') {
                // Clean last results.
                _this.results.splice(0);
                return;
            }
            // Show the loading
            _this.isLoading = true;
            _this._itunes.fetchPodcastsList(_this.searchTerm)
                .then(function (res) {
                // Clean last results.
                _this.results.splice(0);
                // Add each item to the array.
                res.forEach(function (item) { return _this.results.push(item); });
                _this.isLoading = false;
            })
                .catch(function (err) { return console.log(err); });
        });
        this.nsSearchBar.on(search_bar_1.SearchBar.clearEvent, function (e) {
            // Clean results.
            _this.results.splice(0);
        });
    };
    SearchPage.prototype.itemTapped = function (item) {
        this._router.navigate(["/podcast-details"]);
    };
    __decorate([
        core_1.ViewChild('searchBar'), 
        __metadata('design:type', core_1.ElementRef)
    ], SearchPage.prototype, "ngSearchBar", void 0);
    SearchPage = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'pages/search/search.html',
            providers: [itunes_service_1.ItunesService],
            styleUrls: ['pages/search/search-common.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, itunes_service_1.ItunesService])
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
//# sourceMappingURL=search.component.js.map