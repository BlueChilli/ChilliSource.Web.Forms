import React from "react";
import {Map} from "immutable"
import {withProps, mapProps, shouldUpdate, ComponentEnhancer, InferableComponentEnhancer, compose, withState, withHandlers, lifecycle} from "recompose";
import classnames from "classnames";
import {testElement, validations, TestElement} from "../../libs/validate";
import "./Validation.scss";
import {isMultipleValueInput, returnCheckedValue} from "../Form/Helpers/inputHelpers";
import createSpecificShallowEqual from "../../libs/createSpecificShallowEqual";
import {ValidationAdditionProps, TextInputProps} from "../Form/Types/types";
import {ReactComponent, ShallowCompare} from "../../libs/types";

const specificShallowEqual = createSpecificShallowEqual('value', 'changed', 'type');
const specificShallowEqualDisplayed = createSpecificShallowEqual('displayed');
const specificShallowEqualTestElement = createSpecificShallowEqual("value", "typeOfValidation", "type");
const availableValidationsShallowEqual = createSpecificShallowEqual("isFor", "test", ...Object.keys(validations));


interface ValidationInternalProps {
  displayed: boolean,
  className: string,
  children: any
}

interface ValidationInternalAdditionProps extends ValidationAdditionProps{
  value:any,
  valid: boolean
}

interface ValidationMapProps extends ValidationAdditionProps{
  changed:boolean,
  value:ShallowCompare
}


interface ValidationWithStateProps extends ValidationMapProps{
  valid: boolean,
  setValid: (valid:boolean) => undefined
}

interface TestHandersUncalledInterface {
  testElement: () => TestElement
}

interface TestHandersInterface {
  testElement: TestElement
}


interface ValidationLifecycleProps extends ValidationMapProps, TestHandersInterface {}

interface ValidationComponentProps {
  isFor: string
}



const Validation = ({displayed, className, children}:ValidationInternalProps) => {
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


export default compose<ValidationInternalProps, ValidationComponentProps>(
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
    const {valid, value, className, changed, children} = ownerProps;
    return {
      displayed: !valid && changed,
      className,
      children
    }
  }), shouldUpdate((currentProps:ValidationInternalProps, nextProps:ValidationInternalProps) => {
    return !specificShallowEqualDisplayed(currentProps, nextProps);
  })
)(Validation);