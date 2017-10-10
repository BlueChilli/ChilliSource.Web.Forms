import React from 'react';
import { shallow } from 'enzyme';
import { isEqual } from 'lodash';
import Radio from '../Radio';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const allRadioProps = {
	className: 'RadioClass radio',
	type: 'radio',
	autoFocus: true,
	onChange: event => {},
	onBlur: event => {},
	id: 'RadioId',
	defaultChecked: true,
	defaultSelected: true,
	label: 'Radio Label',
	name: 'RadioName'
};

const { className, type, ...remainingRadioProps } = allRadioProps;

const removeChildrenProp = props => {
	const { children, ...propsWithoutChildren } = props;
	return propsWithoutChildren;
};

describe('<Radio />', () => {
	it('should have the required props for <Switch />', () => {
		const wrapper = shallow(<Radio className="RadioClass" {...remainingRadioProps} />);
		const wrapperProps = removeChildrenProp(wrapper.props());
		expect(isEqual(wrapperProps, allRadioProps)).toBe(true);
	});
});
