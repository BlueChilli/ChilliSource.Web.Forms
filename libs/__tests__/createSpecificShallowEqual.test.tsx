import React from "react";
import createIsSpecificShallowEqual from "../createSpecificShallowEqual";
import {Map, List} from "immutable";

const keysToTest = ["name", "required", "inputInfo", "children"];

const currentProps = {
  name: "Shane",
  required: true,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};

const nextPropsFailBool = {
  name: "Shane",
  required: false,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};

const nextPropsFailString = {
  name: "Peter",
  required: true,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};

const nextPropsFailImmut = {
  name: "Peter",
  required: true,
  inputInfo: Map({
    value: '1',
    blured: true
  })
};

const currentPropsNan = {
  name: NaN,
}

const currentPropsObj = {
  name: {},
}

const currentPropsDom = {
  children: List([<span></span>]),
  required: true,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};

const nextPropsDom = {
  children: List([<span>label</span>]),
  required: true,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};


describe('createIsSpecificShallowEqual()', () => {
  const isSpecificShallowEqual = createIsSpecificShallowEqual(...keysToTest);
  it('returns a function', () => {
    expect(isSpecificShallowEqual).toBeInstanceOf(Function);
  });
  describe('isSpecificShallowEqual()', () => {
    it('compares identical objects', () => {
      expect(isSpecificShallowEqual(currentProps, currentProps)).toBe(true);
    });
    it('compares different objects: bool is different', () => {
      expect(isSpecificShallowEqual(currentProps, nextPropsFailBool)).toBe(false);
    });
    it('compares different objects: string is different', () => {
      expect(isSpecificShallowEqual(currentProps, nextPropsFailString)).toBe(false);
    });
    it('compares different DOM nodes: child is different', () => {
      expect(isSpecificShallowEqual(currentPropsDom, nextPropsDom)).toBe(false);
    });
    it('compares throwing objects: NaN doesn\'t throw', () => {
      expect(() => isSpecificShallowEqual(currentPropsNan, currentPropsNan)).toThrowError();
    });
    it('compares throwing objects: object doesn\'t throw', () => {
      expect(() => isSpecificShallowEqual(currentPropsObj, currentPropsObj)).toThrowError();
    });
  });
});
