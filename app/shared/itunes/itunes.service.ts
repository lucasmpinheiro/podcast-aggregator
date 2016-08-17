import {Injectable} from '@angular/core';
import * as http from 'http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItunesService {
    constructor() { }

    // Itunes search URL.
    private itunesUrl: string = 'https://itunes.apple.com/search';

    // Search parameters.
    private searchParams: string = 'media=podcast&attribute=titleTerm&entity=podcast';

    // Fetch podcasts.
    fetchPodcastsList(term: string): Promise<any> {
        let queryUrl: string
            = `${this.itunesUrl}?${this.searchParams}&term=${term}`;

        return http.request({
            url: queryUrl,
            method: 'GET'
        }).then(res => res.content.toJSON().results);
    }
}
