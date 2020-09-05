import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { getScoresTable, getGameMode } from '../../store/selectors.js';

import Score from '../../Components/Score/Score';
import './Scores.css';

const Scores = props => {
  const [bestResult, setBestResult] = useState(1000);

  let scoresTable = useSelector(getScoresTable);
  let gameMode = useSelector(getGameMode);

  const doneGames = scoresTable.filter(el => el.lvl === gameMode);

  let minVal = doneGames.reduce(
    (acc, currVal) => (currVal.nbrOfStps < acc ? currVal.nbrOfStps : acc),
    Number.MAX_VALUE
  );
  let textEl;

  if (minVal === Number.MAX_VALUE) {
    textEl = '\n --';
  } else {
    if (bestResult !== minVal) {
      setBestResult(minVal);
    }
    textEl = `\n ${bestResult}`;
  }

  let levelTextEl = `\n for ${gameMode} level`;

  return (
    <div>
      <div className='best-result'>
        <p>
          BEST RESULT {levelTextEl} {textEl}
        </p>
      </div>
      <div className='scores-table'>
        <p>SCORES TABLE:</p>
        {scoresTable.map((el, idx) => (
          <Score level={el.lvl} steps={el.nbrOfStps} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Scores;
