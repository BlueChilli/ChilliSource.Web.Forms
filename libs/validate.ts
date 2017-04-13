import {Iterable} from "immutable";
import regExpList from "./validationRegExps";
import {ShallowCompareProps} from "./types";

export const validations = {
  required: (value, test, type) => {
    if (Iterable.isIterable(value)) {
      if (type === 'checkbox') {
        return value.some(innerVal => {
          return innerVal.get('value', false);
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
    let typeRegExp = new RegExp(regExpList[test]);
    return typeRegExp.test(value);
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

export const validationsMessages = (type, test) => {
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

export function testValidation(value, test, typeOfTest, typeOfInput) {
  if (value !== undefined && value !== null) {
    if (validations[typeOfTest] !== undefined) {
      return validations[typeOfTest](value, test, typeOfInput);
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
  setValid: (boolean) => undefined
  test: string | boolean,
  isFor: string,
  type: string
}


export const testElement = ({value, test, isFor, type, setValid}: TestElementProps) => {
  if (test === false || test === 'false') {
    return setValid(true);
  } else if (isFor !== 'customValidation') {
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