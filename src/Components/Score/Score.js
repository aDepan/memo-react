import React from 'react';

import './Score.css';

const Score = props => {
  return (
    <div className='score'>
      <p>{props.level} </p>
      <p> {props.steps}</p>
    </div>
  );
};

export default Score;
