import {Iterable} from "immutable";
import regExpList from "./validationRegExps";
import {ShallowCompareProps, ShallowCompare} from "./types";
import {Type, TypeProp, TypeOfTest, Tests, ValidationTypes} from "../src/Form/Types/types"


export const validations:ValidationTypes = {
  required: (value, test, type) => {
    if (Iterable.isIterable(value)) {
      if (type === 'checkbox') {
        return value.size > 0;
      }
    } else if (type === "checkbox") {
      return value === true;
    }
    return value.toString().length > 0 && value !== false;
  },
  pattern: (value, test) => {
    if(value !== undefined && value !== null && (value + "").length > 0){
      let patternRegExp = new RegExp(test);
      return patternRegExp.test(value);
    }
    return true;
  },
  type: (value, test) => {
    if(test === 'number' || test ==='email'){
      let typeRegExp = new RegExp(regExpList[test]);
      return typeRegExp.test(value);
    }
    return true;
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

export const validationsMessages = (type:string, test?:boolean | string | number) => {
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

export function testValidation(value:ShallowCompare, typeOfTest:TypeOfTest, typeOfInput:Type, test:Tests) {
  if (value !== undefined && value !== null) {
    if (validations[typeOfTest] !== undefined) {
      switch (typeOfTest){
        case "required":
          return validations[typeOfTest](value, test as boolean, typeOfInput);
        case "default":
          return validations[typeOfTest]();
        default: 
          validations[typeOfTest](value, test as string);
      }
    }
  }
  return validations['default']();
}

export function validationsAvailable<T>(inputAttributes:T) {
  const validationsAvail = Object.keys(validations) as (keyof ValidationTypes)[];
  return validationsAvail.filter(validation => inputAttributes.hasOwnProperty(validation) && validation !== 'default') as TypeOfTest[];
}

interface TestElementProps extends TypeProp{
  value:any,
  setValid: (value:boolean) => undefined
  test?: Tests,
  isFor: TypeOfTest | "customValidation",
}

export type TestElement = ({value, test, isFor, type, setValid}: TestElementProps) => void


const isValidHTMLValidation = (isFor):isFor is keyof ValidationTypes => {
  return Object.keys(validations).indexOf(isFor) !== -1
}

export const testElement:TestElement = ({value, test, isFor, type, setValid}) => {
  if (test === false || test === 'false') {
    return setValid(true);
  } else if (isValidHTMLValidation(isFor)) {
    return setValid(testValidation(value, isFor, type, test));
  } else {
    if (typeof test === "function") {
      const customValidation = test(value);
      console.log(customValidation);
      if (typeof customValidation === "boolean" || customValidation === "undefined") {
        return setValid(!!customValidation);
      } else if (customValidation instanceof Promise){
        customValidation.then(res => setValid(!!res)).catch(res => setValid(!!res));
        return setValid(true);
      } else {
         throw new Error("Custom validation functions must return a bool, undefined or a promise");
      }
    } 
    return setValid(false);
  }
}