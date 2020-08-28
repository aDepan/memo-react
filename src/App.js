import React from 'react';

import { useSelector } from 'react-redux';
import './App.css';
import Header from './Containers/Header/header.js';
import Cards from './Containers/Cards/Cards.js';
import HelperMemo from './Containers/Memo-helper/helper.js';

//import { connect } from 'react-redux';

const App = props => {
  const gameStarted = useSelector(state => state.isStarted);
  //const mode = useSelector(state => state.modeForHelper);
  return (
    <div className='App'>
      <Header />
      {gameStarted ? <Cards /> : null}
      <HelperMemo />
    </div>
  );
};

export default App;
