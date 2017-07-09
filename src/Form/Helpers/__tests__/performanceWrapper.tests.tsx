import React, {HTMLAttributes, Component} from 'react';
import sinon from "sinon";
import {Map, fromJS} from 'immutable';
import {mount} from "enzyme";
import {getInputPath, getPrioritisedDefaultValue, getPrioritisedValue, updateLifcycle} from '../performanceWrapper';
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

    const WrappedComponent = updateLifcycle()(TestComponent);
   

    
    it('should call inputChanged when mounted', () => {
      let callback = sinon.spy();
      const wrapper = mount(<WrappedComponent inputChanged={callback} value={initalValue} FormState={Map()} defaultValue={initalValue}/>);
      
      expect(callback.calledWith(initalValue)).toBe(true);
    });
    
    it('should call inputChanged when value changed', () => {
      let callback = sinon.spy();
      const wrapper = mount(<WrappedComponent inputChanged={callback} value={initalValue} FormState={Map()} defaultValue={initalValue}/>);
      
      wrapper.setProps({value: updatedValue})
      expect(callback.calledWith(updatedValue)).toBe(true);
    });

    it('should call inputChanged when defaultValue changed', () => {
      let callback = sinon.spy();
      const wrapper = mount(<WrappedComponent inputChanged={callback} value={initalValue} FormState={Map()} defaultValue={initalValue}/>);
      
      wrapper.setProps({defaultValue: updatedDefaultValue})
      expect(callback.calledWith(updatedDefaultValue)).toBe(true);
    });

    it('should call inputChanged when the value doesnt exist in formsState changed', () => {
      let callback = sinon.spy();
      const nameSpace = "Input";
      const inputPath = ["field"]
      const FormState = Map().setIn([nameSpace, ...inputPath], initalValue);
      const wrapper = mount(<WrappedComponent value={initalValue} inputChanged={callback} nameSpace={nameSpace} inputPath={inputPath} FormState={FormState}/>);
      wrapper.setProps({FormState: Map()})
      expect(callback.calledWith(initalValue)).toBe(true);
    });
    
  });
});
