import React from 'react';

import Input from '../../Components/Input/input.js';

import './header.css';

import { useSelector, useDispatch } from 'react-redux';

import { getGameMode } from '../../store/selectors.js';

export const Header = props => {
  let gameMode = useSelector(getGameMode);

  const dispatch = useDispatch();

  const selectLevelHandler = event => {
    switch (event.target.value) {
      case 'medium':
        gameMode = 'medium';
        break;
      case 'hard':
        gameMode = 'hard';
        break;
      case 'designer':
        gameMode = 'designer';
        break;
      default:
        gameMode = 'easy';
    }
  };
  return (
    <div className='header'>
      <p>MEMO GAME</p>
      <Input changed={event => selectLevelHandler(event)} />
      <button
        for='levels'
        id='selected-levels'
        onClick={() => dispatch({ type: 'START_GAME', lvl: gameMode })}
      >
        Start
      </button>
    </div>
  );
};

export default Header;
