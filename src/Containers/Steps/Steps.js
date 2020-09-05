import React from 'react';
import { useSelector } from 'react-redux';

import './Steps.css';

import { getNumberOfSteps } from '../../store/selectors.js';

const Steps = () => {
  let steps = useSelector(getNumberOfSteps);

  let stepsEl = `${steps} \n STEPS`;
  return (
    <div className='current-steps'>
      <p>{stepsEl}</p>
    </div>
  );
};

export default Steps;
