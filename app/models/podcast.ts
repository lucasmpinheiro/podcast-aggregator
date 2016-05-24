export class PodcastModel {
    title: string;
    feedUrl: string;
    artworkUrl60: string;
    artworkUrl100: string;
    description: string;

    constructor(title: string, feedUrl: string) {
        this.title = title;
        this.feedUrl = feedUrl;
    }

    /* title getter and setter */
    setTitle(title: string) {
        this.title = title;
    }
    getTitle(): string {
        return this.title;
    }
    /* feedUrl getter and setter */
    setFeedUrl(feedUrl: string) {
        this.feedUrl = feedUrl;
    }
    getFeedUrl(): string {
        return this.feedUrl;
    }
    /* artworkUrl60 getter and setter */
    setArtworkUrl60(artworkUrl60: string) {
        this.artworkUrl60 = artworkUrl60;
    }
    getArtworkUrl60(): string {
        return this.artworkUrl60;
    }
    /* artworkUrl100 getter and setter */
    setArtworkUrl100(artworkUrl100: string) {
        this.artworkUrl100 = artworkUrl100;
    }
    getArtworkUrl100(): string {
        return this.artworkUrl100;
    }
    /* description getter and setter */
    setDescription(description: string) {
        this.description = description;
    }
    getDescription(): string {
        return this.description;
    }
}
