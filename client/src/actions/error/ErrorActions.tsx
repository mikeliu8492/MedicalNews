import {ERROR_SET, ERROR_CLEAR} from './types';
import axios from 'axios';


export const setErrors = (errorList: any) => {
    console.log("set errors in action");
    console.log(errorList);
    return {
        type: ERROR_SET,
        payload: errorList
    }
}

export const clearErrors = () => {
    return {
        type: ERROR_CLEAR,
        payload: {}
    }
}