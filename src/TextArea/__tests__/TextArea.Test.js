import React from 'react';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import { isEqual } from 'lodash';
import { TextArea } from '../TextArea';
import Form from '../../Form/Form';
import { Map } from 'immutable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const allTextAreaProps = {
	autoFocus: false,
	min: 9,
	max: 999,
	minLength: 4,
	maxLength: 10,
	pattern: '^[9][0-9]?$|^999$',
	labelPrefix: 'Label Prefix',
	labelPostfix: 'Label Postfix',
	label: 'TextArea Label',
	name: 'SampleTextArea',
	className: 'SampleTextAreaClass',
	id: 'TextAreaId',
	explanation: 'This is additional explanation for this field',
	resize: 'none'
};

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
	prepend,
	append,
	name,
	className,
	id,
	explanation,
	resize
} = allTextAreaProps;

const inputWrapperProps = {
	className: 'SampleTextAreaClass textarea input',
	name,
	labelPostfix,
	labelPrefix,
	label,
	explanation
};

const inputGroupProps = {};

const textAreaBaseProps = {
	autoFocus,
	id,
	minLength,
	maxLength,
	min,
	max,
	name,
	pattern,
	resize
};

const displayValidationProps = {
	minLength,
	maxLength,
	min,
	max,
	name,
	pattern
};

const removeChildrenProp = props => {
	const { children, ...propsWithoutChildren } = props;
	return propsWithoutChildren;
};

describe('<TextArea /> shallow', () => {
	const wrapper = shallow(<TextArea {...allTextAreaProps} />);
	const InputWrapperProps = removeChildrenProp(wrapper.find('InputWrapper').props());
	const InputGroupProps = removeChildrenProp(wrapper.find('InputGroup').props());
	const TextAreaBaseProps = removeChildrenProp(wrapper.find('TextAreaBase').props());
	const DisplayValidationProps = removeChildrenProp(wrapper.find('DisplayValidation').props());

	// InputWrapper
	it('should only have the required props for <InputWrapper />', () => {
		expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
	});

	// InputGroup
	it('should only have the required props for <InputGroup />', () => {
		expect(isEqual(InputGroupProps, inputGroupProps)).toBe(true);
	});

	// TextAreaBase
	it('should only have the required props for <TextAreaBase />', () => {
		expect(isEqual(TextAreaBaseProps, textAreaBaseProps)).toBe(true);
	});

	// DisplayValidation
	it('should only have the required props for <DisplayValidation />', () => {
		expect(isEqual(DisplayValidationProps, displayValidationProps)).toBe(true);
	});
});

describe('<TextArea /> mount', () => {
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

	const mountProps = {
		autoFocus,
		labelPrefix,
		labelPostfix,
		label,
		name,
		className,
		id,
		onBlur: sinon.spy(),
		onChange: sinon.spy()
	};

	const wrapper = mount(<TextArea {...mountProps} />, mountOptions);

	const mountLabel = wrapper.find('label');
	const mountInput = wrapper.find('textarea');

	it('should render a label and an input', () => {
		expect(mountInput.exists() && mountLabel.exists()).toBe(true);
	});

	it('should set the className', () => {
		expect(wrapper.find('.SampleTextAreaClass').exists()).toBe(true);
	});

	it('should set the label', () => {
		expect(mountLabel.text() === mountProps.label).toBe(true);
	});

	it('should set the labelPrefix', () => {
		expect(wrapper.find('.input-label-prefix').text() === 'Label Prefix').toBe(true);
	});

	it('should set the labelPostfix', () => {
		expect(wrapper.find('.input-label-postfix').text() === 'Label Postfix').toBe(true);
	});

	it('should set labelFor and name to be the same', () => {
		expect(mountLabel.prop('htmlFor') === mountInput.prop('name')).toBe(true);
	});
});
