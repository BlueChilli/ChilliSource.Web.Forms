import {Iterable} from "immutable";
import regExpList from "./validationRegExps";
import {ShallowCompareProps, ShallowCompare} from "./types";
import {TypeProp} from "../src/Form/Types/types"

type Test = boolean | string

export type TypeOfTest = "required" | "pattern" | "type" | "minLength" | "maxLength" | "min" | "max";

interface ValidationTypes {
  required: (value:ShallowCompare, test:boolean, type:TypeProp) => boolean,
  pattern: (value:ShallowCompare, test:string) => boolean,
  type: (value:ShallowCompare, test: string) => boolean,
  minLength: (value:ShallowCompare, test:string) => boolean,
  maxLength: (value:ShallowCompare, test:string) => boolean,
  min: (value:ShallowCompare, test:string) => boolean,
  max: (value:ShallowCompare, test:string) => boolean,
  default: () => false,
}


export const validations:ValidationTypes = {
  required: (value, test, type) => {
    if (Iterable.isIterable(value)) {
      if (type === 'checkbox') {
        return value.some((innerVal:Map<string, {}>) => {
          return innerVal.get('value') || false;
        });
      } else {
        return value.size > 0;
      }
    } else if (type === "checkbox") {
      return value === true;
    }
    return value.toString().length > 0
  },
  pattern: (value, test) => {
    let patternRegExp = new RegExp(test);
    return patternRegExp.test(value);
  },
  type: (value, test) => {
    if(test === 'number' || test ==='email'){
      let typeRegExp = new RegExp(regExpList[test]);
      return typeRegExp.test(value);
    } else{
      return true;
    }
  },
  minLength: (value, test) => {
    return value.toString().length >= parseInt(test);
  },
  maxLength: (value, test) => {
    return value.toString().length <= parseInt(test);
  },
  min: (value, test) => {
    return parseInt(value) >= parseInt(test)
  },
  max: (value, test) => {
    return parseInt(value) <= parseInt(test)
  },
  'default': () => {
    return false;
  }
};

export const validationsMessages = (type:string, test:boolean | string) => {
  switch (type) {
    case "required":
      return `This is a required field.`;
    case "minLength":
      return `This is too short, it must have at least ${test} characters.`;
    case "maxLength":
      return `This is too long, it cannot have more then ${test} characters.`;
    case "min":
      return `This must be at least ${test}.`;
    case "max":
      return `This must not be greater than ${test}.`;
    case "type":
      return `That's not a valid ${test}.`;
    default:
      return `It looks like something went wrong. Try again?`;
  }
};

export function testValidation(value:ShallowCompare, test:Test, typeOfTest:TypeOfTest, typeOfInput:TypeProp) {
  if (value !== undefined && value !== null) {
    if (validations[typeOfTest] !== undefined) {
      if(typeOfTest === 'required'){
        return validations[typeOfTest](value, test as boolean, typeOfInput);
      } else {
        return validations[typeOfTest](value, test as string);
      }
    } else {
      return validations['default']();
    }
  }
  return validations['default']();
}

export function validationsAvailable<T>(inputAttributes:T) :string[] {
  const validationsAvail:string[] = Object.keys(validations);
  return validationsAvail.filter(validation => inputAttributes.hasOwnProperty(validation));
}

interface TestElementProps {
  value:any,
  setValid: (value:boolean) => undefined
  test: string | boolean | Function,
  isFor: TypeOfTest | "customValidation",
  type: string
}

export type TestElement = ({value, test, isFor, type, setValid}: TestElementProps) => void

export const testElement:TestElement = ({value, test, isFor, type, setValid}) => {
  if (test === false || test === 'false') {
    return setValid(true);
  } else if (isFor !== 'customValidation' && typeof test !== "function") {
    return setValid(testValidation(value, test, isFor, type));
  } else {
    if (typeof test === "function") {
      const customValidation = test(value);
      if (typeof customValidation === "boolean" || customValidation === "undefined") {
        return setValid(!!customValidation);
      } else if (customValidation instanceof Promise){
        customValidation.then(res => setValid(!!res)).catch(res => setValid(!!res));
        return setValid(true);
      } else {
        return console.error("Custom validation functions must return a bool, undefined or a promise");
      }
    } 
    return setValid(false);
  }
}