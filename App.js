import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
      <Greet name="sumi">
        <p>This is a children props</p>
      </Greet>
      <Greet name="sushmi">
        <button>Click props</button>
      </Greet>
      <Welcome name="sumi"/>
      <Welcome  name="sushmi"/>
      <Hello/>

    </div>
  );
}

export default App;
