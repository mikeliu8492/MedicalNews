import { ERROR_SET, ERROR_CLEAR } from '../actions/error/types';

const initialState : any = {}

interface IActionType{
    type: string,
    payload: string []
}

export default (state: any =  initialState, action: IActionType)  => {
    switch(action.type) {
        case ERROR_SET:
            return action.payload
        case ERROR_CLEAR:
            return initialState
        default:
            return state;
    }

};