import * as React from 'react';
import {shallow} from 'enzyme';

import InputBase from "../Base.tsx"

describe('<InputBase/>', () => {
  it('should render <input/> component', () => {
    const wrapper = shallow(<InputBase getHTMLAttributes={() => ({})}/>);
    expect(wrapper.find('input'));
  })
});

