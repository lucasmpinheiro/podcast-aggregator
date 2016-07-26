import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class FeedReaderService {
    podcastsList: Array<Object>;
    constructor(private http: Http) { }

    getFeedContent(url: string) {
        return this.http.get(url);
    }
}
