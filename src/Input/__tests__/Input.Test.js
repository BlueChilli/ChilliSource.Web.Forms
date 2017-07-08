import React from 'react';
import PropTypes from "prop-types";
import {shallow, mount} from 'enzyme';
import {isEqual} from 'lodash';
import Input, {Input as ShallowInput} from '../Input';
import {Map} from "immutable";

// Defining all the properties
const allInputProps = {
    autoFocus: false,
    min: 9,
    max: 999,
    minLength: 4,
    maxLength: 10,
    pattern: '^[9][0-9]?$|^999$',
    labelPrefix: 'LabelPrefix',
    labelPostfix: 'LabelPostfix',
    label: 'InputLabel',
    type: 'email',
    prepend: '$',
    append: '%',
    name: 'SampleInput',
    className: 'SampleInputClass',
    id: 'InputId',
    onChange: () => {},
    onBlur: () => {}
};

// Destructing the props so as to check them individually
const {autoFocus, min, max, minLength, maxLength, pattern,
       labelPrefix, labelPostfix, label, type, prepend,
       append, name, className, id, onChange, onBlur} = allInputProps;

const inputWrapperProps = {
    className: 'SampleInputClass input',
    type,
    name,
    labelPostfix,
    labelPrefix,
    label
};

const inputGroupProps = {
    prepend,
    append
};

const inputBaseProps = {
    autoFocus,
    onChange,
    onBlur,
    id,
    minLength,
    maxLength,
    min,
    max,
    type,
    name,
    pattern
};

const displayValidationProps = {
    minLength,
    maxLength,
    min,
    max,
    type,
    name,
    pattern
};

const removeChildrenProp = props => {
    const {children, ...propsWithoutChildren} = props;
    return propsWithoutChildren;
}

describe('shallow(<Input />)', () => {
    const wrapper = shallow(<ShallowInput {...allInputProps} />);
    
    const InputWrapperProps = removeChildrenProp(wrapper.find('InputWrapper').props());
    const InputGroupProps = removeChildrenProp(wrapper.find('InputGroup').props());
    const InputBaseProps = removeChildrenProp(wrapper.find('InputBase').props());
    const DisplayValidationProps = removeChildrenProp(wrapper.find('DisplayValidation').props());
    
    // InputWrapper
    it('should only have the required props for <InputWrapper />', () => {
        expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
    });

    // InputGroup
    it('should only have the required props for <InputGroup />', () => {
        expect(isEqual(InputGroupProps, inputGroupProps)).toBe(true);
    });

    // InputBase
    it('should only have the required props for <InputBase />', () => {
        expect(isEqual(InputBaseProps, inputBaseProps)).toBe(true);
    });

    // DisplayValidation
    it('should only have the required props for <DisplayValidation />', () => {
        expect(isEqual(DisplayValidationProps, displayValidationProps)).toBe(true);
    });
});


describe("mount(Input)", () => {

    const mountOptions = {
        context:{
            namespace: "Input",
            FormState: Map(),
            dispatch: () => {}
        },
        childContextTypes: {
            namespace: PropTypes.string,
            FormState: PropTypes.object,
            dispatch: PropTypes.func,
        }
    }

    const defaultValue = "Input";
    const updatedDefaultValue = "Changed Input";
    const wrapper = mount(<Input {...allInputProps} defaultValue={defaultValue} />, mountOptions)

    const label = wrapper.find('label');
    const input = wrapper.find("input")

    it('should set the className', () => {
        expect(wrapper.find('.SampleInputClass').exists()).toBe(true);
    });

    it('should set the label', () => {
        expect(label.prop('children') === "InputLabel").toBe(true);
    });

    it('should set the labelPrefix', () => {
        expect(wrapper.find(".input-label-prefix").prop('children') === "LabelPrefix").toBe(true);
    });

    it('should set the labelPostfix', () => {
        expect(wrapper.find(".input-label-postfix").prop('children') === "LabelPostfix").toBe(true);
    });

    it('should set labelFor and name to be the same', () => {
        expect(label.prop("htmlFor") === input.prop("name")).toBe(true);
    });

    it('should set the correct defaultValue', () => {
        expect(input.prop('value') === defaultValue).toBe(true);
    });

    const value = "Strong";
    const updatedValue = "Stronger";
    const valueWrapper = mount(<Input value="Strong" {...allInputProps} defaultValue={defaultValue} />, mountOptions);
    
    it("should set the value rather then defaultValue", () => {
        expect(valueWrapper.find('input').prop('value') === value).toBe(true);
    });

    

});

// This should be in performance wrapper
// it('should update the defaultValue', () => {
//     expect(wrapper.find('input').prop('value') === defaultValue).toBe(true);
//     wrapper.setProps({defaultValue: updatedDefaultValue});
//     expect(wrapper.find('input').prop('value') === updatedDefaultValue).toBe(true);
// });

// it("should update value when changed", () => {
//     expect(valueWrapper.setProps({value: updatedValue}).find('input').prop('value') === updatedValue).toBe(true);
// });