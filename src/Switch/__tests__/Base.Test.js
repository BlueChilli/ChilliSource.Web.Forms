import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SwitchBase from '../Base';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


const switchBaseAttributes = {
	id: 'SwitchBaseId',
	inputChanged: () => ({}),
	setInputBlurred: () => ({}),
	name: 'SwitchBase'
};

const event = {
	target: {
		checked: true
	}
};

describe('<SwitchBase />', () => {
	// input component
	it('should render a <input /> component', () => {
		const wrapper = shallow(<SwitchBase {...switchBaseAttributes} />);
		expect(wrapper.is('input')).toBe(true);
	});

	it('should call onChange when its value changes', () => {
		const onChange = sinon.spy();
		const wrapper = shallow(<SwitchBase {...switchBaseAttributes} onChange={onChange} />);
		wrapper.simulate('change', event);

		expect(onChange.calledWith(event)).toBe(true);
	});

	it('should call onBlur when it loses focus', () => {
		const onBlur = sinon.spy();
		const wrapper = shallow(<SwitchBase {...switchBaseAttributes} onBlur={onBlur} />);
		wrapper.simulate('blur', event);

		expect(onBlur.calledWith(event)).toBe(true);
	});
});
