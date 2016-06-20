import {Injectable} from 'angular2/core';
import {File, Transfer} from 'ionic-native';
import {Platform} from 'ionic-angular';

@Injectable()
export class TransferService {
    private fileTransfer: Transfer;

    constructor(private platform: Platform) {
        this.fileTransfer = new Transfer();
    }

    /**
     * Downloads a podcast episode to the correct folder.
     * @param  {string} url URL from which to download.
     */
    downloadPodcastEpi(url: string) {
        this.platform.ready().then(() => {
            let filename: string = 'testFile.mp3';
            let targetPath: string =
                `${cordova.file.externalDataDirectory}podcasts/${filename}`;
            this.fileTransfer.onProgress(event => {
                console.log(100.0 * event.loaded / event.total);
            });
            this.fileTransfer.download(url, targetPath).then(file => {
                console.log(file.toURL());
            }).catch(err => {
                console.error(err);
            });
        });
    }
}
