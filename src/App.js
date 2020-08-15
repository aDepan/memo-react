import React from 'react';
import './App.css';
import Header from './Header/header.js';
import Cards from './Cards/Cards.js';
import HelperMemo from './Memo-helper/helper.js';


import {connect} from 'react-redux';


const App = props => {
  console.log('render', props.gameStarted);

  return (
    <div className="App">
      <Header /> 
      {props.gameStarted ? <Cards /> : null}
      <HelperMemo/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameStarted: state.isStarted,
    mode: state.modeForHelper
  }
}

export default connect(mapStateToProps)(App);
