import {
    FETCH_SMURFS,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE
} from "../actions";

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURFS:
            return{
                ...state,
                isLoading: true
            }

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }

        case ADD_SMURF:
            return { ...state, isLoading: true }

        case ADD_SMURF_SUCCESS:
            return { ...state, smurfs: action.payload, isLoading: false}

        case ADD_SMURF_FAILURE:
            return { ...state,isLoading: false, error: action.payload}

        default:
            return state
    }
}

export default reducer;