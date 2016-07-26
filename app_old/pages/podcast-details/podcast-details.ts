import {Page, NavController, NavParams} from 'ionic-angular';
import {EpisodeListPage} from '../episode-list/episode-list';


@Page({
    templateUrl: 'build/pages/podcast-details/podcast-details.html'
})
export class PodcastDetailsPage {
    podcast: Object;

    constructor(private nav: NavController, navParams: NavParams) {
        // Get podcast info from navbar parameter.
        this.podcast = navParams.get('podcast');
    }

    goToEpisodeList(): void {
        this.nav.push(EpisodeListPage, {
            podcast: this.podcast
        });
    }
}
