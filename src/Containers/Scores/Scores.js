import React from 'react';

import { useSelector } from 'react-redux';

import { getScoresTable } from '../../store/selectors.js';

import Score from '../../Components/Score/Score';
import './Scores.css';

const Scores = props => {
  let scoresTable = useSelector(getScoresTable);

  return (
    <div className='scores-table'>
      <p>SCORES TABLE:</p>
      {scoresTable.map((el, idx) => (
        <Score level={el.lvl} steps={el.nbrOfStps} key={idx} />
      ))}
    </div>
  );
};

export default Scores;
