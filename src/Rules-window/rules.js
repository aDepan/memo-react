import React from 'react';

import './rules.css';

const rules = props => {
    console.log('clicked rules', props.show)
    const rulesText = "Turn over any two cards. \n If they match, they will stay opened. \n If they don't they will turn back over,\n but you can try to memorize their positions. \n Find all pairs using as less steps as you can."
    return (
         props.show ? <div className="rules-window">
            <p>{rulesText}</p>
            <button onClick={props.clicked}>Ok</button>
        </div> : null
    )
}

export default rules;