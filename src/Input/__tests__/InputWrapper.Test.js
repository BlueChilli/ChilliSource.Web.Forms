import React from 'react';
import {shallow} from 'enzyme';
import InputWrapper from '../InputWrapper.tsx';

const input = <input />;

const inputWrapperProps = {
  // label for input
  label: 'Input Label',
  // helper text before the label
  labelPrefix: 'Prefix Helper',
  // helper text after the label
  labelPostfix: 'Postfix Helper',
  // children
  children: input,
  // type of input
  type: 'email',
  // name of input in state
  name: 'example-input',
  // input class name
  className: 'input-class'
};
const {label, labelPrefix, labelPostfix, children, type, name, className} = inputWrapperProps;

const inputWrapperWithoutProsthetics = {children, type, className};

const inputWrapperPropsWithLabel = {children, name, className, type, label};

const inputWrapperPropsWithPrefix = {children, name, className, type, label, labelPrefix};

const inputWrapperPropsWithPostfix = {children, name, className, type, label, labelPostfix};

const inputWrapperPropsWithProsthetics = inputWrapperProps;

describe('<InputWrapper />', () => {
  // input
  it('should render a single <input /> component', () => {
    const wrapper = shallow(<InputWrapper {...inputWrapperWithoutProsthetics} />);
    
    expect(wrapper.is('.input-class')).toBe(true);
    expect(wrapper.contains(input)).toBe(true);
    expect(wrapper.instance().props.type).toBe(type);
  });

  // label
  it('should render a label for the <input /> component', () => {
    const wrapper = shallow(<InputWrapper {...inputWrapperPropsWithLabel} />);

    expect(wrapper.find('.input-label').type()).toBe('label');
    expect(wrapper.find('.input-label').props().htmlFor).toBe(name);
    expect(wrapper.find('.input-label').text()).toBe(label);
  });

  // prefix
  it('should render helper text before the label if it exists', () => {
    const wrapper = shallow(<InputWrapper {...inputWrapperPropsWithPrefix} />);

    expect(wrapper.find('.input-label-prefix').type()).toBe('div');
    expect(wrapper.find('.input-label-prefix').props().children).toBe(labelPrefix);
  });

  // postfix
  it('should render helper text after the label if it exists', () => {
    const wrapper = shallow(<InputWrapper {...inputWrapperPropsWithPostfix} />);

    expect(wrapper.find('.input-label-postfix').type()).toBe('div');
    expect(wrapper.find('.input-label-postfix').props().children).toBe(labelPostfix);
  });
});