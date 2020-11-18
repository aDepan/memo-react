import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';
import Levels from '../../Containers/Levels-block/Levels.js';

import { getGameStarted } from '../../store/selectors.js';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/selectors.js');

describe('<Header />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('show dropdown if game started', () => {
    getGameStarted.mockReturnValue(true);

    const wrapper = shallow(<Header />);
    expect(wrapper.find(Levels)).toHaveLength(1);
  });

  it('do not show dropdown if game not started', () => {
    getGameStarted.mockReturnValue(false);

    const wrapper = shallow(<Header />);
    expect(wrapper.find(Levels)).toHaveLength(0);
  });
});
