import React from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../Actions/actions';

const Smurfs = (props) => {
  const fetchSmurfs = e => {
    props.fetchSmurfs();
  }


  return(
    <div className='smurf-container'>
      <h3>The Smurfs</h3>
      {
        props.error === '' ?
        props.smurfs.map(smurf => {
          return(
            <div className='smurf'> 
             <h5>smurf.name</h5>
              <p>smurf.age</p>
              <p>smurf.height</p>
              <p>smurf.id</p>
            </div>
          )
        }) :
        <p>{props.error}</p>
      }
    
    <button onClick={fetchSmurfs}>Retrieve Smurfs</button>
    </div>
  )
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

const mapDispatchToProps = {
  fetchSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps) (Smurfs);