import React from 'react';

import './Icon.css';

const icon = props => {
  let className = 'grey-square card' + props.classes;

  return <div className={className}></div>;
};

export default icon;
