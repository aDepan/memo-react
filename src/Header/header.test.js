import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Header } from './header';
import Input from '../Input/input';

jest.mock('../Input/input', () => 'Input');

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render one <Input />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
