'use strict';

import {Page, NavController, NavParams, Loading} from 'ionic-angular';
import {FeedReaderService} from '../../services/feed-reader';

let x2js = new (require('x2js'))();
// declare var x2js: any;


@Page({
    templateUrl: 'build/pages/episode-list/episode-list.html',
    providers: [FeedReaderService]
})
export class EpisodeListPage {
    podcast;
    episodes: Array<Object>;

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private feedReader: FeedReaderService
    ) {
        // Create and show a loading overlay.
        let loading = Loading.create({
            content: 'Searching...',
            dismissOnPageChange: true
        });
        this.nav.present(loading);

        // Get podcast info from navbar parameter.
        this.podcast = navParams.get('podcast');

        // Fetch feed data.
        feedReader.getFeedContent(this.podcast.feedUrl)
            .subscribe(res => {
                let json = x2js.xml2js(res.text());
                console.log(json);
                this.episodes = json.rss.channel.item;

                // Dismiss the loading overlay.
                setTimeout(()=>{
                    loading.dismiss();
                }, 1);
            });
    }
}
