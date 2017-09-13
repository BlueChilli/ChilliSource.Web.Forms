import React, {HTMLAttributes, Component} from 'react';
import sinon from "sinon";
import {Map, fromJS} from 'immutable';
import {mount, shallow} from "enzyme";
import {getInputPath, getPrioritisedDefaultValue, getPrioritisedValue, updateLifcycle, withNeededProps} from '../performanceWrapper';
import {isEqual, isArray} from 'lodash';

class TestComponent extends Component<any, {}> {
  render() {
    return (<div/>)
  }
} 

const inputPathFieldsetProps = {
  fieldSetNameSpace: 'fieldset',
  name: 'name'
}

const inputPathInputArrayProps = {
  name: 'name[]',
  id: 'id'
}

const inputPathPlainProps = {
  name: 'name'
}

describe('performanceWrapper', () => {
  // input path
  describe('getInputPath', () => {

    it('should always return inputPath as an array', () => {
      const inputPathFieldset = getInputPath('input', inputPathFieldsetProps);
      const inputPathArray = getInputPath('input', inputPathInputArrayProps);
      const inputPathPlain = getInputPath('input', inputPathPlainProps);

      expect(isArray(inputPathFieldset)).toBe(true);
      expect(isArray(inputPathArray)).toBe(true);
      expect(isArray(inputPathPlain)).toBe(true); //['name[]','input', 'id']
    });

    it('should include fieldset name in the inputPath', () => {
      const inputPath = getInputPath('input', inputPathFieldsetProps);
      expect(isEqual(inputPath, ['fieldset', 'name'])).toBe(true);
    });

    it('should includes array-formatted name(i.e. _name_[]) in the inputPath', () => {
      const inputPath = getInputPath('input', inputPathInputArrayProps);
      expect(isEqual(inputPath, ['name[]', 'input', 'id'])).toBe(true);
    });

    it('should not namespace plain inputs', () => {
      const inputPath = getInputPath('input', inputPathPlainProps);
      expect(isEqual(inputPath, ['name'])).toBe(true);
    });
  });

  describe('getPrioritisedDefaultValue', () => {
    
    it('should prioritise defaultValue', () => {
      expect(getPrioritisedDefaultValue('defaultValue', 'defaultChecked', 'defaultSelected')).toBe('defaultValue');
    });
    
    it('should prioritise defaultChecked', () => {
      expect(getPrioritisedDefaultValue(undefined, 'defaultChecked', 'defaultSelected')).toBe('defaultChecked');
    });
    
    it('should prioritise defaultSelected', () => {
      expect(getPrioritisedDefaultValue(undefined, undefined, 'defaultSelected')).toBe('defaultSelected');
    });
  });

  describe('getPrioritisedValue', () => {
    
    it('should prioritise value', () => {
      expect(getPrioritisedValue('value', 'inputInfoValue', 'prioritisedDefaultValue', false)).toBe('value');
    });
    
    it('should prioritise inputInfoValue', () => {
      expect(getPrioritisedValue(undefined, 'inputInfoValue', 'prioritisedDefaultValue', false)).toBe('inputInfoValue');
    });
    
    it('should prioritise prioritisedDefaultValue', () => {
      expect(getPrioritisedValue(undefined, undefined, 'prioritisedDefaultValue', false)).toBe('prioritisedDefaultValue');
    });
    
    it('should prioritise unsetValue', () => {
      expect(getPrioritisedValue(undefined, undefined, undefined, "")).toBe("");
    });
  });

  describe('updateLifecycle', () => {

    const initalValue = "inital";
    const updatedValue = "updated";
    const updatedDefaultValue = "updatedDefault";

    const nameSpace = "Input";
    const inputPath = ["field"]
    const FormState = Map().setIn([nameSpace, ...inputPath], initalValue);

    const WrappedComponent = updateLifcycle()(TestComponent);
    
    it('should call inputChanged with correct value and field state when mounted', () => {
      let callback = sinon.spy();
      const wrapper = shallow(<WrappedComponent inputChanged={callback} value={initalValue} nameSpace={nameSpace} inputPath={inputPath} FormState={FormState}/>);
      
      expect(callback.calledWithExactly(initalValue, false)).toBe(true);
    });

     it('should call inputChanged with correct value and field state when defaultValue changed', () => {
      let callback = sinon.spy();
      const wrapper = shallow(<WrappedComponent inputChanged={callback} value={initalValue} nameSpace={nameSpace} inputPath={inputPath} FormState={FormState}/>);
      
      wrapper.setProps({defaultValue: updatedDefaultValue})
      expect(callback.calledWithExactly(updatedDefaultValue, false)).toBe(true);
    });
    
    it('should call inputChanged with correct value and field state when value changed', () => {
      let callback = sinon.spy();
      const wrapper = shallow(<WrappedComponent inputChanged={callback} value={initalValue} nameSpace={nameSpace} inputPath={inputPath} FormState={FormState}/>);
      
      wrapper.setProps({value: updatedValue})
      expect(callback.calledWithExactly(updatedValue, true)).toBe(true);
    });
    
    it('should call inputChanged with correct value and field state when both defaultValue and value change', () => {
      let callback = sinon.spy();
      const wrapper = shallow(<WrappedComponent inputChanged={callback} value={initalValue} nameSpace={nameSpace} inputPath={inputPath} FormState={FormState}/>);
      
      wrapper.setProps({defaultValue:updatedDefaultValue, value: updatedValue});
      expect(callback.secondCall.calledWithExactly(updatedDefaultValue, false)).toBe(true);
      expect(callback.lastCall.calledWithExactly(updatedValue, true)).toBe(true);
    });

    it('should call inputChanged with correct value and field state when the value doesnt exist in FormState', () => {
      let callback = sinon.spy();
      const wrapper = shallow(<WrappedComponent value={initalValue} inputChanged={callback} nameSpace={nameSpace} inputPath={inputPath} FormState={FormState}/>);
      wrapper.setProps({FormState: Map()})
      expect(callback.calledWithExactly(initalValue, false)).toBe(true);
    });
  });

  describe('withNeedeProps', () => {
    const WrappedComponent = withNeededProps<any>()(TestComponent);
    it("should throw if nameSpace is undefined", () => {
      expect(() => {
        mount(<WrappedComponent inputPath={["test"]} FormState={Map()} name="withNeededProps"/>)
      }).toThrow();
      expect(() => {
        mount(<WrappedComponent nameSpace="Test" inputPath={["test"]} FormState={Map()} name="withNeededProps"/>)
      }).not.toThrow();
    })

  });
});
