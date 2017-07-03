import {isEqual, isUndefined} from "lodash";
import {returnCheckedValue, isMultipleValueInput, getHTMLAttributes} from "../inputHelpers";

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


describe("returnCheckedValue()", () => {
  it('should return undefined when no valid argument is passed', () => {
    expect(returnCheckedValue((arg) => !isUndefined(arg), undefined, undefined, undefined, undefined)).toBe(undefined)
  });
  it('should return first valid argument', () => {
    const firstValue = true;
    expect(returnCheckedValue((arg) => !isUndefined(arg), undefined, firstValue, '', undefined)).toBe(firstValue);
  });
  it('should return first valid argument when it is last', () => {
    const firstValue = true;
    expect(returnCheckedValue((arg) => !isUndefined(arg), undefined, undefined, undefined, firstValue)).toBe(firstValue);
  });
});

describe("isMultipleValueInput", () => {
  it('should return true when input has [] appended', () => {
    expect(isMultipleValueInput('input[]')).toBe(true);
  });
  it('should return false when input has [] in the middle of name', () => {
    expect(isMultipleValueInput('inpu[]t')).toBe(false);
  });
  it('should return false when input has no []', () => {
    expect(isMultipleValueInput('input')).toBe(false);
  });
});

 describe("getHTMLAttributes", () => {
  it("returns all supported attributes", () => {
    const returnedSupportedProps = getHTMLAttributes(supportedProps);
    expect(isEqual(supportedProps, returnedSupportedProps)).toBe(true);
  })
  it("excludes unsupported attributes", () => {
    const returnedSupportedProps = getHTMLAttributes(Object.assign({}, supportedProps, unsupportedProps))
    expect(isEqual(supportedProps, returnedSupportedProps)).toBe(true);
  })
});



