import React from 'react';
import {shallow} from 'enzyme';

import InputBase from '../Base';

console.log(InputBase);



describe('<InputBase/>', () => {
  it('should render <input/> component', () => {
    const wrapper = shallow(<InputBase getHTMLAttributes={() => ({})}/>);
    console.log(wrapper.text());
    expect(wrapper.find('input')).to.have.length(1);
  })
});

