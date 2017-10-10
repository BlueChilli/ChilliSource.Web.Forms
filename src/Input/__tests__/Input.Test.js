import React from 'react';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { isEqual } from 'lodash';
import Input, { Input as ShallowInput } from '../Input';
import { Map } from 'immutable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
	explanation: 'explanation',
	name: 'SampleInput',
	className: 'SampleInputClass',
	id: 'InputId',
	onChange: () => {},
	onBlur: () => {},
	radius: 4
};

// Destructing the props so as to check them individually
const {
	autoFocus,
	min,
	max,
	minLength,
	maxLength,
	pattern,
	labelPrefix,
	labelPostfix,
	label,
	type,
	prepend,
	explanation,
	append,
	name,
	className,
	id,
	onChange,
	onBlur
} = allInputProps;

const inputWrapperProps = {
	className: 'SampleInputClass input',
	type,
	name,
	labelPostfix,
	labelPrefix,
	label,
	explanation
};

const inputGroupProps = {
	prepend,
	append,
	style: { borderRadius: '4px' }
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
	pattern,
	style: { borderRadius: '4px' }
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
	const { children, ...propsWithoutChildren } = props;
	return propsWithoutChildren;
};

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

describe('mount(Input)', () => {
	const mountOptions = {
		context: {
			nameSpace: 'Input',
			FormState: Map(),
			dispatch: () => {}
		},
		childContextTypes: {
			nameSpace: PropTypes.string,
			FormState: PropTypes.object,
			dispatch: PropTypes.func
		}
	};

	const defaultValue = 'Input';
	const updatedDefaultValue = 'Changed Input';
	const type = 'text';
	const onChangeCallback = sinon.spy();
	const onBlurCallback = sinon.spy();

	const wrapper = mount(
		<Input
			{...allInputProps}
			onBlur={onBlurCallback}
			onChange={onChangeCallback}
			defaultValue={defaultValue}
			type={type}
		/>,
		mountOptions
	);

	const label = wrapper.find('label');
	const input = wrapper.find('input');

	it('should set the className', () => {
		expect(wrapper.find('.SampleInputClass').exists()).toBe(true);
	});

	it('should set the label', () => {
		expect(label.text() === 'InputLabel').toBe(true);
	});

	it('should set the labelPrefix', () => {
		expect(wrapper.find('.input-label-prefix').text() === 'LabelPrefix').toBe(true);
	});

	it('should set the labelPostfix', () => {
		expect(wrapper.find('.input-label-postfix').text() === 'LabelPostfix').toBe(true);
	});

	it('should set labelFor and name to be the same', () => {
		expect(label.prop('htmlFor') === input.prop('name')).toBe(true);
	});

	it('should set the correct defaultValue', () => {
		expect(input.prop('value') === defaultValue).toBe(true);
	});

	it('should set the correct type', () => {
		expect(input.prop('type') === type).toBe(true);
	});

	it('should call onChange when value changes', () => {
		const event = { target: { value: 'Inpu' } };
		const changedEvent = { target: { value: 'Input' } };
		input.simulate('change', event);
		expect(onChangeCallback.calledOnce).toBe(true);
		input.simulate('change', changedEvent);
		expect(onChangeCallback.calledTwice).toBe(true);
	});

	it('should call onBlur when blurred', () => {
		input.simulate('blur');
		expect(onBlurCallback.calledOnce).toBe(true);
		input.simulate('blur');
		expect(onBlurCallback.calledTwice).toBe(true);
	});

	const value = 'Strong';
	const valueWrapper = mount(
		<Input value="Strong" {...allInputProps} defaultValue={defaultValue} />,
		mountOptions
	);

	it('should set the value rather then defaultValue', () => {
		expect(valueWrapper.find('input').prop('value') === value).toBe(true);
	});
});
