import React from 'react';

import Icon from './Icon/Icon.js';
import './Icons.css';

const Icons = props => {
  let className = 'icons-set';

  switch (props.number) {
    case 4:
      className += ' cards-4';
      break;
    case 9:
      className += ' cards-9';
      break;
    case 16:
      className += ' cards-16';
      break;
    default:
  }

  let newEl = [...Array(props.number)].map((el, index) => (
    <Icon key={index} classes={props.number} />
  ));

  return <div className={className}>{newEl}</div>;
};

export default Icons;
