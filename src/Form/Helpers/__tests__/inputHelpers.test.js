import React from "react";
import {returnDefinedValue, isMultipleValueInput} from "../inputHelpers";

describe("returnDefinedValue()", () => {
  it('should return undefined when no valid argument is passed', () => {
    expect(returnDefinedValue(undefined, undefined, undefined, undefined)).toBe(undefined)
  });
  it('should return first valid argument', () => {
    const firstValue = true;
    expect(returnDefinedValue(undefined, firstValue, '', undefined)).toBe(firstValue);
  });
  it('should return first valid argument when it is last', () => {
    const firstValue = true;
    expect(returnDefinedValue(undefined, undefined, undefined, firstValue)).toBe(firstValue);
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



