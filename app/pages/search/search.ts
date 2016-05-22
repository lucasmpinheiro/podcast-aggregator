import {Page, NavController, NavParams} from 'ionic-angular';
import {ItunesService} from '../../services/itunes';
import {JSONP_PROVIDERS} from 'angular2/http';


@Page({
    templateUrl: 'build/pages/search/search.html',
    providers: [ItunesService, JSONP_PROVIDERS]
})
export class SearchPage {
    searchResult: string = '';

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private itunes: ItunesService
    ) {
        itunes.getPodcastsList('nerdcast').subscribe(
            data => { this.searchResult = JSON.stringify(data.json()); },
            err => console.error(err),
            () => console.log('done')
        )
    }
}
