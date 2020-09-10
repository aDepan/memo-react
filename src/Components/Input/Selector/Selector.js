import React from 'react';

import './Selector.css';

const Selector = ({ changed, gameMode }) => {
  const elementConfig = {
    options: [
      { value: 'easy', displayValue: 'Easy', cards: 4 },
      { value: 'medium', displayValue: 'Medium', cards: 9 },
      { value: 'hard', displayValue: 'Hard', cards: 16 },
      {
        value: 'designer',
        displayValue: 'I am designer',
        cards: 16,
      },
    ],
  };

  /*elementConfig.options.map(el =>
    el.value === gameMode ? (el.selected = true) : (el.selected = false)
  );*/

  return (
    <div className='header-levels-block'>
      <label>Level:</label>
      <select onChange={changed} defaultValue={gameMode}>
        {elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
