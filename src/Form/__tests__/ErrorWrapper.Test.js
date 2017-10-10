import React from 'react';
import { shallow } from 'enzyme';
import ErrorWrapper from '../ErrorWrapper.tsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const input = <input key="input" value="This is in an input tag" />;
const div = <div key="div">This is in a div tag</div>;
const className = 'some-class';

const singleChildWithTypeNotHidden = {
	className,
	type: 'email',
	children: input
};

const singleChildWithTypeHidden = {
	className,
	type: 'hidden',
	children: input
};

const multipleChildrenWithTypeNotHidden = {
	className,
	type: 'number',
	children: [input, div]
};

const multipleChildrenWithTypeHidden = {
	className,
	type: 'hidden',
	children: [input, div]
};

describe('<ErrorWrapper />', () => {
	// wrapper div
	it('should render a <div /> having specified classnames', () => {
		const wrapper = shallow(<ErrorWrapper {...singleChildWithTypeNotHidden} />);

		expect(wrapper.is('.some-class')).toBe(true);
	});

	// wrapper div with hidden class
	it('should render a <div /> having specified classnames with additional .input-hidden class', () => {
		const wrapper = shallow(<ErrorWrapper {...singleChildWithTypeHidden} />);

		expect(wrapper.is('.input-hidden')).toBe(true);
	});

	// single child with wrapper shown
	it('should render a single child inside the wrapper', () => {
		const wrapperNotHidden = shallow(<ErrorWrapper {...singleChildWithTypeNotHidden} />);
		const wrapperHidden = shallow(<ErrorWrapper {...singleChildWithTypeHidden} />);

		expect(wrapperNotHidden.contains(input)).toBe(true);
		expect(wrapperHidden.contains(input)).toBe(true);
	});

	// single child with wrapper hidden
	it('should render a single child inside the wrapper', () => {
		const wrapperNotHidden = shallow(<ErrorWrapper {...singleChildWithTypeNotHidden} />);
		const wrapperHidden = shallow(<ErrorWrapper {...singleChildWithTypeHidden} />);

		expect(wrapperNotHidden.contains(input)).toBe(true);
		expect(wrapperHidden.contains(input)).toBe(true);
	});

	// multiple children
	it('should render multiple children(2) inside the wrapper', () => {
		const wrapperNotHidden = shallow(<ErrorWrapper {...multipleChildrenWithTypeNotHidden} />);
		const wrapperHidden = shallow(<ErrorWrapper {...multipleChildrenWithTypeHidden} />);

		expect(wrapperNotHidden.contains(input)).toBe(true);
		expect(wrapperNotHidden.contains(div)).toBe(true);

		expect(wrapperHidden.contains(input)).toBe(true);
		expect(wrapperHidden.contains(div)).toBe(true);
	});
});
