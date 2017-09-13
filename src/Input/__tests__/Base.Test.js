import React from 'react';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import InputBase from '../Base';

const attributes = {
  defaultValue: "Shane",
  inputChanged: () => ({}),
  setInputBlurred: () => ({})
}

const event = {
  target: {
    value: 'test'
  }
}

describe('<InputBase/>', () => {
  it('should render <input/> component', () => {
    const wrapper = shallow(<InputBase {...attributes}/>);
    expect(wrapper.is('input')).toBe(true);
  });

  it('should call onChange when its value changes', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<InputBase {...attributes} onChange={onChange} />);
    wrapper.simulate('change', event);
    expect(onChange.called).toBe(true);
  });
  
  it('should call onBlur when it loses focus', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<InputBase {...attributes} onBlur={onBlur} />);
    wrapper.simulate('blur', event);
    expect(onBlur.called).toBe(true);
  });
});

