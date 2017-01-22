/* eslint-env jest */

import 'react-native';
import fetch from 'fetch';
import ItunesService from '../../../app/shared/services/itunes';
// import React from 'react';

jest.mock('fetch', () => {
    return jest.fn(url => Promise.resolve({
        json: () => Promise.resolve({ results: url }),
    }));
});

// Itunes search URL.
const itunesUrl = 'https://itunes.apple.com/search';

// Search parameters.
const searchParams = 'media=podcast&attribute=titleTerm&entity=podcast';

describe('ItunesService', () => {
    it('should be an Object', () => {
        expect(ItunesService).toBeDefined();
        expect(ItunesService).toBeInstanceOf(Object);
    });

    describe('#fetchPodcastsList()', () => {
        it('should be a function', () => {
            expect(ItunesService.fetchPodcastsList).toBeDefined();
            expect(ItunesService.fetchPodcastsList).toBeInstanceOf(Function);
        });

        it('should make a request to the iTunes API', () => {
            ItunesService.fetchPodcastsList('test');
            expect(fetch).toHaveBeenCalledWith(`${itunesUrl}?${searchParams}&term=test`);
        });

        it('should process the data and return a Promise that resolves to the results', () => {
            const p = ItunesService.fetchPodcastsList('test');
            expect(p).toBeInstanceOf(Promise);
            return p.then(res => {
                expect(res).toBe(`${itunesUrl}?${searchParams}&term=test`);
            });
        });
    });
});
