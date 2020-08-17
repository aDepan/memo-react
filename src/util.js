const basicSet = [
  'red',
  'yellow',
  'blue',
  'pink',
  'green',
  'lightblue',
  'brown',
  'darkgreen',
  'purple',
  'lime',
];
const designerSet = [
  'green0',
  'green1',
  'green2',
  'green3',
  'green4',
  'green5',
  'green6',
  'green7',
  'green8',
  'green9',
];

export const pickLevel = (level) => {
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
};

export const pickColorset = (name) => {
  let colorset;
  if (name === 'design') {
    colorset = designerSet;
  } else {
    colorset = basicSet;
  }
  return colorset;
};

export function randomColor(colorsetName, numberOfPairs) {
  const newColorsSet = [];
  let cardColor;
  while (newColorsSet.length < numberOfPairs * 2) {
    let coef = Math.random() * (numberOfPairs - 1);
    coef = coef.toFixed(0);
    cardColor = colorsetName[coef];
    let amountCard = newColorsSet.filter((clr) => clr === cardColor).length;
    if (amountCard < 2) {
      newColorsSet.push(cardColor);
    }
  }

  return newColorsSet;
}

export function createColorsArray(level) {
  let [pairs, colors] = pickLevel(level);

  let colorSet = pickColorset(colors);

  const colorsArray = randomColor(colorSet, pairs);

  return [colorsArray, pairs];
}
