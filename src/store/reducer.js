const initialState = {
    level: 'easy',
    numberOfPairs: 0,
    isStarted: false,
    cardSet: [],
    modeForHelper: 'greet',
    numberOfSteps: 0
};

const basicSet = ["red", "yellow", "blue", "pink", "green", "lightblue", "brown", "darkgreen", "purple", "lime"];
const designerSet = ["green0", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9"];

const pickLevel = level => {
    let pairs;
    let colors = 'basic';
    switch (level) {
        case 'easy': 
            pairs = 4;
            break;    
        case 'medium': 
            pairs = 6;
            break;       
        case 'hard': 
            pairs = 10;
            break;
        case 'designer':
            pairs = 10;
            colors = 'design';
            break;
        default: 
            pairs = 4;
    }
    return [pairs, colors];
}

const pickColorset = name => {
    let colorset;
    if (name === 'design') {
        colorset = designerSet;
    } else {
        colorset = basicSet;
    }
    return colorset;
}

function randomColor (colorsetName, numberOfPairs) {
    const newColorsSet = [];
    let cardColor;
    while (newColorsSet.length<numberOfPairs*2) {
        let coef = Math.random() * (numberOfPairs - 1);
        coef = coef.toFixed(0);
        cardColor = colorsetName[coef];
        let amountCard = newColorsSet.filter(clr => clr === cardColor).length;
        if (amountCard < 2) {
            newColorsSet.push(cardColor);
        }
    }

    return newColorsSet;
}



const reducer = (state = initialState, action) => {
    let cardsArray=[];
    switch (action.type) {
        case 'START_GAME': 
            let [pairs, colors] = pickLevel(action.lvl);

            let colorSet = pickColorset(colors);

            const colorsArray = randomColor(colorSet, pairs);

            //console.log(colorsArray);
            let helperMode = action.lvl === 'designer' ? 'designer' : 'start';

            cardsArray = colorsArray.map((el, index) => ({color: el, 
                isOpened: false, 
                isConfirmed: false, 
                id: index}));

            return {
                ...state, 
                level: action.lvl,
                numberOfPairs: pairs,
                isStarted: true,
                cardSet: cardsArray,
                modeForHelper: helperMode,
                numberOfSteps: 0
            };

        case 'TOGGLE_CARD':

            const newArr = state.cardSet.map(el => {
                if (action.indx === el.id) {
                    el.isOpened = true;
                }
                return {...el}
            })
            return {
                ...state,
                cardSet: newArr
            }
            
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
                numberOfSteps: steps
            }
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
                numberOfSteps: steps1
            }
        case 'END_GAME':
            return {
                ...state,
                modeForHelper: 'win'
            }
        default:
            return state;
        }

        
}

export default reducer;