import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';


@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    // Itunes search URL.
    private itunesUrl = 'https://itunes.apple.com/search';

    getPodcastsList(term: string) {
        let queryUrl: string =  '${this.itunesUrl}?media=podcast&term=${term}';
        return this.http.get(queryUrl);
    }
}
