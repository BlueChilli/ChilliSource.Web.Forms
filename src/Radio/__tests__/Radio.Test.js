import React from 'react';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import Radio from '../Radio';

const allRadioProps = {
    className: 'RadioClass radio',
    type: 'radio',
    autoFocus: true,
    onChange: event => {},
    onBlur: event => {},
    id: 'SwitchId',
    defaultChecked: true,
    defaultSelected: true,
    label: 'Switch Label',
    name: 'SwitchName',
};

const {className, type, ...remainingRadioProps} = allRadioProps;

const removeChildrenProp = props => {
    const {children, ...propsWithoutChildren} = props;
    return propsWithoutChildren;
}

describe('<Radio />', () => {
    it('should have the required props for <Switch />', () => {
        const wrapper = shallow(<Radio className='RadioClass' {...remainingRadioProps} />);
        const wrapperProps = removeChildrenProp(wrapper.props());
        expect(isEqual(wrapperProps, allRadioProps)).toBe(true);
    });
});