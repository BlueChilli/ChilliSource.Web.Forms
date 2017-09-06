import React from 'react';
import PropTypes from "prop-types";
import sinon from 'sinon';
import {Map} from 'immutable';
import {shallow, mount} from 'enzyme';
import Form from '../../Form/Form';
import Number from '../Number';
import {isEqual} from 'lodash';

const defaultNumberProps = {
    pattern: '[0-9]+.?[0-9]*',
    type: 'number',
};

const numberProps = {
    pattern: '^[9][0-9]?$|^999$',
    type: 'number',
    name: 'numberInput',
    label: 'Number Input',
    labelPrefix: 'Number Input Prefix',
    labelPostfix: 'Number Input Postfix',
    defaultValue: 100
};

describe('<Number />', () => {
    it('should use default props when not given any props', () => {
        const wrapper = shallow(<Number />);
        expect(isEqual(defaultNumberProps, wrapper.props())).toBe(true);
    });

    it('should use custom props when provided', () => {
        const wrapper = shallow(<Number {...numberProps} />);
        expect(isEqual(numberProps, wrapper.props())).toBe(true);
    });
});

describe('<Number /> mount', () => {
    const mountOptions = {
        context: {
            nameSpace: "Input",
            FormState: Map(),
            dispatch: () => {}
        },
        childContextTypes: {
            nameSpace: PropTypes.string,
            FormState: PropTypes.object,
            dispatch: PropTypes.func,
        }
    }

    const onChangeCallback = sinon.spy();
    const onBlurCallback = sinon.spy();

    const wrapper = mount(<Number {...numberProps} onChange={onChangeCallback} onBlur={onBlurCallback} />, mountOptions);
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    it('should render a label', () => {
        expect(label.exists()).toBe(true);
    });

    it('should set the label', () => {
        expect(label.text()).toBe(numberProps.label);
    });

    it('should render an input', () => {
        expect(input.exists()).toBe(true);
    });

    it('should set the labelPostfix', () => {
        const labelPostfix = wrapper.find(".input-label-postfix");
        expect(labelPostfix.exists() && labelPostfix.text() === numberProps.labelPostfix).toBe(true);
    });

    it('should set the labelPrefix', () => {
        const labelPrefix = wrapper.find(".input-label-prefix");
        expect(labelPrefix.exists() && labelPrefix.text() === numberProps.labelPrefix).toBe(true);
    });

    it('should set labelFor and name to be the same', () => {
        expect(label.prop("htmlFor") === input.prop("name")).toBe(true);
    });

    it('should set the correct defaultValue', () => {
        expect(input.prop('value') === numberProps.defaultValue).toBe(true);
    });

    it('should set the correct type', () => {
        expect(input.prop('type') === 'number').toBe(true);
    });

    it('should call onChange when value changes', () => {
        const event = {target: {value: 1000}}
        const changedEvent = {target: {value: 10000}}
        input.simulate('change', event)
        expect(onChangeCallback.calledOnce).toBe(true);
        input.simulate('change', changedEvent)
        expect(onChangeCallback.calledTwice).toBe(true);
    });

    it('should call onBlur when blurred', () => {
        input.simulate('blur')
        expect(onBlurCallback.calledOnce).toBe(true);
        input.simulate('blur')
        expect(onBlurCallback.calledTwice).toBe(true);
    });
});