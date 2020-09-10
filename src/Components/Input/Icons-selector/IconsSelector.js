import React, { useState } from 'react';

import './IconsSelector.css';

import Icons from '../../Icons/Icons.js';

const IconsSelector = ({ changed }) => {
  let inputElement = null;

  const [chosenLvl, setChosenLvl] = useState('');

  const elementConfig = {
    options: [
      { value: 'easy', displayValue: 'Easy', cards: 4, checked: false },
      { value: 'medium', displayValue: 'Medium', cards: 9, checked: false },
      { value: 'hard', displayValue: 'Hard', cards: 16, checked: false },
      {
        value: 'designer',
        displayValue: 'I am designer',
        cards: 16,
        checked: false,
      },
    ],
  };

  let className;

  const onClickHandler = value => {
    setChosenLvl(value);
    changed(value);
  };
  inputElement = (
    <div className='start-levels-block'>
      {elementConfig.options.map((option, idx) => {
        option.value === chosenLvl
          ? (className = 'one-level-active')
          : (className = 'one-level');
        return (
          <div
            className={className}
            onClick={() => onClickHandler(option.value)}
            key={idx}
          >
            <label>
              {option.displayValue}
              <Icons number={option.cards} key={idx} />
            </label>
          </div>
        );
      })}
    </div>
  );

  return inputElement;
};

export default IconsSelector;
