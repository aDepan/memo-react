import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { getGameMode, getCardSet } from '../../store/selectors.js';
import Card from '../../Components/Card/Card.js';
import Cards from './Cards.js';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/selectors.js');

describe('<Cards />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should be 0 Card rendered', () => {
    getGameMode.mockReturnValue('easy');
    getCardSet.mockReturnValue([]);

    const wrapper = shallow(<Cards />);
    expect(wrapper.find(Card)).toHaveLength(0);
  });

  it('should be 2 Cards rendered', () => {
    const testCardArray = [
      {
        color: 'red',
        isOpened: false,
        isConfirmed: false,
        id: 1,
      },
      {
        color: 'blue',
        isOpened: false,
        isConfirmed: false,
        id: 2,
      },
    ];
    getGameMode.mockReturnValue('easy');
    getCardSet.mockReturnValue(testCardArray);

    const wrapper = shallow(<Cards />);
    expect(wrapper.find(Card)).toHaveLength(2);
  });
});
