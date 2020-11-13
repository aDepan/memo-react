import React from 'react';
import { useSelector } from 'react-redux';

import { getNumberOfSteps } from '../../store/selectors.js';

import './Steps.css';

const Steps = () => {
  let steps = useSelector(getNumberOfSteps);

  let stepsEl = `${steps} \n STEPS`;
  return (
    <div>
      <div className='current-steps'>
        <p>{stepsEl}</p>
      </div>
      <div className='play-again'></div>
    </div>
  );
};

export default Steps;
