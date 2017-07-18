import React, {ComponentType} from "react";
import {Map} from "immutable"
import {withProps, mapProps, shouldUpdate, ComponentEnhancer, InferableComponentEnhancer, compose, withState, withHandlers, lifecycle} from "recompose";
import classnames from "classnames";
import {testElement, validations, TestElement, ValidationTypes} from "../../libs/validate";
import "./Validation.scss";
import {isMultipleValueInput, returnCheckedValue} from "../Form/Helpers/inputHelpers";
import {createSpecificShallowEqual} from "cs.core";
import {ValidationAdditionProps, TextInputProps, ValidationInnerElementProps, ValueProp, TypeProp, PossibleValues, Tests} from "../Form/Types/types";
import {ShallowCompare} from "../../libs/types";




interface ValidationInternalAdditionProps extends ValidationAdditionProps{
  value:ValueProp<PossibleValues>,
  valid: boolean
}

interface ValidationMapProps extends ValidationAdditionProps{
  changed:boolean,
  value:ValueProp<PossibleValues>
}


interface ValidationWithStateProps extends ValidationMapProps{
  valid: boolean,
  setValid: (valid:boolean) => undefined,
  typeOfValidation: string
}

interface TestHandersUncalledInterface {
  testElement: () => TestElement
}

interface TestHandersInterface {
  testElement: TestElement
}

interface ValidationLifecycleProps extends ValidationMapProps, TestHandersInterface {}


export interface ValidationComponentProps {
  isFor: string
}


const specificShallowEqual = createSpecificShallowEqual<ValidationMapProps & TypeProp>('value', 'changed', 'type');
const specificShallowEqualDisplayed = createSpecificShallowEqual<{displayed: boolean, className:string}>('displayed', 'className');
const specificShallowEqualTestElement = createSpecificShallowEqual<{value: ValueProp<PossibleValues>, typeOfValidation: string, type?: string}>("value", "typeOfValidation", "type");
const availableValidationsShallowEqual = createSpecificShallowEqual<any>("isFor", "test", ...Object.keys(validations));



const Validation = ({displayed, className, children}:ValidationInnerElementProps) => {
  const classes = classnames('validation', className, {
    'invalid': displayed
  });
  return <div className={classes}>{children}</div>;
};

const getValue = (name:string, inputInfo:Map<string, any>) : ShallowCompare => {
  if(isMultipleValueInput(name) && Map.isMap(inputInfo)){
    return returnCheckedValue((arg) => typeof arg !== "undefined" && arg !== false, ...inputInfo.map(item => item.get('value', false)).toArray())
  } else {
    return inputInfo.get('value') || false;
  }
} 


export default compose<ValidationInnerElementProps, ValidationComponentProps>(
  withProps((ownerProps : ValidationAdditionProps) => {
    const {name, inputInfo, type} = ownerProps;
    const changed:boolean = isMultipleValueInput(name) ? inputInfo.some(item => item.get('changed', false)) : inputInfo.get('changed', false);
    const value:ShallowCompare = getValue(name, inputInfo);
    return {
      changed,
      value
    }
  }), shouldUpdate((currentProps:ValidationMapProps, nextProps:ValidationMapProps) => {
    return !specificShallowEqual(currentProps, nextProps) || !availableValidationsShallowEqual(currentProps, nextProps);
  }),
  withState('valid', 'setValid', false),
  withHandlers<TestHandersUncalledInterface, ValidationWithStateProps>({
    testElement: () => testElement
  }),
  lifecycle<ValidationWithStateProps & TestHandersInterface, {}>({
    componentWillMount(){
      const {testElement, setValidation, value, type, isFor, test} = this.props;
      setValidation(isFor, test);
      // value, test, isFor, type, setValid
      testElement(this.props);
    }, 
    componentWillReceiveProps(nextProps){
      if(!specificShallowEqualTestElement(this.props, nextProps)){
        nextProps.testElement(nextProps);
      }
      if(!availableValidationsShallowEqual(this.props, nextProps)){
        nextProps.setValidation(nextProps.isFor, nextProps.test)
      }
    }
  }),
  mapProps((ownerProps:ValidationWithStateProps) => {
    const {valid, value, className, changed, children, test} = ownerProps;
    return {
      displayed: !valid && changed,
      className,
      children
    }
  }), shouldUpdate((currentProps:ValidationInnerElementProps, nextProps:ValidationInnerElementProps) => {
    return !specificShallowEqualDisplayed(currentProps, nextProps);
  })
)(Validation);