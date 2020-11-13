import React from 'react';

import { useSelector } from 'react-redux';
import './App.css';
import Header from './Containers/Header/header.js';
import HelperMemoGreet from './Containers/Memo-helper/memo-greet.js';
import Cards from './Containers/Cards/Cards.js';

import Footer from './Components/Footer/Footer.js';

import Scores from './Containers/Scores/Scores.js';
import Steps from './Containers/Steps/Steps.js';
import { getGameStarted } from './store/selectors.js';
//import { useCookies } from 'react-cookie';

import Levels from './Containers/Levels-block/Levels.js';

const App = props => {
  const gameStarted = useSelector(getGameStarted);

  return (
    <div className='App'>
      <Header />
      <HelperMemoGreet />
      {gameStarted ? (
        <div className='game-field'>
          <Steps />
          <Cards />
          <Scores />
        </div>
      ) : null}

      {!gameStarted ? <Levels typeOfEl='radioBtn' buttonType='bigBtn' /> : null}

      <Footer />
    </div>
  );
};

export default App;
