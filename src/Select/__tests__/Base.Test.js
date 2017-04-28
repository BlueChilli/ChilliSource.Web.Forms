import React from 'react';
import {List} from 'immutable';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import SelectBase from '../Base';

const children = ['Pash', 'Shane', 'Jeremy', 'Mitch', 'Mick']
                .map((person, key) => <option key={key} value={person}>{person}</option>);

const allSelectBaseProps = {
    children,
    arrow: <div className="select-arrow" />,
    className: 'SelectBaseClass',
    name: 'SelectBaseName',
    label: 'SelectBase Label',
    labelPrefix: 'Label Prefix',
    labelPostfix: 'Label Postfix',
    value: 'Pash',
    inputChanged: value => ({})
};

describe('<SelectBase />', () => {
    
    it('should render a <select /> component', () => {
        const wrapper = shallow(<SelectBase {...allSelectBaseProps} />);
        expect(wrapper.find('select')).toHaveLength(1);
    });

    it('should have all the children passed in', () => {
        const wrapper = shallow(<SelectBase {...allSelectBaseProps} />);
        expect(wrapper.find('select').children()).toHaveLength(5);
    });

    it('should have default value as specified', () => {
        const wrapper = shallow(<SelectBase {...allSelectBaseProps} />);
        expect(wrapper.prop('value')).toBe('Pash');
    });

    it('should call onChange if passed in', () => {
        const onChange = sinon.spy();
        const wrapper = shallow(<SelectBase {...allSelectBaseProps} onChange={onChange} />);
        const event = {
            target: {
                value: 'Shane'
            }
        };
        wrapper.simulate('change', event);

        expect(onChange.calledWith(event)).toBe(true);
    });
});