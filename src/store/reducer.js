import { createColorsArray } from '../util.js';

const initialState = {
  level: 'easy',
  numberOfPairs: 0,
  isStarted: false,
  cardSet: [],
  modeForHelper: 'greet',
  numberOfSteps: 0,
};

const reducer = (state = initialState, action) => {
  let cardsArray = [];
  switch (action.type) {
    case 'START_GAME':
      const [colorsArray, pairs] = createColorsArray(action.lvl);

      let helperMode = action.lvl === 'designer' ? 'designer' : 'start';

      cardsArray = colorsArray.map((el, index) => ({
        color: el,
        isOpened: false,
        isConfirmed: false,
        id: index,
      }));

      return {
        ...state,
        level: action.lvl,
        numberOfPairs: pairs,
        isStarted: true,
        cardSet: cardsArray,
        modeForHelper: helperMode,
        numberOfSteps: 0,
      };

    case 'TOGGLE_CARD':
      const newArr = state.cardSet.map(el => {
        if (action.indx === el.id) {
          el.isOpened = true;
        }
        return { ...el };
      });
      return {
        ...state,
        cardSet: newArr,
      };

    //return assocPath(['cardSet', `${action.indx}`, 'isOpened'], true, state);
    case 'CLOSE_CARDS':
      const cardsToClose = action.openCards;
      const newArrCardsToClose = [...state.cardSet];
      newArrCardsToClose[cardsToClose[0].id].isOpened = false;
      newArrCardsToClose[cardsToClose[1].id].isOpened = false;
      let steps = state.numberOfSteps + 1;
      console.log(steps);
      return {
        ...state,
        cardSet: newArrCardsToClose,
        numberOfSteps: steps,
      };
    case 'CONFIRM_CARDS':
      const cardsToConfirm = action.openCards;
      const newArrCardsToConfirm = [...state.cardSet];
      newArrCardsToConfirm[cardsToConfirm[0].id].isConfirmed = true;
      newArrCardsToConfirm[cardsToConfirm[1].id].isConfirmed = true;
      let steps1 = state.numberOfSteps + 1;
      console.log(steps1);
      return {
        ...state,
        cardSet: newArrCardsToConfirm,
        numberOfSteps: steps1,
      };
    case 'END_GAME':
      return {
        ...state,
        modeForHelper: 'win',
      };
    default:
      return state;
  }
};

export default reducer;
