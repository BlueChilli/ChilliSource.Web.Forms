import React, {PropTypes} from "react";
import {isUndefined} from "lodash";
import {ShallowCompare} from "../../../libs/types";
import {PossibleDefaultValues} from "../Types/types";

export const isMultipleValueInput = (inputName:string):boolean => {
  return inputName.search(/\[\]$/) !== -1;
}

export function returnDefinedValue<T>(...args:T[]){
  const innerReturnDefinedValue = (index = 0):T => {
    // console.log(args[index])
    if (index === args.length) {
      return undefined;
    } else if (!isUndefined(args[index])) {
      return args[index];
    }
    return innerReturnDefinedValue(index + 1);
  };
  return innerReturnDefinedValue();
};

