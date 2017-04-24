import React from 'react';
import {shallow} from 'enzyme';
import InputWrapper from '../InputWrapper.tsx';

const input = <input />;

const inputWrapperProps = {
    // label for input
    label: 'Input Label',
    // label after input group
    labelPostfix: 'After Input Label',
    // children
    children: input,
    // type of input
    type: 'email',
    // name of input in state
    name: 'example-input',
    // input class name
    className: 'input-class'
};
const {label, labelPostfix, children, type, name, className} = inputWrapperProps;

const inputWrapperWithoutProsthetics = {children, type, className};

const inputWrapperPropsWithLabel = {children, name, className, type, label};

const inputWrapperPropsWithPostfix = {children, name, className, type, labelPostfix};

const inputWrapperPropsWithProsthetics = inputWrapperProps;

describe('<InputWrapper />', () => {
    it('should render a single <input /> component', () => {
        const wrapper = shallow(<InputWrapper {...inputWrapperWithoutProsthetics} />);
        
        expect(wrapper.is('.input-class')).toBe(true);
        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.instance().props.className).toBe(className);
        expect(wrapper.instance().props.type).toBe(type);
    }); // ask Shane for test description

    it('should render a label for the <input /> component', () => {
        const wrapper = shallow(<InputWrapper {...inputWrapperPropsWithLabel} />);

        expect(wrapper.is('.input-class')).toBe(true);
        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.instance().props.className).toBe(className);
        expect(wrapper.instance().props.type).toBe(type);

        expect(wrapper.find('.input-label').type()).toBe('label');
        expect(wrapper.find('.input-label').props().htmlFor).toBe(name);
        expect(wrapper.find('.input-label').text()).toBe(label);
    });

    it('should render a label after the <input /> component', () => {
        const wrapper = shallow(<InputWrapper {...inputWrapperPropsWithPostfix} />);

        expect(wrapper.is('.input-class')).toBe(true);
        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.instance().props.className).toBe(className);
        expect(wrapper.instance().props.type).toBe(type);

        expect(wrapper.find('.input-label-postfix').type()).toBe('div');
        expect(wrapper.find('.input-label-postfix').props().children).toBe(labelPostfix);
    });

    it('should render an <input /> component with a label before and after it', () => {
        const wrapper = shallow(<InputWrapper {...inputWrapperPropsWithProsthetics} />);

        expect(wrapper.is('.input-class')).toBe(true);
        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.instance().props.className).toBe(className);
        expect(wrapper.instance().props.type).toBe(type);

        expect(wrapper.find('.input-label').type()).toBe('label');
        expect(wrapper.find('.input-label').props().htmlFor).toBe(name);
        expect(wrapper.find('.input-label').text()).toBe(label);

        expect(wrapper.find('.input-label-postfix').type()).toBe('div');
        expect(wrapper.find('.input-label-postfix').props().children).toBe(labelPostfix);
    });
});