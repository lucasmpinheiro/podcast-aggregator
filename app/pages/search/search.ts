import {Page, NavController, NavParams, Loading} from 'ionic-angular';
import {PodcastDetailsPage} from '../podcast-details/podcast-details';
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

        // Create and show a loading overlay.
        let loading = Loading.create({
            content: 'Searching...'
        });
        this.nav.present(loading);

        this.itunes.fetchPodcastsList(term).subscribe(res => {
            this.results = res.json().results;
            console.log(this.results);

            // Dismiss the loading overlay.
            loading.dismiss();
        });
    }

    itemTapped(event, item) {
        this.nav.push(PodcastDetailsPage, {
            item: item
        });
    }
}
