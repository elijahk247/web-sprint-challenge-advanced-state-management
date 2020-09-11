import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR } from '../Actions/actions';
import { ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_ERROR } from '../Actions/actions';

const initialState = {
  smurfs: [],
  error: '',
  isLoading: false,
}

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS:
      return{
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case FETCH_SMURFS_ERROR:
      return{
        ...state,
        error: action.payload,
        isLoading: false,
      }

    default:
      return state;
  }
}