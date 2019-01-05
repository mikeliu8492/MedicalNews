import {TOPIC_DISPATCH} from '../actions/topic/types';
import {changeTopics} from '../actions/topic/TopicActions';

const initialState : string [] = []

interface IActionType{
    type: string,
    payload: string []
}

export default (state: string[] =  initialState, action: IActionType)  => {
    switch(action.type) {
        case TOPIC_DISPATCH:
            return [...action.payload]
        default:
            return initialState;
    }

};