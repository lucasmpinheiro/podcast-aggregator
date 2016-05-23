import {Injectable} from 'angular2/core';
import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';


@Injectable()
export class ItunesService {
    podcastsList: Array<Object>;
    constructor(private jsonp: Jsonp) { }

    // Itunes search URL.
    private itunesUrl = 'https://itunes.apple.com/search';

    fetchPodcastsList(term: string) {
        let queryUrl: string =  this.itunesUrl + '?media=podcast&term=' + term + '&callback=JSONP_CALLBACK';
        return this.jsonp.request(queryUrl);
    }
}
