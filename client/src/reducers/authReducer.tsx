import { LOGIN_DISPATCH, LOGOUT_DISPATCH } from '../actions/auth/types';

const initialState : any = {
    isAuthenticated: false,
    user : {}
}

interface IActionType{
    type: string,
    payload: string []
}

export default (state: any =  initialState, action: IActionType)  => {
    switch(action.type) {
        case LOGIN_DISPATCH:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGOUT_DISPATCH:
            return initialState
        default:
            return state;
    }

};