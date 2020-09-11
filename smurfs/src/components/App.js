import React, { useEffect } from "react";
import "./App.css";

import SmurfsForm from './SmurfsForm'';'

import { connect } from 'react-redux';

function App() {

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}

export default App;
