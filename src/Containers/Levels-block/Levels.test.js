import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Levels from './Levels.js';
import Selector from '../../Components/Input/Selector/Selector.js';
import IconSelector from '../../Components/Input/Icons-selector/IconsSelector.js';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));
jest.mock('../../store/selectors.js');

describe('', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Selector component should be rendered', () => {
    const wrapper = mount(<Levels typeOfEl='dropdown' />);
    expect(wrapper.find(Selector)).toHaveLength(1);
  });

  it('IconSelector component should be rendered on the first page', () => {
    const wrapper = mount(<Levels typeOfEl='radioBtn' />);
    expect(wrapper.find(IconSelector)).toHaveLength(1);
  });
});
