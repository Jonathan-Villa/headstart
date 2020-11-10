import {SET_CURRENT_USER} from './actionTypes'


export const currentUser =(user)=>{ // store the current user
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

