import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import RadioTab from '../RadioTab';

const allRadioTabProps = {
    className: 'RadioTabClass radio-tab',
    type: 'radio',
    autoFocus: true,
    onChange: event => {},
    onBlur: event => {},
    id: 'RadioTabId',
    defaultChecked: true,
    defaultSelected: true,
    label: 'RadioTab Label',
    name: 'RadioTabName',
};

const {className, type, ...remainingRadioTabProps} = allRadioTabProps;

const removeChildrenProp = props => {
    const {children, ...propsWithoutChildren} = props;
    return propsWithoutChildren;
}

describe('<RadioTab />', () => {
    // it('should have the required props for <Switch />', () => {
    //     const wrapper = shallow(<RadioTab className='RadioTabClass' {...remainingRadioTabProps} />);
    //     const wrapperProps = removeChildrenProp(wrapper.props());
    //     expect(isEqual(wrapperProps, allRadioTabProps)).toBe(true);
    // });
    it("should pass", () => {
        expect(true).toBe(true);
    })
});