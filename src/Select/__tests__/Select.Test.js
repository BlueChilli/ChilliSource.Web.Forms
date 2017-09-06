import React from 'react';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import {shallow, mount} from 'enzyme';
import {isEqual} from 'lodash';
import Select, {Select as ShallowSelect} from '../Select';
import Form from '../../Form/Form';
import SelectBase from '../Base';
import {Map} from 'immutable';

const options = ['Pash', 'Shane', 'Jeremy', 'Mitch', 'Mick'].map((person, key) => <option key={key} value={person}>{person}</option>);

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
    className: 'SelectClass select input',
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

describe('<Select /> shallow', () => {
    const wrapper = shallow(<ShallowSelect {...allSelectProps} />);

    const InputWrapperProps = removeChildren(wrapper.props());
    const StyledSelect = wrapper.find('.styled-select');
    const SelectBaseProps = removeChildren(wrapper.find(SelectBase).props());
    const DisplayValidationProps = removeChildren(wrapper.find('DisplayValidation').props());

    it('should have all the required props for <InputWrapper />', () => {
        expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
    });

    it('should render a wrapper <div /> for select base', () => {
        expect(StyledSelect).toHaveLength(1);
        expect(StyledSelect.children()).toHaveLength(2);
    });

    it('should have all the required props for <SelectBase />', () => {
        expect(isEqual(SelectBaseProps, selectBaseProps)).toBe(true);
    });

    it('should render a drop-down arrow for the drop down', () => {
        expect(wrapper.find('.arrow')).toHaveLength(1);
    });

    it('should have the required props for <DisplayValidation />', () => {
        expect(isEqual(DisplayValidationProps, displayValidationProps)).toBe(true);
    });
});

describe('<Select /> mount', () => {
    const mountOptions = {
        context:{
            nameSpace: 'Select',
            FormState: Map(),
            dispatch: () => {}
        },
        childContextTypes: {
            nameSpace: PropTypes.string,
            FormState: PropTypes.object,
            dispatch: PropTypes.func,
        }
    }

    const wrapper = mount(<Select {...allSelectProps} />, mountOptions);
    const label = wrapper.find('label');
    const select = wrapper.find('select')

     it('should set the className', () => {
        expect(wrapper.find('.SelectClass').exists()).toBe(true);
     });
    
    it('should set the label', () => {
        expect(label.text() === 'SelectBase Label').toBe(true);
    });
     
    it('should set the labelPrefix', () => {
        expect(wrapper.find('.input-label-prefix').text() === allSelectProps.labelPrefix).toBe(true);
    });

    it('should set the labelPrefix', () => {
        expect(wrapper.find('.input-label-prefix').text() === allSelectProps.labelPrefix).toBe(true);
    });

    it('should set the labelPostfix', () => {
        expect(wrapper.find('.input-label-postfix').text() === allSelectProps.labelPostfix).toBe(true);
    });

    it('should set labelFor and name to be the same', () => {
        expect(label.prop('htmlFor') === select.prop('name')).toBe(true);
    });

    it('should set the correct defaultValue', () => {
        expect(select.prop('value') === allSelectProps.value).toBe(true);
    });
});