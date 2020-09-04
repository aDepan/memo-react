import React from 'react';

//import { useDispatch } from 'react-redux';
import './Button.css';

const Button = props => {
  return (
    <button
      for='levels'
      id='selected-levels'
      className={props.btnType}
      onClick={props.clicked}
    >
      Start
    </button>
  );
};

export default Button;
