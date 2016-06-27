/** Podcast episode model. */
export class EpisodeModel {
    title: string;
    downloadUrl: string;
    artworkUrl: string;

    constructor(title: string, downloadUrl: string) {
        this.title = title;
        this.downloadUrl = downloadUrl;
    }

    /* title getter and setter */
    setTitle(title: string) {
        this.title = title;
    }
    getTitle(): string {
        return this.title;
    }
    /* downloadUrl getter and setter */
    setDownloadUrl(downloadUrl: string) {
        this.downloadUrl = downloadUrl;
    }
    getDownloadUrl(): string {
        return this.downloadUrl;
    }
    /* artworkUrl60 getter and setter */
    setArtworkUrl(artworkUrl: string) {
        this.artworkUrl = artworkUrl;
    }
    getArtworkUrl(): string {
        return this.artworkUrl;
    }
}
