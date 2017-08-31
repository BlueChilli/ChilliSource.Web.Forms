import {isValidElement, ReactNode, ReactElement} from "react";
import ReactDOMServer from "react-dom/server";
import {is, Iterable} from "immutable";
import {isArray, isObject, isNaN, isFunction} from "lodash";
import {isMoment, Moment} from "moment";

export type SpecificShallowEqualType<T> = {
  [P in keyof T]: string | number | Function | Iterable<any, any> | ReactNode | File | boolean | Moment
}

const createSpecificShallowEqual =<TProps> (...keysToTest: (keyof TProps)[]) => {
  /**
   * Creates a function that checks to see if the passed in properties are equal
   * {string} ...keysToTest - Properties to check if equal
   */
  return (props: SpecificShallowEqualType<TProps>, nextProps: SpecificShallowEqualType<TProps>) => {
    return keysToTest.every(keyToTest => {
      const currentVal = props[keyToTest];
      const nextVal = nextProps[keyToTest];
      if (Iterable.isIterable(currentVal) || Iterable.isIterable(nextVal)) {
        return is(currentVal, nextVal);
      } else if(isValidElement(nextVal)) {
        const currentString = ReactDOMServer.renderToStaticMarkup(currentVal as ReactElement<any>);
        const nextString = ReactDOMServer.renderToStaticMarkup(nextVal);
        return currentString === nextString;
      } else {
        if(isFunction(nextVal)){
          return currentVal + "" === nextVal + "";
        }
        else if(isMoment(nextVal)){
          return nextVal.isSame(currentVal as Moment)
        }
        else if ((isArray(nextVal) || isObject(nextVal) || isNaN(nextVal)) && !(nextVal instanceof File)) {
          throw new Error(`Specific shallow equal does not support plain old JS objects, Arrays and NaN: prop ${keyToTest} is a ${typeof nextVal}`);
        }
        return currentVal === nextVal;
      }
    })
  }
};


export default createSpecificShallowEqual;