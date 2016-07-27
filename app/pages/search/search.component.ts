// import {PodcastDetailsPage} from '../podcast-details/podcast-details';
import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Color} from 'color';
import {SearchBar} from 'ui/search-bar';
import {ItunesService} from '../../shared/itunes/itunes.service';

@Component({
    templateUrl: 'pages/search/search.html',
    providers: [ItunesService]
})
export class SearchPage implements AfterViewInit {
    // local: Storage;
    searchTerm: string = '';
    results: Array<Object> = [];
    isLoading: boolean = false;
    nsSearchBar: SearchBar;

    @ViewChild('searchBar') ngSearchBar: ElementRef;

    constructor(private _itunes: ItunesService) {
        // this.local = new Storage(LocalStorage);
    }

    ngAfterViewInit() {
        this.nsSearchBar = this.ngSearchBar.nativeElement;
        this.nsSearchBar.focus();

        this.nsSearchBar.backgroundColor = new Color('black');
        this.nsSearchBar.textFieldHintColor = new Color('gray');
        this.nsSearchBar.color = new Color('white');

        this.nsSearchBar.on(SearchBar.submitEvent, (e) => {
            this.isLoading = true;

            console.log(this.searchTerm);

            // this._itunes.fetchPodcastsList(this.searchTerm);

            this._itunes.fetchPodcastsList(this.searchTerm).then((res) => {
                this.results = res.toJSON().results;
                console.log(JSON.stringify(this.results[0]));

                this.isLoading = false;
            });


            // this._itunes.fetchPodcastsList(this.searchTerm).subscribe(res => {
            //     // this.results = res.json().results;
            //     console.log(res);
            //
            //     this.isLoading = false;
            //
            //     // this.local.setJson('search=' + term, this.results);
            // });
            // this.nsSearchBar.dismissSoftInput();
        });

        // this.nsSearchBar.on(SearchBar.clearEvent, (e) => {
        //     console.log('Text cleared.');
        // });
    }

    searchPodcasts(term: string) {
        // If no term was searched for, do nothing.
        if (term == '') {
            this.results = [];
            return;
        }

        // this._itunes.fetchPodcastsList(term).subscribe(res => {
        //     // this.results = res.json().results;
        //     console.log(res);
        //
        //     this.isLoading = false;
        //
        //     // this.local.setJson('search=' + term, this.results);
        // });

        // this.local.getJson('search=' + term).then(data => {
        //     // If there's no local data matching the search, fetch from iTunes.
        //     if (!data) {
        //
        //         return;
        //     }
        //     this.results = data;
        //
        //     // Dismiss the loading overlay.
        //     setTimeout(()=>{
        //         loading.dismiss();
        //     }, 1);
        // });

    }

    // itemTapped(event, item) {
    //     this.nav.push(PodcastDetailsPage, {
    //         podcast: item
    //     });
    // }
}
