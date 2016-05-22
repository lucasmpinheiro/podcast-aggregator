import {Injectable} from 'angular2/core';
import {JSONP_PROVIDERS, Jsonp, Response} from 'angular2/http';


@Injectable()
export class ItunesService {
    constructor(private jsonp: Jsonp) { }

    // Itunes search URL.
    private itunesUrl = 'https://itunes.apple.com/search';

    getPodcastsList(term: string) {
        let queryUrl: string =  this.itunesUrl + '?media=podcast&term=' + term;
        return this.jsonp.request(queryUrl);
    }
}
