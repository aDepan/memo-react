import React from 'react';
import Button from '../Button/Button.js';

import { useSelector, useDispatch } from 'react-redux';

import { getGameMode, getModeForHelper } from '../../store/selectors.js';

import './PlayAgain.css';

const PlayAgain = props => {
  let gameMode = useSelector(getGameMode);
  let gamePhase = useSelector(getModeForHelper);

  // let width = document.querySelector('.cards').style.width;
  // console.log(width);

  const dispatch = useDispatch();

  let classes = 'cards-cover lvl-' + props.level;

  const buttonEl = (
    <div className={classes}>
      <Button
        clicked={() => dispatch({ type: 'START_GAME', lvl: gameMode })}
        text='Restart'
        btnType='bigBtn-play-again'
      />
    </div>
  );

  return gamePhase === 'win' ? buttonEl : null;
};

export default PlayAgain;
