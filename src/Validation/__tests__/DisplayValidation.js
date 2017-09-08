import React from 'react';
import sinon from "sinon";
import PropTypes from "prop-types";
import { shallow, mount, debug } from 'enzyme';
import { isEqual } from 'lodash';
import DisplayValidation from '../DisplayValidation.tsx'; 
import { Map } from "immutable";

describe("Validate ", () => {
    const mountOptions = {
        context: {
            nameSpace: "Input",
            FormState: Map(),
            dispatch: () => { }
        },
        childContextTypes: {
            nameSpace: PropTypes.string,
            FormState: PropTypes.object,
            dispatch: PropTypes.func,
        }
    }

    const defaultValue = "Input";
    const updatedDefaultValue = "Changed Input";
    const type = "text"
    const onChangeCallback = sinon.spy();
    const onBlurCallback = sinon.spy();
    const wrapper = mount(<Input {...allInputProps} onBlur={onBlurCallback} onChange={onChangeCallback} defaultValue={defaultValue} type={type} />, mountOptions)


    describe("Email Validation", () => {
        const input = wrapper.find('input')
        input.simulate('change', input)
        it('should set text ', () => {
            expect(input.prop('value') === "test@email.com").toBe(true);
        });
    })

    
});

