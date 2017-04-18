import {HTMLAttributes} from "react";
import {getHTMLAttributes, getInputPath} from "../performanceWrapper";
import {isEqual, isArray} from "lodash";

// required", "name", "type", "value", "min", "max", "minLength", "maxLength"

const supportedProps = {
  min: 30,
  max: 25,
  value: true,
  id: "test",
  autoFocus: true,
  required: true,
  name: "input",
  type: "input",
  minLength: 5,
  maxLength: 1000,
  pattern: "[0-9]"
}

const unsupportedProps = {
  misc: 'here',
  another: true
}

const inputPathFieldsetProps = {
  fieldSetNameSpace: 'fieldset',
  name: "name"
}

const inputPathInputArrayProps = {
  name: 'name[]',
  id: "id"
}

const inputPathPlainProps = {
  name: "name"
}


describe("perfomanceWraper", () => {
  describe("getHTMLAttributes", () => {
    it("returns all supported attributes", () => {
      const returnedSupportedProps = getHTMLAttributes()(supportedProps);
      expect(isEqual(supportedProps, returnedSupportedProps)).toBe(true);
    })
    it("excludes unsupported attributes", () => {
      const returnedSupportedProps = getHTMLAttributes()(Object.assign({}, supportedProps, unsupportedProps))
      expect(isEqual(supportedProps, returnedSupportedProps)).toBe(true);
    })
  })
  describe("getInputPath", () => {
    it('always returns an array', () => {
      const inputPathFieldset = getInputPath(inputPathFieldsetProps)();
      const inputPathArray = getInputPath(inputPathInputArrayProps)();
      const inputPathPlain = getInputPath(inputPathPlainProps)();
      
      expect(isArray(inputPathFieldset)).toBe(true);
      expect(isArray(inputPathArray)).toBe(true);
      expect(isArray(inputPathPlain)).toBe(true);
    });
    it("namespaces fieldsets", () => {
      const inputPath = getInputPath(inputPathFieldsetProps)();
      expect(isEqual(inputPath, ['fieldset', 'name'])).toBe(true);
    });
    it("namespaces input arrays", () => {
      const inputPath = getInputPath(inputPathInputArrayProps)();
      expect(isEqual(inputPath, ['name[]', 'id'])).toBe(true);
    });
    it("does not namespace plain inputs", () => {
      const inputPath = getInputPath(inputPathPlainProps)();
      expect(isEqual(inputPath, ['name'])).toBe(true);
    });
  })
})