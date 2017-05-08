import PropTypes from "prop-types";
import Recompose from "recompose";
import {getContext, withProps, shouldUpdate, withHandlers, compose, lifecycle} from "recompose";
import {Map} from "immutable";
import {isMultipleValueInput, returnDefinedValue} from "./inputHelpers";
import createSpecificShallowEqual from "../../../libs/createSpecificShallowEqual"
import {setInput, setInputInteraction, setValidation} from "../Actions/fields";
import {ShallowCompareProps, ReactComponent, BaseReactProps, ShallowCompare} from "../../../libs/types";
import {FormContext, PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, PerformanceWrapperInputHelpers, FieldSetNameSpaceProp,
   PerformanceWrapperUncalledInputHelpers, PerformanceWrapperUncalledValidationHelpers, NameProp, IdProp, TypeProp, PossibleValues,
  DefaultValueProp, PossibleDefaultValues, InputInfoProps, DefaultSwitchProps, NameSpaceProp, FormStateProp, ValueProp, SetValidation} from "../Types/types"

const specificShallowEqual = createSpecificShallowEqual("inputInfo", "name", "nameSpace", "type", "id", "disabled", "required", 
"className", "defaultValue", "defaultChecked", "defaultSelected", "options", "fieldSetNameSpace", "value");

const specificShallowEqualDefault = createSpecificShallowEqual("defaultValue");

interface WithHandlersGuard extends NameProp, IdProp, TypeProp, DefaultSwitchProps, DefaultValueProp<PossibleDefaultValues>, NameProp, BaseReactProps, ValueProp<PossibleValues>, IdProp, TypeProp{}

export interface PerformanceWrapperProps extends PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, FormContext {}

const getUnsetValue = ({type}:TypeProp) => {
  if (type === 'radio' || type === 'checkbox') {
    return false;
  } else {
    return '';
  }
};


interface GetInputPathGuard extends NameProp, IdProp, FieldSetNameSpaceProp{}
interface GetValidationPathGuard extends NameProp, FieldSetNameSpaceProp{}


export const getInputPath = ({name, id, fieldSetNameSpace}:GetInputPathGuard):string[] => {
  if(isMultipleValueInput(name) && fieldSetNameSpace !== undefined) {
    if(id) {
      return [fieldSetNameSpace, name, 'fields', id];
    }
  } else if (fieldSetNameSpace !== undefined) {
    return [fieldSetNameSpace, name];
  } else if (isMultipleValueInput(name)) {
    if(id){
      return [name, 'fields', id];
    }
  }
  return [name];
}



interface WithNeededPropsGuard extends DefaultSwitchProps, DefaultValueProp<PossibleDefaultValues>, ValueProp<PossibleValues>, NameProp {}

export const getPrioritisedDefaultValue = (defaultValue?:PossibleDefaultValues, defaultChecked?:boolean | number | string, defaultSelected?:boolean | number | string) => (
  returnDefinedValue(defaultValue, defaultChecked, defaultSelected)
);

export const getPrioritisedValue = (value:ShallowCompare, inputInfoValue:ShallowCompare, prioritisedDefaultValue:PossibleDefaultValues, unsetValue:false | "") => (
  returnDefinedValue(value, inputInfoValue, prioritisedDefaultValue, unsetValue)
);

const withNeededProps = <TOutter extends WithNeededPropsGuard> (props: FormContext & TOutter) => {
  const inputPath = getInputPath(props);
  const inputInfo = props.FormState.getIn([props.nameSpace, ...inputPath], Map({}))
  const {defaultValue, defaultChecked, defaultSelected} = props;
  const prioritisedDefaultValue = getPrioritisedDefaultValue(defaultValue, defaultChecked, defaultSelected);
  const value = getPrioritisedValue(props.value, inputInfo.get('value'), prioritisedDefaultValue, getUnsetValue(props));

  
  console.log(props.name);
  console.log(props);
  console.log(inputPath);
  console.log(inputInfo.toJS());
  console.log(value);
  return {
    inputInfo,
    defaultValue: prioritisedDefaultValue,
    inputPath,
    value
  };
}

const setValidationWithHandlersObject = {
  setValidation: ({dispatch, nameSpace, ...props}:SetValidation) => (type:string, test:string | boolean) => {
    dispatch(setValidation(nameSpace, getInputPath(props), type, test));
  }
}

const createUniversalCompose = <TOutter extends WithHandlersGuard, TWithHandlers extends {}> (withHandlersArgs:TWithHandlers) => compose<PerformanceWrapperProps & TOutter, TOutter>(
  getContext<FormContext, TOutter>({
    nameSpace: PropTypes.string,
    FormState: PropTypes.object,
    fieldSetNameSpace: PropTypes.string,
    dispatch: PropTypes.func
  }),
  withProps<PerformanceWrapperWithProps, PerformanceWrapperWithHandlers & FormContext & TOutter>(withNeededProps),
  withHandlers<TWithHandlers, FormContext & TOutter>(withHandlersArgs),
  shouldUpdate<PerformanceWrapperProps & TOutter>((props, nextProps) => {
    return !specificShallowEqual(props, nextProps);
  })
);

export const validationPerformanceWrapper =<TOutter extends WithHandlersGuard> (ReactClass:ReactComponent<TOutter & PerformanceWrapperProps>) => (
  createUniversalCompose<TOutter, PerformanceWrapperUncalledValidationHelpers>(setValidationWithHandlersObject)(ReactClass)
)

export default <TOutter extends WithHandlersGuard> (ReactClass:ReactComponent<TOutter & PerformanceWrapperProps>) => {
  const inputWrapperCompose = createUniversalCompose<TOutter, PerformanceWrapperUncalledInputHelpers>({
      inputChanged: ({dispatch, nameSpace, name, id, fieldSetNameSpace}) => (value, changed:boolean = true) => {
        const inputPath = getInputPath({name, id, fieldSetNameSpace})
        dispatch(setInput(nameSpace, inputPath, value));
        dispatch(setInputInteraction(nameSpace, inputPath, 'changed', changed));
      },
      setInputBlurred: ({dispatch, nameSpace, ...props}) => () => {
        dispatch(setInputInteraction(nameSpace, getInputPath(props), 'blurred', true));
      },
      ...setValidationWithHandlersObject
  });

  return compose<PerformanceWrapperProps & TOutter, TOutter>(
    inputWrapperCompose,
    lifecycle<PerformanceWrapperProps & TOutter, {}>({
      componentWillMount() {
        this.props.inputChanged(this.props.value, false);
      },
      componentWillReceiveProps(nextProps:PerformanceWrapperProps & TOutter){
        if (!specificShallowEqualDefault(nextProps, this.props)) {
          nextProps.inputChanged(nextProps.defaultValue, false);
        }
        if (!nextProps.FormState.hasIn([nextProps.nameSpace, ...nextProps.inputPath])) {
          nextProps.inputChanged(nextProps.value, false);
        }
    }})
  )(ReactClass);
}