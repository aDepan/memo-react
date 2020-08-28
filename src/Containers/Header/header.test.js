import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';
import Input from '../../Components/Input/input';

import { getGameMode } from '../../store/selectors.js';

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

  it('should render one <Input />', () => {
    getGameMode.mockReturnValue('easy');

    const wrapper = shallow(<Header />);
    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
