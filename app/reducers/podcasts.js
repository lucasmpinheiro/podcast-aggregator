import createReducer from '../shared/createReducer';
import * as types from '../actions/types';

export const searchedPodcasts = createReducer([], {
    [types.SET_SEARCHED_PODCASTS]: (state, action) => action.podcasts.map(podcast => podcast),
});

export const podcastCount = createReducer(0, {
    [types.SET_SEARCHED_PODCASTS]: (state, action) => action.podcasts.length,
});

export const currentPodcast = createReducer({
    collectionName: '',
    trackCount: 0,
}, {
    [types.SET_CURRENT_PODCAST]: (state, action) => action.podcast,
});