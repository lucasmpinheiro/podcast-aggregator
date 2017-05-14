import * as types from './types';
import itunes from '../shared/services/itunes';

export function fetchPodcasts(terms) {
    return async (dispatch) => {
        const list = await itunes.fetchPodcastsList(terms);
        dispatch(setSearchedPodcasts({ podcasts: list }));
    };
}

export function setSearchedPodcasts({ podcasts }) {
    return {
        type: types.SET_SEARCHED_PODCASTS,
        podcasts,
    };
}