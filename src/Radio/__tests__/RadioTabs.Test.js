import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import RadioTabs from '../RadioTabs';
import RadioTab from '../RadioTab';

const radioTabChildren = [
    <RadioTab key="radiotab1" name="RadioTab[]" id="RadioTab1">Tab1</RadioTab>,
    <RadioTab key="radiotab2" name="RadioTab[]" id="RadioTab2">Tab2</RadioTab>,
    <RadioTab key="radiotab3" name="RadioTab[]" id="RadioTab3">Tab3</RadioTab>
];

const htmlChildren = [
    <p key="p">p tag</p>,
    <div key="div">div tag</div>,
    <h1 key="h1">h1 tag</h1>
];

const allRadioTabsProps = {
    name: 'RadioTabs',
    radioClasses: 'RadioClasses',
    className: 'RadioTabsClass',
    label: 'RadioTabs Label',
};

const {name, radioClasses, className, label} = allRadioTabsProps;

const inputWrapperProps = {
    name,
    label,
    className: 'RadioTabsClass input radio-tabs'
};

describe('<RadioTabs />', () => {

    it('should have the required props for InputWrapper', () => {
        const wrapper = shallow(<RadioTabs {...allRadioTabsProps} />);
        const {children, ...InputWrapperProps} = wrapper.props();
        expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
    });

    it('should have <div /> wrapper for children', () => {
        const wrapper = shallow(<RadioTabs {...allRadioTabsProps} />);
        expect(wrapper.find('.RadioClasses')).toHaveLength(1);
    });

    it('should render pure HTML children', () => {
        const radioTabsProps = {
            children: htmlChildren,
            ...allRadioTabsProps
        };
        const wrapper = shallow(<RadioTabs {...radioTabsProps} />);
        expect(wrapper.contains(htmlChildren)).toBe(true);
    });

    it('should render react higher order components', () => {
        const radioTabsProps = {
            children: radioTabChildren,
            ...allRadioTabsProps
        };
        const wrapper = shallow(<RadioTabs {...radioTabsProps} />);
        expect(wrapper.contains(radioTabChildren)).toBe(true);
    });
});