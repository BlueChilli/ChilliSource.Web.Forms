import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import TextAreaBase from '../Base';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const textAreaAttributes = {
	defaultValue: 'Parth Mehta',
	inputChanged: () => {},
	setInputBlurred: () => {}
};

const event = {
	target: {
		value: 'sample event'
	}
};

describe('<TextAreaBase />', () => {
	// text area element
	it('should render <textarea /> component', () => {
		const wrapper = shallow(<TextAreaBase {...textAreaAttributes} />);
		expect(wrapper.is('textarea')).toBe(true);
	});

	// onChange event
	it('should call onChange handler when its value changes', () => {
		const onChange = sinon.spy();
		const wrapper = shallow(<TextAreaBase {...textAreaAttributes} onChange={onChange} />);
		wrapper.simulate('change', event);

		expect(onChange.calledWith(event)).toBe(true);
	});

	// onBlur event
	it('should call onBlur handler when it loses focus', () => {
		const onBlur = sinon.spy();
		const wrapper = shallow(<TextAreaBase {...textAreaAttributes} onBlur={onBlur} />);
		wrapper.simulate('blur', event);

		expect(onBlur.calledWith(event)).toBe(true);
	});
});
