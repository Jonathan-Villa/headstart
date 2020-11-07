import { SET_CURRENT_USER } from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
    user: {}
}

const currentUser = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                payload: action.payload
            }
        default:
            return state;
    }
} 