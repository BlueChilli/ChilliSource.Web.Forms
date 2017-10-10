import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import { isEqual } from 'lodash';
import CheckBox from '../CheckBox';
import Form from '../../Form/Form';

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

const { className, type, ...remainingCheckboxProps } = allCheckboxProps;

describe('<CheckBox /> shallow', () => {
	it('should have the required props for <Switch />', () => {
		const wrapper = shallow(<CheckBox className="CheckboxClass" {...remainingCheckboxProps} />);
		const { children, ...wrapperProps } = wrapper.props();

		expect(isEqual(wrapperProps, allCheckboxProps)).toBe(true);
	});
});

describe('<CheckBox /> mount failure', () => {
	it('show throw if not a child of Form', () => {
		expect(() => {
			mount(<CheckBox className="CheckboxClass" {...remainingCheckboxProps} />);
		}).toThrow();
	});
});

describe('<CheckBox /> mount', () => {
	const onChangeCallback = sinon.spy();
	const onBlurCallback = sinon.spy();

	const wrapper = mount(
		<Form name="renderTest">
			<CheckBox
				className="CheckboxClass"
				{...remainingCheckboxProps}
				onBlur={onBlurCallback}
				onChange={onChangeCallback}
			/>
		</Form>
	);

	const mountInput = wrapper.find('input');
	const mountLabel = wrapper.find('label');

	it('should set the correct type', () => {
		expect(mountInput.prop('type') === allCheckboxProps.type).toBe(true);
	});

	it('should be correctly set to checked / unchecked', () => {
		expect(mountInput.props().checked).toBe(true);
	});

	it('should render all appropriate child elements', () => {
		expect(mountInput.exists() && mountLabel.exists()).toBe(true);
	});

	it('should set labelFor and name to be the same', () => {
		expect(mountLabel.prop('htmlFor') === mountInput.prop('id')).toBe(true);
	});

	it('should set the label', () => {
		expect(mountLabel.text() === allCheckboxProps.label).toBe(true);
	});

	it('should call onChange when value changes', () => {
		const eventOne = { target: { value: false } };
		const eventTwo = { target: { value: true } };
		mountInput.simulate('change', eventOne);
		expect(onChangeCallback.calledOnce).toBe(true);
		mountInput.simulate('change', eventTwo);
		expect(onChangeCallback.calledTwice).toBe(true);
	});

	it('should call onBlur when blurred', () => {
		mountInput.simulate('blur');
		expect(onBlurCallback.calledOnce).toBe(true);
		mountInput.simulate('blur');
		expect(onBlurCallback.calledTwice).toBe(true);
	});
});
