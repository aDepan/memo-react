import React from 'react';

import './input.css';

const input = props => {
    let inputElement = null;

    const elementConfig = {
        options: [
                {value: 'easy', displayValue: 'Easy'},
                {value: 'medium', displayValue: 'Medium'},
                {value: 'hard', displayValue: 'Hard'},
                {value: 'designer', displayValue: 'I am designer'}
            ]
    }

    inputElement = (
        <select onChange={props.changed}>
            {elementConfig.options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.displayValue}
                </option>
            ))}
        </select>
        )



        
    return (
        <div className="level-block">
        <label for="levels">Level:</label>
        {inputElement}  
    </div>
    )

}

export default input;