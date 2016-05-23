import {Page, NavController, NavParams} from 'ionic-angular';
import {ItunesService} from '../../services/itunes';
import {JSONP_PROVIDERS} from 'angular2/http';


@Page({
    templateUrl: 'build/pages/search/search.html',
    providers: [ItunesService, JSONP_PROVIDERS]
})
export class SearchPage {
    results: Array<Object>;
    // itunes: ItunesService;

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private itunes: ItunesService
    ) { }

    searchPodcasts(event) {
        let term = event.srcElement.value.trim().toLowerCase();

        // If no term was searched for, do nothing.
        if (term == '') {
            this.results = [];
            return;
        }

        this.itunes.fetchPodcastsList(term).subscribe(res => {
            this.results = res.json().results;
            console.log(this.results);
        });
    }
}
