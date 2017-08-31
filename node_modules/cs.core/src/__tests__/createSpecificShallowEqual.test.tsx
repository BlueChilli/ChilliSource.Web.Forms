import React from "react";
import createIsSpecificShallowEqual from "../createSpecificShallowEqual";
import {Map, List} from "immutable";
import moment from "moment";

const ReactElement = ({name}:{name?: string}) => <span className={name}></span>

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

const currentPropsArr = {
  name: [],
}

const returnFunctionTrue = (x) => () => true;
const returnFunctionFalse = (x) => () => false;

const currentPropsFunction = {
  name: () => true,
}

const nextPropsFunction = {
  name: () => false,
}

const currentPropsFunctionReturn = {
  name: returnFunctionTrue,
}

const nextPropsFunctionReturn = {
  name: returnFunctionFalse,
}

const currentPropsDom = {
  name: (<span></span>),
};

const nextPropsDom = {
  name: (<span>label</span>),
};

const currentPropsMoment = {
  name: moment("2011/10/31", "YYYY/MM/DD"),
};

const nextPropsMoment = {
  name: moment("2011/11/31", "YYYY/MM/DD"),
};

const currentPropsReactDom = {
  name: (<ReactElement/>)
};

const nextPropsReactDom = {
  name: (<ReactElement name="test"></ReactElement>)
};

const currentPropsFile = {
  name: new File([], 'Simple File'),
  required: true,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};

const nextPropsFile = {
  name: new File(['1'], 'Simple File'),
  required: true,
  inputInfo: Map({
    value: '1',
    blurred: true
  })
};


describe('createIsSpecificShallowEqual()', () => {
  const isSpecificShallowEqual = createIsSpecificShallowEqual<any>("name", "required", "inputInfo");
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
    it('compares identical DOM nodes', () => {
      expect(isSpecificShallowEqual(currentPropsDom, currentPropsDom)).toBe(true);
    });

    it('compares different dates', () => {
      expect(isSpecificShallowEqual(currentPropsMoment, nextPropsMoment)).toBe(false);
    });
    it('compares identical dates', () => {
      expect(isSpecificShallowEqual(currentPropsMoment, currentPropsMoment)).toBe(true);
    });

    it('compares different ReactDOM nodes: child is different', () => {
      expect(isSpecificShallowEqual(currentPropsReactDom, nextPropsReactDom)).toBe(false);
    });
    it('compares identical ReactDOM nodes', () => {
      expect(isSpecificShallowEqual(currentPropsReactDom, currentPropsReactDom)).toBe(true);
    });

    it('compares different ReactDOM nodes: child is different', () => {
      expect(isSpecificShallowEqual(currentPropsReactDom, nextPropsReactDom)).toBe(false);
    });
    it('compares identical ReactDOM nodes', () => {
      expect(isSpecificShallowEqual(currentPropsReactDom, currentPropsReactDom)).toBe(true);
    });

    it('compares different functions', () => {
      expect(isSpecificShallowEqual(currentPropsFunction, nextPropsFunction)).toBe(false);
    });
    it('compares identical child functions', () => {
      expect(isSpecificShallowEqual(currentPropsFunction, currentPropsFunction)).toBe(true);
    });

    it('compares different functions that returns functions', () => {
      expect(isSpecificShallowEqual(currentPropsFunctionReturn, nextPropsFunctionReturn)).toBe(false);
    });
    it('compares identical child functions that return functions', () => {
      expect(isSpecificShallowEqual(currentPropsFunctionReturn, currentPropsFunctionReturn)).toBe(true);
    });

    it('compares different Files: file is different', () => {
      expect(isSpecificShallowEqual(currentPropsFile, nextPropsFile)).toBe(false);
    });
    it('compares identical Files', () => {
      expect(isSpecificShallowEqual(currentPropsFile, currentPropsFile)).toBe(true);
    });

    it('compares throwing objects: NaN doesn\'t throw', () => {
      expect(() => isSpecificShallowEqual(currentPropsNan, currentPropsNan)).toThrowError();
    });
    it('compares throwing objects: object doesn\'t throw', () => {
      expect(() => isSpecificShallowEqual(currentPropsObj as any, currentPropsObj as any)).toThrowError();
    });
    it('compares throwing arr: object array\'t throw', () => {
      expect(() => isSpecificShallowEqual(currentPropsArr as any, currentPropsArr as any)).toThrowError();
    });
  });
});
