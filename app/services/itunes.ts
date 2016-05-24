import {Injectable} from 'angular2/core';
import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';


@Injectable()
export class ItunesService {
    podcastsList: Array<Object>;
    constructor(private jsonp: Jsonp) { }

    // Itunes search URL.
    private itunesUrl: string = 'https://itunes.apple.com/search';

    // Search parameters.
    private searchParams: string = 'media=podcast&attribute=titleTerm&entity=podcast';

    fetchPodcastsList(term: string) {
        let queryUrl: string =  this.itunesUrl + '?' + this.searchParams
                                + '&term=' + term + '&callback=JSONP_CALLBACK';
        return this.jsonp.request(queryUrl);
    }
}
