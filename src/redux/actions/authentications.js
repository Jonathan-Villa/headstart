import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from './setAuthToken'
import {currentUser} from './actions'
import {GET_ERRORS} from './actionTypes'

export const registerNewUser = (user, history) => dispatch => {
    axios.post("http://localhost:4000/api/signup", user)
    .then(res => history.push('/login'))
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const loginUser = (user) => dispatch => {
    axios.post("http://localhost:4000/api/login", user)
    .then(res =>{
        const {token} = res.data;
        localStorage.setItem("jwt-token",token);
        setAuthToken(token);
        const decodeToken = jwtDecode(token)
        dispatch(currentUser(decodeToken))
    })
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}