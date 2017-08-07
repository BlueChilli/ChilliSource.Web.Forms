import React from "react";
import {validationsMessages, validationsAvailable} from "../../libs/validate";
import {ValidationElementProps, InputInfoProps, ValidationAdditionProps, ValidationCloneElementProps, 
  DisplayValidationProps, TypeProp, InputType, InputTest, PerformanceWrapperProps} from "../../index.d"
// import {ReactElement} from "../../libs/types"
import Validation from "../Validation/Validation";

type ValidationChild = React.ReactElement<ValidationElementProps>

type ValidationAdditionChild = React.ReactElement<ValidationAdditionProps>


const childrenValidations = (children:React.ReactNode) => {
  if (React.Children.count(children) > 0) {
    return React.Children.map<InputTest>(children, (child:ValidationChild) => {
      return child.props.isFor;
    })
  }
  return [];
};

const isSwitch = (type?: InputType): boolean => {
  return type === "checkbox" || type === 'radio';
};

const validationsUnused = (validationsUsed: InputTest[], validationsAvailable: InputTest[], isSwitch:boolean): InputTest[] => {
  return validationsAvailable.filter(validation => {
    if (validation === 'type' && isSwitch) return false;
    return validationsUsed.indexOf(validation) === -1;
  });
};

const DisplayValidation = ({children, disabled, inputInfo, noValidate, type, ...props} : PerformanceWrapperProps & DisplayValidationProps) => {
  const validationsAvail = validationsAvailable(props);
  const validationUsed = childrenValidations(children);
  const unusedValidations = validationsUnused(validationUsed, validationsAvail, isSwitch(type));
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
          type: type,
          name: props.name,
          setValidation: props.setValidation
        });
      })}
      {unusedValidations.map<ValidationAdditionChild>((validation, index) => React.createElement(Validation as React.ComponentClass<ValidationAdditionProps>, {
        key: index,
        isFor: validation,
        test: props[validation],
        inputInfo,
        type: type,
        children: validationsMessages(validation, props[validation]),
        name: props.name,
        setValidation: props.setValidation
      }))}
    </div>
  );
};

export default DisplayValidation;

