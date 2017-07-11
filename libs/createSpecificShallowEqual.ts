import {isValidElement} from "react";
import ReactDOMServer from "react-dom/server";
import {is, Iterable} from "immutable";
import {isArray, isObject, isNaN, isFunction} from "lodash";
import {ShallowCompare, ShallowCompareProps} from "./types";

export const isNotComparable = prop => (isArray(prop) || isObject(prop) || isNaN(prop)) && !(isFunction(prop) || prop instanceof File);

export const notValidError = (keyToTest, value) => new Error(`Specific shallow equal does not support plain old JS objects, Arrays and NaN: prop ${keyToTest} is a ${typeof value}`);


const createSpecificShallowEqual =<TProps = ShallowCompareProps> (...keysToTest: string[]) => {
  /**
   * Creates a function that checks to see if the passed in properties are equal
   * {string} ...keysToTest - Properties to check if equal
   */
  return (props: TProps, nextProps: TProps) => {
    return keysToTest.every((keyToTest:keyof TProps) => {
      const currentVal:ShallowCompare = props[keyToTest];
      const nextVal:ShallowCompare = nextProps[keyToTest];
      if (Iterable.isIterable(currentVal) || Iterable.isIterable(nextVal)) {
        return is(currentVal, nextVal);
      } else if(isValidElement(nextVal)) {
        const currentString = ReactDOMServer.renderToStaticMarkup(currentVal);
        const nextString = ReactDOMServer.renderToStaticMarkup(nextVal);
        return currentString === nextString;
      } else {
        if (isNotComparable(nextVal)) {
          throw notValidError(keysToTest, nextVal);
        }
        return currentVal === nextVal;
      }
    })
  }
};



export default createSpecificShallowEqual;