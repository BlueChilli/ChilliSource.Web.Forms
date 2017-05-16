import React from "react";
import {validationsMessages, validationsAvailable} from "../../libs/validate";
import {ValidationElementProps, InputInfoProps, ValidationAdditionProps, ValidationCloneElementProps, DisplayValidationProps, TypeProp, TypeOfTest} from "../Form/Types/types"
import {ReactElement} from "../../libs/types"
import Validation from "../Validation/Validation";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";

type ValidationChild = React.ReactElement<ValidationElementProps>

type ValidationAdditionChild = React.ReactElement<ValidationAdditionProps>


const childrenValidations = (children:React.ReactNode) => {
  if (React.Children.count(children) > 0) {
    return React.Children.map<TypeOfTest>(children, (child:ValidationChild) => {
      return child.props.isFor;
    })
  }
  return [];
};

const isSwitch = (type?:TypeProp):boolean => {
  return type === "checkbox" || type === 'radio';
};

const validationsUnused = (validationsUsed:TypeOfTest[], validationsAvailable:TypeOfTest[], isSwitch:boolean):TypeOfTest[] => {
  return validationsAvailable.filter(validation => {
    if (validation === 'type' && isSwitch) return false;
    return validationsUsed.indexOf(validation) === -1;
  });
};

const DisplayValidation = ({children, disabled, inputInfo, noValidate, ...props} : PerformanceWrapperProps & DisplayValidationProps) => {
  const validationsAvail = validationsAvailable(props);
  const validationUsed = childrenValidations(children);
  const unusedValidations = validationsUnused(validationUsed, validationsAvail, isSwitch(props.type));
  if (disabled || noValidate) {
    return <span/>;
  }
  return (
    <div>
      {React.Children.map<ValidationAdditionChild>(children, (child:ValidationAdditionChild) => {
        const typeOfValidation = child.props.isFor;
        return React.cloneElement<ValidationAdditionProps, ValidationCloneElementProps>(child, {
          test: props[typeOfValidation],
          inputInfo,
          type: props.type,
          name: props.name,
          setValidation: props.setValidation
        });
      })}
      {unusedValidations.map<ValidationAdditionChild>((validation, index) => React.createElement(Validation as React.ComponentClass<ValidationAdditionProps>, {
        key: index,
        isFor: validation,
        test: props[validation],
        inputInfo,
        type: props.type,
        children: validationsMessages(validation, props[validation]),
        name: props.name,
        setValidation: props.setValidation
      }))}
    </div>
  );
};

export default DisplayValidation;

