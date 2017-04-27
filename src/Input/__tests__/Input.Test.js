import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import {Input} from '../Input.tsx';

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

describe('<Input />', () => {
    const wrapper = shallow(<Input {...allInputProps} />);
    
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