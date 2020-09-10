import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button
      id='selected-levels'
      className={props.btnType}
      onClick={props.clicked}
    >
      Start
    </button>
  );
};

export default Button;
