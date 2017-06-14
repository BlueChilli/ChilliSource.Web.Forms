import React from "react";
import PropTypes from "prop-types";
import {pick} from "lodash";
import {ShallowCompare, BaseReactProps} from "../../../libs/types";
import {PossibleDefaultValues, PossibleValues, ValueProp, TypeProp, IdProp, InputValidationProps, NameProp} from "../Types/types";

interface PickedAttrs {
  [name: string]: any
}


export const isMultipleValueInput = (inputName:string):boolean => {
  return inputName.search(/\[\]$/) !== -1;
}


/** Returns the first variable to satisfy the check function */
export function returnCheckedValue<T>(check:(arg:T) => boolean, ...args:T[]){
  const innerReturnCheckedValue = (index = 0):T|undefined => {
    if (index === args.length) {
      return undefined;
    } else if (check(args[index])) {
      return args[index];
    }
    return innerReturnCheckedValue(index + 1);
  };
  return innerReturnCheckedValue();
};


interface GetHTMLAttributesGuard extends ValueProp<PossibleValues>, BaseReactProps, TypeProp, IdProp{}

export const getHTMLAttributes = <T extends GetHTMLAttributesGuard> (props:T) => {
  const safeProps = pick<PickedAttrs, T>(props, "id", "autoFocus", "required", "name", "type", "value", "min", "max", "minLength", "maxLength", "pattern", "accept", "multiple");
  return safeProps;
}

