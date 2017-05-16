import React from 'react';
import {List} from 'immutable';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import sinon from 'sinon';
import {MultiSelect} from '../MultiSelect';

const options = [
    {value: 'Pash', label: 'Pash'},
    {value: 'Wolf', label: 'Wolf'},
    {value: 'Hunter', label: 'Hunter'},
    {value: 'Mouse', label: 'Mouse'},
    {value: 'Millenial', label: 'Millenial'},
];

const value = ['Pash', 'Hunter'];

const allMultiSelectProps = {
    options: List(options),
    value: List(value),
    className: 'MultiSelectClass',
    name: 'MultiSelectName',
    label: 'MultiSelect Label',
    labelPrefix: 'Label Prefix',
    labelPostfix: 'Label Postfix',
    inputChanged: values => ({})
};

const {name, label, labelPrefix, labelPostfix} = allMultiSelectProps;
const multi = true;

const inputWrapperProps = {
    name,
    label,
    labelPrefix,
    labelPostfix,
    className: 'MultiSelectClass input',
};

const removeChildren = props => {
    const {children, ...remainingProps} = props;
    return remainingProps;
}

describe('<MultiSelect />', () => {
    const wrapper = shallow(<MultiSelect {...allMultiSelectProps} />);
    const InputWrapperProps = removeChildren(wrapper.props());
    const {options: Options, value: Value, multi: Multi} = wrapper.find('Select').props();

    it('should have all the required props for <InputWrapper />', () => {
        expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
    });

    it('should have all the passed in props for <Select />(from react-select)', () => {
        expect(isEqual(options, Options)).toBe(true);
        expect(isEqual(value, Value)).toBe(true);
        expect(isEqual(multi, Multi)).toBe(true);
    });

    /**
     * Not testing the 'Select'(from react-select) component as its
     * an external package and assuming it to be tested
     * by its developer
     */
});