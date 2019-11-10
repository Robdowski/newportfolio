import React from 'react';
import './css/App.css';

import Nav from './components/Nav'
import Main from './components/Main';
import Trilogy from './components/Trilogy';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Trilogy />
    </div>
  );
}

export default App;
