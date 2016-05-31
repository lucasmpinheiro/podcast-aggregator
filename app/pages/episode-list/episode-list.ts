import {Page, NavController, NavParams, Loading} from 'ionic-angular';
import {FeedReaderService} from '../../services/feed-reader';


@Page({
    templateUrl: 'build/pages/episode-list/episode-list.html',
    providers: [FeedReaderService]
})
export class EpisodeListPage {
    podcast;
    episodes;

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
                console.log(res.text());

                let xmlDoc: Document = (new DOMParser())
                                .parseFromString(res.text(), 'text/xml');

                let value = xmlDoc.getElementsByTagName('channel')[0].childNodes[0].nodeValue;
                console.log(value);

                // Dismiss the loading overlay.
                setTimeout(()=>{
                    loading.dismiss();
                }, 1);
            });
    }
}
