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

describe("perfomanceWraper", () => {
  describe("getInputPath", () => {
    it('always returns an array', () => {
      const inputPathFieldset = getInputPath(inputPathFieldsetProps)();
      const inputPathArray = getInputPath(inputPathInputArrayProps)();
      const inputPathPlain = getInputPath(inputPathPlainProps)();
      expect(isArray(inputPathFieldset)).toBe(true);
      expect(isArray(inputPathArray)).toBe(true);
      expect(isArray(inputPathPlain)).toBe(true);
    });
    it('namespaces fieldsets', () => {
      const inputPath = getInputPath(inputPathFieldsetProps)();
      expect(isEqual(inputPath, ['fieldset', 'name'])).toBe(true);
    });
    it('namespaces input arrays', () => {
      const inputPath = getInputPath(inputPathInputArrayProps)();
      expect(isEqual(inputPath, ['name[]', 'id'])).toBe(true);
    });
    it('does not namespace plain inputs', () => {
      const inputPath = getInputPath(inputPathPlainProps)();
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

})