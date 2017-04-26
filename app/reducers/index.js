import { combineReducers } from 'redux';
import * as podcastReducers from './podcasts';

export default combineReducers(Object.assign(
    {},
    podcastReducers,
));