import React from 'react';
import './App.css';

import Header from '../src/containers/Header'
import Main from './containers/Main'
import About from './containers/About'
import Skills from './containers/Skills'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
