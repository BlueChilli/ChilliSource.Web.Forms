import React from "react";
import {withProps, mapProps, shouldUpdate, ComponentEnhancer, InferableComponentEnhancer, compose, withState, withHandlers, lifecycle} from "recompose";
import classnames from "classnames";
import {testElement, validations, TestElement} from "../../libs/validate";
import "./Validation.scss";
import {isMultipleValueInput} from "../Form/Helpers/inputHelpers";
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


export default compose<ValidationInternalProps, ValidationComponentProps>(
  withProps((ownerProps : ValidationAdditionProps) => {
    const {name, inputInfo, type} = ownerProps;

    console.log(inputInfo.toJS());

    const changed:boolean = isMultipleValueInput(name) ? inputInfo.some(item => item.get('changed', false)) : inputInfo.get('changed', false);
    const value:ShallowCompare = isMultipleValueInput(name) ? inputInfo.some(item => item.get('value', false)) : inputInfo.get('value', false);
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