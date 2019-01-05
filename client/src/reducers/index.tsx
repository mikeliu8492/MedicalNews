import {combineReducers} from 'redux';

import topicReducer from './topicReducer';
import authReducer from './authReducer';

export default combineReducers({
    topics: topicReducer,
    auth: authReducer
});