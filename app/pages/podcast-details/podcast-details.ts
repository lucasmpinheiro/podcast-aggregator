import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/podcast-details/podcast-details.html'
})
export class PodcastDetailsPage {
    podcast: Object;

    constructor(private nav: NavController, navParams: NavParams) {
        // If we navigated to this page, we will have an item
        // available as a nav param.
        this.podcast = navParams.get('item');
    }
}
