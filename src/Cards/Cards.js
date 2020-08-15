import React, { useEffect } from 'react';
import './Cards.css';

import { connect } from 'react-redux';

import Card from '../Card/Card.js';

const Cards = props => {
    //console.log('render cards: ', props.cardSet);

    useEffect(()=>{
        let openedCards = props.cardSet.filter(el => el.isOpened && !el.isConfirmed);
        let openedCardsNumbers = openedCards.length;
            if (openedCardsNumbers === 2) {
                //console.log('still opened cards:', openedCards);
                if (openedCards[0].color === openedCards[1].color) {
                    props.onConfirmedCards(openedCards);
                    let confirmedCards = props.cardSet.filter(el => el.isConfirmed);
                    if (confirmedCards.length === props.cardSet.length) {
                        props.onEndGame();
                    }
                } else {
                    setTimeout(()=>{  
                        props.onClosingCards(openedCards);
                        }, 800);
                }
            }
        
    }, [props,props.cardSet]);

    //console.log('after: ', props.cardSet);

    let cardsClasses = props.lvl === 'hard' || props.lvl==='designer' ? 'cards-5' : 'cards';

    return (
        <div className={cardsClasses}>
            {props.cardSet.map((card, index) =>(
                <Card key={index} isOpened={card.isOpened} isConfirmed={card.isConfirmed} color={card.color} onClick={()=>props.ontoggleCard(index)}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        //allPairs: state.numberOfPairs,
        cardSet: state.cardSet,
        //steps: state.numberOfSteps
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ontoggleCard: (index) => dispatch({type: 'TOGGLE_CARD', indx: index}),
        onClosingCards: (arrayOfCards) => dispatch({type: 'CLOSE_CARDS', openCards: arrayOfCards}),
        onConfirmedCards: (arrayOfCards) => dispatch({type: 'CONFIRM_CARDS', openCards: arrayOfCards }),
        onEndGame: () => dispatch({type:"END_GAME"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

//useDispatch, useSelector