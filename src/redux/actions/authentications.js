import axios from 'axios'
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
        console.log(res)
    })
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}