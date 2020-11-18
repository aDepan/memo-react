import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Scores from './Scores.js';
import Score from '../../Components/Score/Score.js';

import { getScoresTable, getGameMode } from '../../store/selectors.js';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/selectors.js');

describe('<Scores />', () => {
  beforeEach(() => {
    getScoresTable.mockReturnValue([
      { lvl: 'easy', nbrOfStps: 4 },
      { lvl: 'hard', nbrOfStps: 10 },
    ]);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('best result was chosen correctly', () => {
    getGameMode.mockReturnValue('easy');

    const wrapper = shallow(<Scores />);

    expect(wrapper.find('.best-result p').text()).toEqual(
      'BEST RESULT \n for easy level \n 4'
    );
  });

  it('first game for the level has no best results', () => {
    getGameMode.mockReturnValue('medium');

    const wrapper = shallow(<Scores />);

    expect(wrapper.find('.best-result p').text()).toEqual(
      'BEST RESULT \n for medium level \n --'
    );
  });

  it('all scores in a table', () => {
    getGameMode.mockReturnValue('easy');

    const wrapper = shallow(<Scores />);

    expect(wrapper.find(Score)).toHaveLength(2);
  });
});
