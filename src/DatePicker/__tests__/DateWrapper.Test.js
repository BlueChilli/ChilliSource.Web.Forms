import React from 'react';
import { shallow } from 'enzyme';
import { isEqual } from 'lodash';
import { DateWrapper } from '../DateWrapper';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const allDateWrapperProps = {
	label: 'DateWrapper Label',
	labelPostfix: 'Label Postfix',
	name: 'DateWrapperName',
	valueString: 'May 1, 2017 to May 8, 2017',
	children: [<h1>H1</h1>, <p>p</p>]
};

const { label, labelPostfix, name, valueString, children } = allDateWrapperProps;

const inputWrapperProps = {
	name,
	label,
	labelPostfix,
	className: 'input date-picker'
};

const inputGroupProps = {
	prepend: undefined,
	append: undefined
};

const removeChildren = props => {
	const { children, ...propsWithoutChildren } = props;
	return propsWithoutChildren;
};

describe('<DateWrapper />', () => {
	const wrapper = shallow(<DateWrapper {...allDateWrapperProps} />);

	it('should have all props passed in for <InputWrapper />', () => {
		const InputWrapperProps = removeChildren(wrapper.find('InputWrapper').props());
		expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
	});

	it('should have the props passed in for <InputGroup />', () => {
		const InputGroupProps = removeChildren(wrapper.find('InputGroup').props());
		expect(isEqual(inputGroupProps, InputGroupProps)).toBe(true);
	});

	it('should have the passed in props for <input />', () => {
		const InputProps = removeChildren(wrapper.find('input').props());
		expect(isEqual(InputProps.value, valueString)).toBe(true);
	});
});
