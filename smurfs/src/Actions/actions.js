import axios from 'axios'


export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';

export const fetchSmurfs = () => dispatch =>  {
  console.log('Fetching smurfs from API')

  dispatch({type: FETCH_SMURFS});
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log('Error: ', err)
      dispatch({type: FETCH_SMURFS_ERROR, payload: err.data})
    })
};

export const postSmurf = (smurfInfo) => dispatch => {
  console.log('Posting Smurf from form')

  dispatch({type: ADD_SMURF});
  axios.post('http://localhost:3333/smurfs', smurfInfo)
    .then(res => {
      console.log(res.data);
      dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log('Error: ', err.data);
      dispatch({type: ADD_SMURF_ERROR, payload: err.data})
    })
}