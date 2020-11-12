import React from 'react';

import './Levels.css';

import Button from '../../Components/Button/Button.js';

import Selector from '../../Components/Input/Selector/Selector.js';

import IconsSelector from '../../Components/Input/Icons-selector/IconsSelector.js';

import { useSelector, useDispatch } from 'react-redux';

import { getGameMode } from '../../store/selectors.js';

const Levels = props => {
  let gameMode = useSelector(getGameMode);

  const dispatch = useDispatch();

  const selectLevelEventHandler = event => {
    gameMode = event.target.value;
  };

  const selectLevelValueHandler = value => {
    gameMode = value;
  };

  let inputEl;

  if (props.typeOfEl === 'dropdown') {
    inputEl = (
      <Selector
        changed={event => selectLevelEventHandler(event)}
        gameMode={gameMode}
      />
    );
  } else if (props.typeOfEl === 'radioBtn') {
    inputEl = (
      <IconsSelector changed={event => selectLevelValueHandler(event)} />
    );
  }

  return (
    <div className={`${props.typeOfEl}-block`}>
      {inputEl}
      <Button
        gameMode={gameMode}
        btnType={props.buttonType}
        text='Start'
        clicked={() => dispatch({ type: 'START_GAME', lvl: gameMode })}
      />
    </div>
  );
};

export default Levels;
