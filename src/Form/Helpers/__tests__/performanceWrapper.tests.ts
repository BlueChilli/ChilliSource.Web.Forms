import {HTMLAttributes} from 'react';
import {Map} from 'immutable';
import {getInputPath, getPrioritisedDefaultValue, getPrioritisedValue} from '../performanceWrapper';
import {isEqual, isArray} from 'lodash';

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
      expect(getPrioritisedValue(undefined, undefined, undefined, false)).toBe(false);
    });
  });
});
