import React, { useState } from 'react';
import './css/App.css';

import Nav from './components/Nav'
import Main from './components/Main';
import Trilogy from './components/Trilogy';
import Contact from './components/Contact'

function App() {
  const [modal, setModal] = useState(false)
  return (
    <div className="App">
      <Nav  modal={modal} setModal={setModal} />
      <Main  modal= {modal} setModal={setModal} />
      <Trilogy modal={modal} setModal={setModal} />
      <Contact modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
