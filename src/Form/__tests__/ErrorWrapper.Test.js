import React from 'react';
import {shallow} from 'enzyme';
import ErrorWrapper from '../ErrorWrapper.tsx';

const input = <input value='This is in an input tag' />;
const div = <div>This is in a div tag</div>;
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

    // ask shane for test description
    it('should render a single child inside the <div /> NOT having class name = .hidden', () => {
        const wrapper = shallow(<ErrorWrapper {...singleChildWithTypeNotHidden} />);

        expect(wrapper.is('.some-class')).toBe(true);
        expect(wrapper.is('.input-hidden')).toBe(false);

        expect(wrapper.contains(input)).toBe(true);
    });

    it('should render a single child inside the <div /> having class name = .hidden', () => {
        const wrapper = shallow(<ErrorWrapper {...singleChildWithTypeHidden} />);

        expect(wrapper.is('.some-class')).toBe(true);
        expect(wrapper.is('.input-hidden')).toBe(true);

        expect(wrapper.contains(input)).toBe(true);
    });

    it('should render a <input /> & <div /> inside the <div /> NOT having class name = .hidden', () => {
        const wrapper = shallow(<ErrorWrapper {...multipleChildrenWithTypeNotHidden} />);

        expect(wrapper.is('.some-class')).toBe(true);
        expect(wrapper.is('.input-hidden')).toBe(false);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(div)).toBe(true);
    });
    
    it('should render a <input /> & <div /> inside the <div /> having class name = .hidden', () => {
        const wrapper = shallow(<ErrorWrapper {...multipleChildrenWithTypeHidden} />);

        expect(wrapper.is('.some-class')).toBe(true);
        expect(wrapper.is('.input-hidden')).toBe(true);

        expect(wrapper.contains(input)).toBe(true);
        expect(wrapper.contains(div)).toBe(true);
    });
});