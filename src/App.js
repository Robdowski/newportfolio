import React, { useState } from 'react';
import './css/App.css';

import Nav from './components/Nav'
import Main from './components/Main';
import Trilogy from './components/Trilogy';
import Contact from './components/Contact'
import { Route } from 'react-router-dom'

function App() {
  const [modal, setModal] = useState(false)
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="App">
      <Nav  modal={modal} setModal={setModal} />
      <Route exact path="/" render={() => <Main setModal={setModal} modal={modal} setLoaded={setLoaded} loaded={loaded} />} />
      <Route path="/portfolio" render={() => <Trilogy setModal={setModal} modal={modal} />} />
      <Contact modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
