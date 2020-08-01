import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS})
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response})
        })
}

export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF })
    axios
        .post('http://localhost:3333/smurfs', newSmurf )
        .then(res => {
            console.log("post", res)
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_SMURF_FAILURE, payload: err})
        })
}