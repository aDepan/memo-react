import React, { useState } from 'react';

import './input.css';

import Icons from '../Icons/Icons.js';

//import Level from '../Level/Level.js';

const Input = ({ type, gameMode, clicked, changed }) => {
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

  if (type === 'radioBtn') {
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
              <label for={option.value}>
                {option.displayValue}
                <Icons number={option.cards} key={idx} />
              </label>
            </div>
          );
        })}
      </div>
    );
  }

  if (type === 'dropdown') {
    inputElement = (
      <div className='header-levels-block'>
        <label for='levels'>Level:</label>
        <select onChange={changed}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return inputElement;
};

export default Input;
