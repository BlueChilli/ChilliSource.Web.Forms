/**
 * This file tests both CalendarBase as well
 * as DatePicker since both exist in a single
 * file
 */

import React from 'react';
import moment from 'moment';
import sinon from 'sinon';
import {Map} from 'immutable';
import {shallow} from 'enzyme';
import {CalendarBase, DatePicker} from '../DatePicker';

const allDatePickerProps = {
    date: moment(),
    format: 'MMM D, YYYY',
    minDate: moment(),
    maxDate: moment().add(30, 'd'),
    defaultValue: moment(),
    inputChanged: () => ({}),
    close: () => ({})
};

describe('<CalendarBase />', () => {
    it('should have all the passed in props', () => {
        const wrapper = shallow(<CalendarBase {...allDatePickerProps} />);
        const {children, ...CalendarBaseProps} = wrapper.props();
        
        expect(Map(allDatePickerProps).isSubset(Map(CalendarBaseProps))).toBe(true);
    });

    it('should call onChange if passed in', () => {
        const date = moment();
        const onChange = sinon.spy();
        const wrapper = shallow(<CalendarBase {...allDatePickerProps} onChange={onChange} />);
        wrapper.simulate('change', date);

        expect(onChange.calledWith(date)).toBe(true);
    });
});

describe('<DatePicker />', () => {
    it('should have all the passed in props', () => {
        const wrapper = shallow(<DatePicker {...allDatePickerProps} />);
        const {children, ...DatePickerProps} = wrapper.props();
        
        expect(Map(allDatePickerProps).isSubset(Map(DatePickerProps))).toBe(true);
    });

    it('should have default value if passed in', () => {
        const wrapper = shallow(<DatePicker {...allDatePickerProps} />);
        const {valueString, ...remainingProps} = wrapper.props();

        expect(allDatePickerProps.defaultValue.isSame(moment(valueString), 'd')).toBe(true);
    });

    it('should have <CalendarBase /> as the only child', () => {
        const wrapper = shallow(<DatePicker {...allDatePickerProps} />);
        
        expect(wrapper.find('CalendarBase')).toHaveLength(1);
    });
});