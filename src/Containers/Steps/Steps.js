import React from 'react';
import { useSelector } from 'react-redux';

import './Steps.css';

import { getNumberOfSteps } from '../../store/selectors.js';

const Steps = () => {
  let steps = useSelector(getNumberOfSteps);
  return (
    <div className='current-steps'>
      <p className='steps'>{steps} </p>
      <p> STEPS</p>
    </div>
  );
};

export default Steps;
