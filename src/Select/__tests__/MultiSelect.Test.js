import React from 'react';
import PropTypes from "prop-types";
import sinon from 'sinon';
import {List} from 'immutable';
import {shallow, mount} from 'enzyme';
import {Map} from 'immutable';
import {isEqual} from 'lodash';
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
    inputChanged: values => ({}),
    placeholder: 'Please make a selection',
    noResultsText: 'There are no options to choose from'
};

const inputWrapperPropsNotList = {
    ...allMultiSelectProps,
    options: options
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

describe('<MultiSelect /> shallow', () => {
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

    it('should render a Select)', () => {
        expect(wrapper.find('Select')).toHaveLength(1);
    });

    /**
     * Not testing the 'Select'(from react-select) component as its
     * an external package and assuming it to be tested
     * by its developer
     */
});

describe('<MultiSelect /> mount', () => {
    const mountOptions = {
        context:{
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

    const wrapper = mount(<MultiSelect {...allMultiSelectProps} />, mountOptions);
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    it('should set the className', () => {
        expect(wrapper.find('.' + allMultiSelectProps.className).exists()).toBe(true);
    });

    it('should set the label', () => {
        expect(label.text() === allMultiSelectProps.label).toBe(true);
    });

    it('should set the labelPrefix', () => {
        expect(wrapper.find(".input-label-prefix").text() === allMultiSelectProps.labelPrefix).toBe(true);
    });

    it('should set the labelPostfix', () => {
        expect(wrapper.find(".input-label-postfix").text() === allMultiSelectProps.labelPostfix).toBe(true);
    });

    it('should set labelFor and name to be the same', () => {
        expect(label.prop("htmlFor") === wrapper.prop("name")).toBe(true);
    });

    it('should set the correct defaultValue', () => {
        expect(wrapper.prop('value') === allMultiSelectProps.value).toBe(true);
    });
});

describe('Bad <MultiSelect />', () => {
    it("should throw if options are not an Immutable List", () => {
      expect(() => {
        mount(<MultiSelect {...inputWrapperPropsNotList} />)
      }).toThrow();

      expect(() => {
        mount(<MultiSelect {...allMultiSelectProps} />)
      }).not.toThrow();
    })
});