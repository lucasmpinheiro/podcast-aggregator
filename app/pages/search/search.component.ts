// import {PodcastDetailsPage} from '../podcast-details/podcast-details';
import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Color} from 'color';
import {SearchBar} from 'ui/search-bar';
import {ObservableArray} from 'data/observable-array';
import {ItunesService} from '../../shared/itunes/itunes.service';

@Component({
    selector: "search",
    templateUrl: 'pages/search/search.html',
    providers: [ItunesService]
})
export class SearchPage implements AfterViewInit {
    // local: Storage;
    searchTerm: string = '';
    nsSearchBar: SearchBar;
    results: ObservableArray<Object> = new ObservableArray();

    isLoading: boolean = false;

    @ViewChild('searchBar') ngSearchBar: ElementRef;

    constructor(private _itunes: ItunesService) {
        // this.local = new Storage(LocalStorage);
    }

    ngAfterViewInit() {
        this.nsSearchBar = this.ngSearchBar.nativeElement;
        this.nsSearchBar.focus();

        this.nsSearchBar.on(SearchBar.submitEvent, e => {
            this.searchTerm = this.searchTerm.trim();

            // If no term was searched for, do nothing.
            if (this.searchTerm == '') {
                // Clean last results.
                this.results.splice(0);
                return;
            }

            this.isLoading = true;

            this._itunes.fetchPodcastsList(this.searchTerm)
                .then(res => {
                    // Clean last results.
                    this.results.splice(0);

                    // Add each item to the array.
                    res.forEach(item => this.results.push(item));

                    this.isLoading = false;
                })
                .catch(err => console.log(err));
        });

        this.nsSearchBar.on(SearchBar.clearEvent, e => {
            // Clean results.
            this.results.splice(0);
        })

        // this.nsSearchBar.on(SearchBar.clearEvent, (e) => {
        //     console.log('Text cleared.');
        // });
    }

    // itemTapped(event, item) {
    //     this.nav.push(PodcastDetailsPage, {
    //         podcast: item
    //     });
    // }
}
