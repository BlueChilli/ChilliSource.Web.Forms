/** Libraries */
import React from 'react';

/** Components */
import Validation from '../Validation/Validation';

/** Helpers */
import {validationsMessages, validationsAvailable} from '../../libs/validate';

const childrenValidations = (children: React.ReactNode) => {
  if (React.Children.count(children) > 0) {
    return React.Children.map<InputTest>(children, (child: ValidationChild) => {
      return child.props.isFor;
    })
  }
  return [];
}

const isSwitch = (type?: InputType): boolean => type === "checkbox" || type === 'radio';

const validationsUnused = (validationsUsed: InputTest[], validationsAvailable: InputTest[], isSwitch: boolean): InputTest[] => {
  return validationsAvailable.filter(validation => {
    if (validation === 'type' && isSwitch) return false;
    return validationsUsed.indexOf(validation) === -1;
  });
}

/** Interfaces */
import {ValidationElementProps, InputInfoProps, ValidationAdditionProps, ValidationCloneElementProps, 
        DisplayValidationProps, TypeProp, InputType, InputTest, PerformanceWrapperProps} from '../../typings/types.d';

type ValidationChild = React.ReactElement<ValidationElementProps>

type ValidationAdditionChild = React.ReactElement<ValidationAdditionProps>

/** Class DisplayValidation */
class DisplayValidation extends React.Component<PerformanceWrapperProps & DisplayValidationProps, undefined> {
  render() {
    const {children, disabled, inputInfo, noValidate, type, ...props} = this.props;

    const validationsAvail = validationsAvailable(props);
    const validationUsed = childrenValidations(children);
    const unusedValidations = validationsUnused(validationUsed, validationsAvail, isSwitch(type));

    if (disabled || noValidate) {
      return <noscript />;
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
  }
}

export default DisplayValidation;