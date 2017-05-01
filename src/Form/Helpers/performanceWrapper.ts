import PropTypes from "prop-types";
import Recompose from "recompose";
import {getContext, withProps, shouldUpdate, withHandlers, compose, lifecycle} from "recompose";
import {Map} from "immutable";
import {isMultipleValueInput, returnDefinedValue} from "./inputHelpers";
import createSpecificShallowEqual from "../../../libs/createSpecificShallowEqual"
import {setInput, setInputInteraction, setValidation} from "../Actions/fields";
import {ShallowCompareProps, ReactComponent, BaseReactProps, ShallowCompare} from "../../../libs/types";
import {FormContext, PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, PerfomanceWrapperGetInputPath, PerformanceWrapperInputHelpers,
   PerformanceWrapperUncalledInputHelpers, PerformanceWrapperUncalledValidationHelpers, NameProp, IdProp, TypeProp, 
  DefaultValueProp, PossibleDefaultValues, InputInfoProps, DefaultSwitchProps, NameSpaceProp, FormStateProp, ValueProp} from "../Types/types"

const specificShallowEqual = createSpecificShallowEqual("inputInfo", "inputGroupInfo", "name", "nameSpace", "type", "id", "disabled", "required", 
"className", "defaultValue", "defaultChecked", "defaultSelected", "options", "fieldSetNameSpace", "value");

const specificShallowEqualDefault = createSpecificShallowEqual("defaultValue");

interface WithHandlersGuard extends NameProp, IdProp, TypeProp, DefaultSwitchProps, DefaultValueProp<PossibleDefaultValues>, NameProp, BaseReactProps, ValueProp, IdProp, TypeProp{}

export interface PerformanceWrapperProps extends PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, FormContext {}

const getUnsetValue = ({type}:TypeProp) => {
  if (type === 'radio' || type === 'checkbox') {
    return false;
  } else {
    return '';
  }
};


interface GetInputPathGuard extends NameProp, IdProp{
  fieldSetNameSpace?: string,
}
export const getInputPath = <T extends GetInputPathGuard> ({name, id, fieldSetNameSpace}:T) => ():string[] => {
  if (fieldSetNameSpace !== undefined) {
    return [fieldSetNameSpace, name];
  } else if (isMultipleValueInput(name)) {
    if(id){
      return [name, id];
    }
    throw new Error("Multiple value inputs require an ID");
  } else {
    return [name];
  }
}

interface WithNeededPropsGuard extends DefaultSwitchProps, DefaultValueProp<PossibleDefaultValues>, ValueProp {}

export const getPrioritisedDefaultValue = (defaultValue?:PossibleDefaultValues, defaultChecked?:boolean | number | string, defaultSelected?:boolean | number | string) => (
  returnDefinedValue(defaultValue, defaultChecked, defaultSelected)
);

export const getPrioritisedValue = (value:ShallowCompare, inputInfoValue:ShallowCompare, prioritisedDefaultValue:PossibleDefaultValues, unsetValue:false | "") => (
  returnDefinedValue(value, inputInfoValue, prioritisedDefaultValue, unsetValue)
);

const withNeededProps = <TOutter extends WithNeededPropsGuard> (props:PerfomanceWrapperGetInputPath & FormContext & TOutter) => {
  const inputPath = props.getInputPath();
  const inputInfoPath = inputPath.slice(0, inputPath.length - 1);
  const inputInfo = props.FormState.getIn([props.nameSpace, ...inputPath], Map({}))
  const {defaultValue, defaultChecked, defaultSelected} = props;
  const prioritisedDefaultValue = getPrioritisedDefaultValue(defaultValue, defaultChecked, defaultSelected);
  const value = getPrioritisedValue(props.value, inputInfo.get('value'), prioritisedDefaultValue, getUnsetValue(props));
  return {
    inputInfo,
    inputGroupInfo: inputInfoPath.length > 0 ? props.FormState.getIn([props.nameSpace, ...inputInfoPath], Map({})) : Map(),
    defaultValue: prioritisedDefaultValue,
    inputPath,
    value
  };
}

const setValidationWithHandlersObject = {
  setValidation: ({dispatch, nameSpace, getInputPath}) => (type:string, test:string | boolean) => {
    dispatch(setValidation(nameSpace, getInputPath(), type, test));
  }
}

const createUniversalCompose = <TOutter extends WithHandlersGuard, TWithHandlers extends {}> (withHandlersArgs:TWithHandlers) => compose<PerformanceWrapperProps & TOutter, TOutter>(
  getContext<FormContext, TOutter>({
    nameSpace: PropTypes.string,
    FormState: PropTypes.object,
    fieldSetNameSpace: PropTypes.string,
    dispatch: PropTypes.func
  }),
  // TODO: unclear what the first generic here does
  withHandlers<FormContext & TOutter, PerfomanceWrapperGetInputPath>({
    getInputPath
  }),
  withHandlers<TWithHandlers, PerfomanceWrapperGetInputPath & FormContext & TOutter>(withHandlersArgs),
  withProps<PerformanceWrapperWithProps, PerformanceWrapperWithHandlers & FormContext & TOutter>(withNeededProps),
  // TODO: unclear what the first generic here does
  shouldUpdate<PerformanceWrapperProps & TOutter>((props, nextProps) => {
    return !specificShallowEqual(props, nextProps);
  })
);

export const validationPerformanceWrapper =<TOutter extends WithHandlersGuard> (ReactClass:ReactComponent<TOutter & PerformanceWrapperProps>) => (
  createUniversalCompose<TOutter, PerformanceWrapperUncalledValidationHelpers>(setValidationWithHandlersObject)(ReactClass)
)

export default <TOutter extends WithHandlersGuard> (ReactClass:ReactComponent<TOutter & PerformanceWrapperProps>) => {

  const inputWrapperCompose = createUniversalCompose<TOutter, PerformanceWrapperUncalledInputHelpers>({
      inputChanged: ({dispatch, nameSpace, name, getInputPath}) => (value, changed:boolean = true) => {
        dispatch(setInput(nameSpace, getInputPath(), value));
        dispatch(setInputInteraction(nameSpace, getInputPath(), 'changed', changed));
      },
      setInputBlurred: ({dispatch, nameSpace, getInputPath}) => () => {
        dispatch(setInputInteraction(nameSpace, getInputPath(), 'blurred', true));
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