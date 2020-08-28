import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Helper from './helper';
import Backdrop from '../../Components/Backdrop/Backdrop.js';
import Rules from '../../Components/Rules-window/rules.js';

import { getModeForHelper } from '../../store/selectors.js';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/selectors.js');

describe('<Helper />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should not render <Backdrop /> and <Rules />', () => {
    getModeForHelper.mockReturnValue('greet');

    const wrapper = shallow(<Helper />);

    expect(wrapper.contains(<Backdrop />)).toBe(false);
    expect(wrapper.contains(<Rules />)).toBe(false);
  });

  it('should show correct text', () => {
    getModeForHelper.mockReturnValue('designer');

    const wrapper = shallow(<Helper />);

    expect(wrapper.contains('Find all green cards!')).toEqual(true);
  });
});
