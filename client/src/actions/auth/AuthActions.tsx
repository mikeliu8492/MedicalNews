import {LOGIN_DISPATCH, LOGOUT_DISPATCH} from './types';
import {ERROR_SET} from '../error/types';
import {setErrors} from '../error/ErrorActions';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const loginDispatch = (email: string, password: string, history: any) => (dispatch: any) => {
    axios.post("/api/user/login", {email: email, password: password})
    .then(result => {
        const user: any = result.data;
        localStorage.setItem("token", user.token);
        history.push("/subscription");
        dispatch({
            type: LOGIN_DISPATCH,
            payload: {
                firstName: user.userData.firstName,
                lastName: user.userData.lastName,
                email: user.userData.email,
                id: user.userData.id
            }
        })
    })
    .catch(err => {
        const errorList = err.response.data.errors;
        dispatch(setErrors(errorList));
    })
}
export const setUser = (decoded: any) =>{
    console.log("IN FUNCTION");
    console.log(decoded);
    return {
        type: LOGIN_DISPATCH,
        payload: {
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
            id: decoded.id
        }
    };
}


export const logoutDispatch = () => (dispatch: any) => {
    localStorage.clear();
    dispatch ({
        type: LOGOUT_DISPATCH,
        payload: {}
    })
}