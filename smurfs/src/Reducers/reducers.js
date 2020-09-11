import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR } from '../Actions/actions';
import { ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_ERROR } from '../Actions/actions';

const initalState = {
  smurfs: [],
  error: '',
  isLoading: false,
}

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURF:
      return{
        ...state,
        isLoading: true,
      };
    case FETCH_SMURF_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case FETCH_SMURF_ERROR:
      return{
        ...state,
        error: action.payload,
        isLoading: false,
      }

    default:
      return state;
  }
}