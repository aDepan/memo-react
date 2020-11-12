import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getScoresTable, getGameMode } from '../../store/selectors.js';

import Score from '../../Components/Score/Score';
import './Scores.css';
import { useCookies } from 'react-cookie';

const Scores = props => {
  const [bestResult, setBestResult] = useState(1000);

  let scoresTable = useSelector(getScoresTable);

  const [cookie, setCookie] = useCookies(['savedScores']);

  const dispatch = useDispatch();

  if (cookie.savedScores) {
    if (cookie.savedScores.length !== scoresTable.length) {
      setCookie('savedScores', scoresTable, { path: '/' });
      if (cookie.savedScores.length > scoresTable.length) {
        dispatch({ type: 'UPDATE_SCORES', savedScores: cookie.savedScores });
      }
    }
  } else {
    setCookie('savedScores', []);
  }

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
        <div className='results'>
          {scoresTable.map((el, idx) => (
            <Score level={el.lvl} steps={el.nbrOfStps} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scores;
