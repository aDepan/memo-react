import React, { useEffect, createRef } from 'react';
import './Cards.css';

import { useSelector, useDispatch } from 'react-redux';

import Card from '../../Components/Card/Card.js';
import HelperMemo from '../Memo-helper/helper.js';

import { getGameMode, getCardSet } from '../../store/selectors.js';
import PlayAgain from '../../Components/PlayAgain/PlayAgain.js';

const Cards = props => {
  //console.log('render cards: ', props.cardSet);
  let lvl = useSelector(getGameMode);
  let cardSet = useSelector(getCardSet);

  let myRef = createRef();

  const dispatch = useDispatch();

  useEffect(() => {
    let openedCards = cardSet.filter(el => el.isOpened && !el.isConfirmed);
    let openedCardsNumbers = openedCards.length;
    if (openedCardsNumbers === 2) {
      //console.log('still opened cards:', openedCards);
      if (openedCards[0].color === openedCards[1].color) {
        dispatch({ type: 'CONFIRM_CARDS', openCards: openedCards });
        let confirmedCards = cardSet.filter(el => el.isConfirmed);
        if (confirmedCards.length === cardSet.length) {
          dispatch({ type: 'END_GAME' });
        }
      } else {
        setTimeout(() => {
          dispatch({ type: 'CLOSE_CARDS', openCards: openedCards });
        }, 800);
      }
    }
    console.log(myRef.current.offsetWidth);
  }, [dispatch, cardSet, myRef]);

  let cardsClasses = lvl === 'hard' || lvl === 'designer' ? 'cards-5' : 'cards';

  return (
    <div className='cards-grid'>
      <PlayAgain level={lvl} />
      <div className={cardsClasses} ref={myRef}>
        {cardSet.map((card, index) => (
          <Card
            key={index}
            isOpened={card.isOpened}
            isConfirmed={card.isConfirmed}
            color={card.color}
            onClick={() => dispatch({ type: 'TOGGLE_CARD', indx: index })}
          />
        ))}
      </div>

      <HelperMemo />
    </div>
  );
};

export default Cards;
