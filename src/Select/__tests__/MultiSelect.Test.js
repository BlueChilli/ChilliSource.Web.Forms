import React from 'react';
import {List} from 'immutable';
import {shallow, mount} from 'enzyme';
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
    const wrapper = mount(<MultiSelect {...allMultiSelectProps} />);
    const label = wrapper.find('label');
    const select = wrapper.find('.Select-control');

    it('renders a label', () => {
        expect(label.exists()).toBe(true);
    });

    it('renders a select', () => {
        expect(select.exists()).toBe(true);
    });

    it('should set the labelPrefix', () => {
        expect(wrapper.find(".input-label-prefix").text() === allMultiSelectProps.labelPrefix).toBe(true);
    });

    it('should set the labelPostfix', () => {
        expect(wrapper.find(".input-label-postfix").text() === allMultiSelectProps.labelPostfix).toBe(true);
    });
});

describe('<MultiSelect /> mount no default value', () => {
    const noDefaultValue = {
        ...allMultiSelectProps,
        value: null
    }

    const wrapper = mount(<MultiSelect {...noDefaultValue} />);

    it('should set the placeholder', () => {
        expect(wrapper.find(".Select-placeholder").text() === allMultiSelectProps.placeholder).toBe(true);
    });
});

describe('<MultiSelect /> failure', () => {
    it("should throw if options are not an Immutable List", () => {
      expect(() => {
        mount(<MultiSelect {...inputWrapperPropsNotList} />)
      }).toThrow();

      expect(() => {
        mount(<MultiSelect {...allMultiSelectProps} />)
      }).not.toThrow();
    })
});