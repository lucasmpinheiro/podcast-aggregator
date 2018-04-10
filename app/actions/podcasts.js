import * as types from './types';
import itunes from '../shared/services/itunes';

export const fetchPodcasts = terms => async dispatch => {
    const list = await itunes.fetchPodcastsList(terms);
    dispatch(setSearchedPodcasts({ podcasts: list }));
};

export const setSearchedPodcasts = ({ podcasts }) => ({
    type: types.SET_SEARCHED_PODCASTS,
    podcasts,
});

export const setCurrentPodcast = ({ podcast }) => ({
    type: types.SET_CURRENT_PODCAST,
    podcast,
});