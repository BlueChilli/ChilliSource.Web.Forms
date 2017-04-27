import React from 'react';
import {shallow} from 'enzyme';
import Number from '../Number';
import {isEqual} from 'lodash';

const defaultNumberProps = {
    pattern: '[0-9]',
    type: 'number',
};

const numberProps = {
    pattern: '^[9][0-9]?$|^999$',
    type: 'number'
};

describe('<Number />', () => {
    
    it('should render a <input /> component without being given any props', () => {
        const wrapper = shallow(<Number />);

        expect(wrapper.find('Input')).not.toBeUndefined()
    });

    it('should use default props when not given any props', () => {
        const wrapper = shallow(<Number />);

        expect(isEqual(defaultNumberProps, wrapper.props())).toBe(true);
    });

    it('should use custom props when provided', () => {
        const wrapper = shallow(<Number {...numberProps} />);

        expect(isEqual(numberProps, wrapper.props())).toBe(true);
    });
});