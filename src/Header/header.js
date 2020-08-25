import React from 'react';

import Input from '../Input/input.js';

import './header.css';

import { connect } from 'react-redux';

export const Header = props => {
  let gameMode = props.lvl;

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
        onClick={() => props.onStartButton(gameMode)}
      >
        Start
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lvl: state.level,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartButton: gameMode => dispatch({ type: 'START_GAME', lvl: gameMode }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
