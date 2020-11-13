import React from 'react';
import mrMemo from '../../pics/mr-memo.png';
import './helper.css';

import { useSelector } from 'react-redux';

import { getModeForHelper } from '../../store/selectors.js';

const HelperMemoGreet = props => {
  let mode = useSelector(getModeForHelper);

  const moduleClass = 'greet';
  const imgClass = 'memo-greet';
  const textClass = 'memo-greet-text';
  const helperText = "Do you wanna play? Pick a level and click 'Start'!";

  const helperEl = (
    <div className={moduleClass}>
      <img src={mrMemo} alt='hello player' className={imgClass} />
      <p className={textClass}>{helperText}</p>
    </div>
  );

  return mode === 'greet' ? helperEl : null;
};

export default HelperMemoGreet;
