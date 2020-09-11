import React, { useState } from 'react';

import { connect } from 'react-redux';
import { postSmurf } from '../Actions/actions';

import { uuid } from 'uuidv4';

const SmurfsForm = (props) => {
  const [smurfInfo, setSmurfInfo] = useState({
    name: '',
    age: '',
    height: ''
  });

  const handleChange = e => {
    e.preventDefault();
    
    const {name, value} = e.target;
    setSmurfInfo({
      ...smurfInfo, 
      [name]: value
    })
  }

  const handleSubmit = e => {
    const newSmurf = {
      ...smurfInfo,
      id: uuid()
    }

    props.postSmurf(newSmurf);
  }

  return(
    <div className='smurf-form-container'>
      <form>
        <input 
          name='name'
          type='text'
          onChange={handleChange}
        />
        <input 
          name='age'
          type='text'
          onChange={handleChange}
        />
        <input 
          name='height'
          type='text'
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add Smurf</button>
      </form>
    </div>
  )
}

export default connect(null, {postSmurf}) (SmurfsForm);