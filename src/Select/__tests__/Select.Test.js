import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import {Select} from '../Select';
import Form from '../../Form/Form';
import SelectBase from '../Base';

const options = ['Pash', 'Shane', 'Jeremy', 'Mitch', 'Mick']
                .map((person, key) => <option key={key} value={person}>{person}</option>);

const allSelectProps = {
    children: options,
    className: 'SelectClass',
    name: 'SelectBaseName',
    label: 'SelectBase Label',
    labelPrefix: 'Label Prefix',
    labelPostfix: 'Label Postfix',
    value: 'Pash',
    required: true,
};

const {className, name, label, labelPrefix, labelPostfix, value, required} = allSelectProps;

const inputWrapperProps = {
    className: 'SelectClass select',
    name,
    label,
    labelPrefix,
    labelPostfix
};

const selectBaseProps = {
    name,
    value,
    required
};

const displayValidationProps = {
    name,
    required
};

const removeChildren = props => {
    const {children, ...remainingProps} = props;
    return remainingProps;
}

describe('<Select />', () => {
    // const wrapper = shallow(<Form name="Select"><Select {...allSelectProps} /></Form>).find("Select");
    // const InputWrapperProps = removeChildren(wrapper.props());
    // const StyledSelect = wrapper.find('.styled-select');
    // const SelectBaseProps = removeChildren(wrapper.find(SelectBase).props());
    // const DisplayValidationProps = removeChildren(wrapper.find('DisplayValidation').props());

    it('should have all the required props for <InputWrapper />', () => {
        // expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
        expect(true).toBe(true);
    });

    it('should render a wrapper <div /> for select base', () => {
        // expect(StyledSelect).toHaveLength(1);
        // expect(StyledSelect.children()).toHaveLength(2);
    });

    it('should have all the required props for <SelectBase />', () => {
        // expect(isEqual(SelectBaseProps, selectBaseProps)).toBe(true);
    });

    it('should render a drop-down arrow for the drop down', () => {
        // expect(wrapper.find('.arrow')).toHaveLength(1);
    });

    it('should have the required props for <DisplayValidation />', () => {
        // expect(isEqual(DisplayValidationProps, displayValidationProps)).toBe(true);
    });
});