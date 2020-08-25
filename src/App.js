import React from 'react';
import './App.css';
import Header from './Containers/Header/header.js';
import Cards from './Containers/Cards/Cards.js';
import HelperMemo from './Containers/Memo-helper/helper.js';

import { connect } from 'react-redux';

const App = props => {
  return (
    <div className='App'>
      <Header />
      {props.gameStarted ? <Cards /> : null}
      <HelperMemo />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gameStarted: state.isStarted,
    mode: state.modeForHelper,
  };
};

export default connect(mapStateToProps)(App);
