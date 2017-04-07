import {is, Iterable} from "immutable";
import {isArray, isObject, isNaN, isFunction} from "lodash";
import {ShallowCompare, ShallowCompareProps} from "./types";


export default (...keysToTest: string[]) : Function => {
  /**
   * Creates a function that checks to see if the passed in properties are equal
   * {string} ...keysToTest - Properties to check if equal
   */
  return (props: ShallowCompareProps, nextProps: ShallowCompareProps) : boolean => {
    return keysToTest.every((value:string) => {
      const currentVal:ShallowCompare = props[value];
      const nextVal:ShallowCompare = nextProps[value];
      if (Iterable.isIterable(currentVal) || Iterable.isIterable(nextVal)) {
        return is(currentVal, nextVal);
      } else {
        if ((isArray(nextVal) || isObject(nextVal) || isNaN(nextVal)) && !isFunction(nextVal)) {
          throw new Error(`Specific shallow equal does not support plain old JS objects, Arrays and NaN: prop ${nextVal} is a ${typeof nextVal}`);
        }
        return currentVal === nextVal;
      }
    })
  }
};