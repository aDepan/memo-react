import React from 'react';

import Icons from '../Icons/Icons.js';

const Level = props => {
  //let className = 'one-level';

  /*const setNewClass = () => {
    className += '-active';
  };*/

  return (
    <div
      className={props.classes}
      onChange={props.changed}
      onClick={props.clicked}
    >
      <input type='radio' name='levels' value={props.value} />
    </div>
  );
};

export default Level;
