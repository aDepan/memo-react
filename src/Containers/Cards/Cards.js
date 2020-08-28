import React, { useEffect } from 'react';
import './Cards.css';

import { useSelector, useDispatch } from 'react-redux';

import Card from '../../Components/Card/Card.js';

import { getGameMode, getCardSet } from '../../store/selectors.js';

const Cards = props => {
  //console.log('render cards: ', props.cardSet);
  let lvl = useSelector(getGameMode);
  let cardSet = useSelector(getCardSet);

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
  }, [dispatch, cardSet]);

  //console.log('after: ', props.cardSet);

  let cardsClasses = lvl === 'hard' || lvl === 'designer' ? 'cards-5' : 'cards';

  return (
    <div className={cardsClasses}>
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
  );
};

export default Cards;
