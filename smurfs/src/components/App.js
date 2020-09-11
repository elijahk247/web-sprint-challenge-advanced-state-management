import React, { Component } from "react";
import "./App.css";

import SmurfsForm from './SmurfsForm';
import Smurfs from './Smurfs';

import { connect } from 'react-redux';

function App() {

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <div className='smurfs-container'>
        <SmurfsForm />
        <Smurfs />
      </div>
    </div>
  );
}

export default App;
