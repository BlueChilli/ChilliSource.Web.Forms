import React from "react";
import PropTypes from "prop-types";
import {isUndefined, pick} from "lodash";
import {ShallowCompare, BaseReactProps} from "../../../libs/types";
import {PossibleDefaultValues, PossibleValues, ValueProp, TypeProp, IdProp} from "../Types/types";

export const isMultipleValueInput = (inputName:string):boolean => {
  return inputName.search(/\[\]$/) !== -1;
}

export function returnDefinedValue<T>(...args:T[]){
  const innerReturnDefinedValue = (index = 0):T|undefined => {
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


interface GetHTMLAttributesGuard extends ValueProp<PossibleValues>, BaseReactProps, TypeProp, IdProp{}

export const getHTMLAttributes = <T extends GetHTMLAttributesGuard> (props:T) => {
  const {children} = props
  const safeProps = pick<React.HTMLAttributes<any>, T>(props, "id", "autoFocus", "required", "name", "type", "value", "min", "max", "minLength", "maxLength", "pattern");
  return safeProps;
}

