import React from 'react';

import { useSelector } from 'react-redux';
import './App.css';
import Header from './Containers/Header/header.js';
import Cards from './Containers/Cards/Cards.js';
import HelperMemo from './Containers/Memo-helper/helper.js';

import Scores from './Containers/Scores/Scores.js';
import Steps from './Containers/Steps/Steps.js';
import { getGameStarted } from './store/selectors.js';

import Levels from './Containers/Levels-block/Levels.js';

const App = props => {
  const gameStarted = useSelector(getGameStarted);
  //const mode = useSelector(state => state.modeForHelper);
  return (
    <div className='App'>
      <Header />
      {gameStarted ? (
        <div className='game-field'>
          <Steps />
          <Cards />
          <Scores />
        </div>
      ) : null}
      <HelperMemo />
      {!gameStarted ? <Levels typeOfEl='radioBtn' buttonType='bigBtn' /> : null}
    </div>
  );
};

export default App;
