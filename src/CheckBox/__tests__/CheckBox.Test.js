import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import CheckBox from '../CheckBox';

const allCheckboxProps = {
    autoFocus: true,
    onChange: event => {},
    onBlur: event => {},
    id: 'CheckboxId',
    defaultChecked: true,
    defaultSelected: true,
    label: 'Checkbox Label',
    className: 'CheckboxClass checkbox',
    name: 'CheckboxName',
    type: 'checkbox'
};

const {className, type, ...remainingCheckboxProps} = allCheckboxProps;

describe('<CheckBox />', () => {
    it('should have the required props for <Switch />', () => {
        const wrapper = shallow(<CheckBox className="CheckboxClass" {...remainingCheckboxProps} />);
        const {children, ...wrapperProps} = wrapper.props();
        
        expect(isEqual(wrapperProps, allCheckboxProps)).toBe(true);
    });
});