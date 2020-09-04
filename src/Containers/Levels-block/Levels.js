import React from 'react';

import './Levels.css';

import Input from '../../Components/Input/input.js';
import Button from '../../Components/Button/Button.js';

import { useSelector, useDispatch } from 'react-redux';

import { getGameMode } from '../../store/selectors.js';

const Levels = props => {
  let gameMode = useSelector(getGameMode);

  const dispatch = useDispatch();

  const selectLevelHandler = event => {
    if (typeof event === 'string') {
      gameMode = event;
    } else {
      gameMode = event.target.value;
    }
  };

  return (
    <div className={`${props.typeOfEl}-block`}>
      <Input
        changed={event => selectLevelHandler(event)}
        type={props.typeOfEl}
        gameMode={gameMode}
      />
      <Button
        gameMode={gameMode}
        btnType={props.buttonType}
        clicked={() => dispatch({ type: 'START_GAME', lvl: gameMode })}
      />
    </div>
  );
};

export default Levels;
