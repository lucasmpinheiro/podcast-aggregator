import {Injectable} from '@angular/core';
import * as http from 'http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ItunesService {
    podcastsList: Array<Object>;

    constructor() { }

    // Itunes search URL.
    private itunesUrl: string = 'https://itunes.apple.com/search';

    // Search parameters.
    private searchParams: string = 'media=podcast&attribute=titleTerm&entity=podcast';

    fetchPodcastsList(term: string) {
        console.log('estou aqui');
        let queryUrl: string =  this.itunesUrl + '?' + this.searchParams
                                + '&term=' + term;

        return http.request({
            url: queryUrl,
            method: 'GET'
        }).then((res) => {
            return res.content;
        }, (err) => {
            console.error(err);
        });
        // return .get(queryUrl)
        //     .map(res => res.json())
        //     .map(data => {
        //         console.log(JSON.stringify(data.json()));
        //         return JSON.stringify(data.json());
        //     });
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
