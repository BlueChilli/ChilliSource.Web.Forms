import React from 'react';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import InputBase from '../Base.tsx';

const attributes = {
  getHTMLAttributes: () => ({}),
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
  it('should call onChange', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<InputBase {...attributes} onChange={onChange}/>);
    wrapper.simulate('change', event);
    expect(onChange.called).toBe(true);
  });
  it('should call onBlur', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<InputBase {...attributes} onBlur={onBlur}/>);
    wrapper.simulate('blur', event);
    expect(onBlur.called).toBe(true);
  });
});

