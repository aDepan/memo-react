import React from 'react';

import './header.css';

import { useSelector } from 'react-redux';

import { getGameStarted } from '../../store/selectors.js';

import Levels from '../Levels-block/Levels.js';

export const Header = props => {
  let isGameStarted = useSelector(getGameStarted);

  return (
    <div className='header'>
      <p>MEMO GAME</p>
      {isGameStarted ? (
        <Levels typeOfEl='dropdown' buttonType='normalBtn' />
      ) : null}
    </div>
  );
};

export default Header;
