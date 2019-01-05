import {TOPIC_DISPATCH} from './types';

export const changeTopics = (topicList :string []) => {
    return {
        type: TOPIC_DISPATCH,
        payload: topicList
    }
}