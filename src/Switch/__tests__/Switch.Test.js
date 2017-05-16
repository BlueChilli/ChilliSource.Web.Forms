import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import {Switch} from '../Switch';

const allSwitchProps = {
    autoFocus: true,
    onChange: event => {},
    onBlur: event => {},
    id: 'SwitchId',
    defaultChecked: true,
    defaultSelected: true,
    label: 'Switch Label',
    className: 'SwitchClass',
    name: 'SwitchName',
    type: 'radio'
};

const {autoFocus, onChange, onBlur, id, defaultChecked,
        defaultSelected,label, className, name, type} = allSwitchProps;

const errorWrapperProps = {
    type,
    className: 'switch SwitchClass'
};

const switchBaseProps = {
    autoFocus, 
    onChange, 
    onBlur, 
    id: 'switchname_switch_id',
    defaultChecked, 
    defaultSelected,
    name,
    type
};

const displayValidationProps = {
    name,
    type
};

const removeChildrenProp = props => {
    const {children, ...propsWithoutChildren} = props;
    return propsWithoutChildren;
}

describe('<Switch />', () => {
    const wrapper = shallow(<Switch {...allSwitchProps} />);

    const ErrorWrapperProps = removeChildrenProp(wrapper.props());
    const SwitchBaseProps = removeChildrenProp(wrapper.find('SwitchBase').props());
    const DisplayVidationProps = removeChildrenProp(wrapper.find('DisplayValidation').props());
    const labelProps = removeChildrenProp(wrapper.find('label').props());

    // Error Wrapper
    it('should only have the required props for <ErrorWrapper />', () => {
        expect(isEqual(ErrorWrapperProps, errorWrapperProps)).toBe(true);
    });

    // Switch Base
    it('should only have the required props for <SwitchBase />', () => {
        expect(isEqual(SwitchBaseProps, switchBaseProps)).toBe(true);
    });

    // Display Validation
    it('should only have the required props for <DisplayValidation />', () => {
        expect(isEqual(DisplayVidationProps, displayValidationProps)).toBe(true);
    });

    // label
    it('should render a <label /> for the switch', () => {
        // not checking for whether the label exists as finding props equates to the same
        expect(isEqual(labelProps, {htmlFor: 'switchname_switch_id'})).toBe(true);
    });

    // label children
    it('should render a <span /> and label as children to <label />', () => {
        expect(wrapper.find('label').children()).toHaveLength(2);
    });
});