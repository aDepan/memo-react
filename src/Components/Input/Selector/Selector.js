import React from 'react';

import './Selector.css';

const Selector = ({ changed, gameMode }) => {
  const elementConfig = {
    options: [
      { value: 'easy', displayValue: 'Easy', cards: 4, selected: false },
      { value: 'medium', displayValue: 'Medium', cards: 9, selected: false },
      { value: 'hard', displayValue: 'Hard', cards: 16, selected: false },
      {
        value: 'designer',
        displayValue: 'I am designer',
        cards: 16,
        selected: false,
      },
    ],
  };

  elementConfig.options.map(el =>
    el.value === gameMode ? (el.selected = true) : (el.selected = false)
  );

  return (
    <div className='header-levels-block'>
      <label for='levels'>Level:</label>
      <select onChange={changed}>
        {elementConfig.options.map(option => (
          <option
            key={option.value}
            value={option.value}
            selected={option.selected}
          >
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
