import createReducer from '../shared/createReducer';
import * as types from '../actions/types';

export const searchedPodcasts = createReducer([], {
    [types.SET_SEARCHED_PODCASTS](state, action) {
        return action.podcasts.map(podcast => podcast);
    },
});

export const podcastCount = createReducer(0, {
    [types.SET_SEARCHED_PODCASTS](state, action) {
        return action.podcasts.length;
    },
});