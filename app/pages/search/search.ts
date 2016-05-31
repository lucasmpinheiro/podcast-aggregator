import {
    Page, NavController, NavParams, Loading,
    Storage, LocalStorage
} from 'ionic-angular';
import {PodcastDetailsPage} from '../podcast-details/podcast-details';
import {ItunesService} from '../../services/itunes';
import {JSONP_PROVIDERS} from 'angular2/http';


@Page({
    templateUrl: 'build/pages/search/search.html',
    providers: [ItunesService, JSONP_PROVIDERS]
})
export class SearchPage {
    local: Storage;
    results: Array<Object>;

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private itunes: ItunesService
    ) {
        this.local = new Storage(LocalStorage);
    }

    searchPodcasts(event) {
        let term = event.srcElement.value.trim().toLowerCase();

        // If no term was searched for, do nothing.
        if (term == '') {
            this.results = [];
            return;
        }

        // Create and show a loading overlay.
        let loading = Loading.create({
            content: 'Searching...',
            dismissOnPageChange: true
        });
        this.nav.present(loading);

        this.local.getJson('search=' + term).then(data => {
            // If there's no local data matching the search, fetch from iTunes.
            if (!data) {
                this.itunes.fetchPodcastsList(term).subscribe(res => {
                    this.results = res.json().results;
                    console.log(this.results);

                    this.local.setJson('search=' + term, this.results);

                    // Dismiss the loading overlay.
                    loading.dismiss();
                });

                return;
            }
            this.results = data;

            // Dismiss the loading overlay.
            setTimeout(()=>{
                loading.dismiss();
            }, 1);
        });

    }

    itemTapped(event, item) {
        this.nav.push(PodcastDetailsPage, {
            podcast: item
        });
    }
}
