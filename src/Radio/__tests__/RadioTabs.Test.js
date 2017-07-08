import React from 'react';
import {shallow, mount} from 'enzyme';
import {isEqual} from 'lodash';
import Form from "../../Form/Form";
import RadioTabs from '../RadioTabs';
import RadioTab from '../RadioTab';

const radioTabChildren = [
    <RadioTab key="radiotab1" id="RadioTab1">Tab1</RadioTab>,
    <RadioTab key="radiotab2" id="RadioTab2">Tab2</RadioTab>,
    <RadioTab key="radiotab3" id="RadioTab3">Tab3</RadioTab>
];

const radioTabDefaultChildren = [
    <RadioTab key="radiotab1" id="RadioTab1">Tab1</RadioTab>,
    <RadioTab defaultSelected key="radiotab2" id="RadioTab2">Tab2</RadioTab>,
    <RadioTab key="radiotab3" id="RadioTab3">Tab3</RadioTab>
];

const htmlChildren = [
    <p key="p">p tag</p>,
    <div key="div">div tag</div>,
    <h1 key="h1">h1 tag</h1>
];

const allRadioTabsProps = {
    name: 'name',
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
        const wrapper = shallow(<Form name="Form"><RadioTabs {...radioTabsProps} /></Form>).find(RadioTabs);
        const {children, ...InputWrapperProps} = wrapper.props();
        expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
    });

    it('should render pure HTML children', () => {
        const radioTabsProps = {
            children: htmlChildren,
            ...allRadioTabsProps
        };

        const wrapper = shallow(<Form name="Form"><RadioTabs {...radioTabsProps} /></Form>);
        expect(wrapper.contains(htmlChildren)).toBe(true);
    });

    it('should render react higher order components', () => {
        const radioTabsProps = {
            children: radioTabChildren,
            ...allRadioTabsProps
        };
        const wrapper = shallow(<Form name="Form"><RadioTabs {...radioTabsProps} /></Form>);
        expect(wrapper.contains(radioTabChildren)).toBe(true);
    });
    it('should set the name, chosenId and setId prop on children', () => {
        const radioTabsProps = {
            children: radioTabChildren,
            ...allRadioTabsProps
        };
        const wrapper = mount(<Form name="Form"><RadioTabs {...radioTabsProps} /></Form>);

        const test = wrapper.find('RadioTab').everyWhere(elm => {
            return elm.prop('name') === allRadioTabsProps.name &&
            elm.prop('chosenId') === "" &&
            typeof elm.prop('setId') === 'function';
        });

        expect(test).toBe(true);
    });

    it('should set chosenId to correct id', () => {
        const radioTabsProps = {
            children: radioTabDefaultChildren,
            ...allRadioTabsProps
        };
        const wrapper = mount(<Form name="Form"><RadioTabs {...radioTabsProps} /></Form>);

        const test = wrapper.find('RadioTab').everyWhere(elm => {
            return elm.prop('chosenId') === "RadioTab2"; 
        });

        expect(test).toBe(true);
    });

    it('should add an active class to chosen tab', () => {
        const radioTabsProps = {
            children: radioTabDefaultChildren,
            ...allRadioTabsProps
        };
        const wrapper = mount(<Form name="Form"><RadioTabs {...radioTabsProps} /></Form>);


        expect(wrapper.find(".active").find("#RadioTab2").exists()).toBe(true);
    });


});

//Throws error if form doesnt exist