// Type definitions for CS.Forms v1.0.57
// Project: CS.Forms
// Definitions by: BlueChilli Technology Pty Ltd <https://www.bluechilli.com>

// Reference Types
/// <reference types="react" />

import {Moment} from 'moment';
import {List, Map} from 'immutable';
import {Dispatch, Action} from 'redux';

export = CSForms;
export as namespace CSForms;

declare namespace CSForms {
  
  // Types and Interfaces
  // ----------------------------------------------------------------------------
  type InputType = 'text' | 'radio' | 'checkbox' | 'number' | 'email' | 'password' | 'hidden' | 'file';
  
  type InputTest = 'required' | 'pattern' | 'type' | 'minLength' | 'maxLength' | 'min' | 'max';
  
  type TestType = string | number | boolean | Function | undefined;

  type DateRange = {
    startDate: Moment;
    endDate: Moment;
  }

  interface DateRangeMap extends Map<string, Moment>{}

  type PossibleInputValue = number | string | boolean | Moment | DateRangeMap | undefined | List<any>;

  interface BaseReactProps {
    children?: React.ReactNode;
    key?: React.Key;
	  className?: string,
	  style?: Object
  }

  interface ValidationProps {
    required?: boolean
  }

  interface ValidationTypes {
    required: (value: PossibleInputValue, test: boolean, type: InputType) => boolean,
    pattern: (value: PossibleInputValue, test: string) => boolean,
    type: (value: PossibleInputValue, test: string) => boolean,
    minLength: (value: PossibleInputValue, test: string) => boolean,
    maxLength: (value: PossibleInputValue, test: string) => boolean,
    min: (value: PossibleInputValue, test: string) => boolean,
    max: (value: PossibleInputValue, test: string) => boolean,
    default: () => false,
  }

  interface InputValidationProps extends ValidationProps {
    /**
     * Lowest number(including itself) possible in
     * the input field
     */
    min?: string | number,

    /**
     * Highest number(including itself) possible in
     * the input field
     */
    max?: string | number,

    /**
     * The minimum length of the input text
     */
    minLength?: string | number,

    /**
     * The maximum length of the input text
     */
    maxLength?: string | number,

    /**
     * A regular expression(regex) for the input text
     * so as to allow only inputs that match the pattern
     */
    pattern?: string,
  }

  interface CustomValidationProps extends InputValidationProps {
    /**
     * A validator function which takes in <input /> value
     * and returns a true or false
     */
    customValidation?: (input: string | number) => boolean
  }

  interface ValidateProps extends CustomValidationProps {
    /** The name of the input to validate */
    name: string
  }

  interface OnBlurEventProps<TBlurEvent> {
    onBlur?: (event?: TBlurEvent) => void | boolean
  }

  interface OnChangeEventProps<TChangeEvent>{
    onChange?: (event?: TChangeEvent) => void | boolean
  }

  interface FieldSetProps extends BaseReactProps, OnBlurEventProps<React.FocusEvent<{}>> {
    id: string,
    name: string
  }

  interface InputGroupProps extends BaseReactProps {
    prepend?: React.ReactNode,
    append?: React.ReactNode
  }

  interface ValueProp<TValue> {
    value?: TValue
  }

  interface FieldSetNameSpaceProp {
    fieldSetNameSpace?: string,
  }

  interface LabelProp {
    /** Add a label to the input*/			
    label?: string
  }

  interface TypeProp {
    /** What type of input is it [hidden|text|ect] */
    type?: InputType
  }

  interface NameProp {
    /** Name of the input in state; You can append [] to signify a group of inputs*/
    name: string
  }

  interface PlaceholderProp {
    /** A placeholder to display for the input field*/
    placeholder?: string
  }

  interface IdProp {
    /** Used to provide extra identification information when name isnt enough */
    id?: string
  }

  interface OptionsProp {
    options?: List<any>
  }

  interface DefaultValueProp<TDefault> {
    /** Default value for the input to display */	
    defaultValue?: TDefault,
  }

  interface AdditionalCompareProps {
    /** Additional props to check in should component update */	
    additionalCompareProps?: string[],
  }

  interface DefaultSwitchProps {
    defaultChecked?: boolean | string | number | undefined,
    defaultSelected?: boolean | string | number | undefined 
  }

  interface InputWrapperProps extends BaseReactProps, LabelProp, NameProp, TypeProp {
    /** Pass in something to be prepended to the label */ 	
    labelPrefix?: any,
    /** Pass in something to be appended to the label */ 	
    labelPostfix?: any,
  }

  interface BaseInputProps<TDefault, TValue, TChangeEvent = React.ChangeEvent<{}>> extends BaseReactProps, OnChangeEventProps<TChangeEvent>, OnBlurEventProps<React.FocusEvent<{}>>, ValidationProps, NameProp, TypeProp, IdProp, DefaultValueProp<TDefault>, ValueProp<TValue> {
    /** Automatically select this field on navigation*/			
    autoFocus?: boolean,
  }

  interface OptionalValidationProps {
    /** Disable the input*/	
    disabled?: boolean,
    /** Don't validate the input*/			
    noValidate? :boolean, 
  }

  interface OptionTypes {
    value: string | boolean | number,
    children: List<React.ReactText>
  }

  interface TextAreaProps extends BaseInputProps<string, string>, CustomValidationProps, InputWrapperProps, PlaceholderProp, AdditionalCompareProps {}
  
  interface TextInputProps extends BaseInputProps<string, string | number>, CustomValidationProps, InputWrapperProps, InputGroupProps, PlaceholderProp, AdditionalCompareProps{} 
  
  interface SelectInputProps extends BaseInputProps<string | number, string | number>, CustomValidationProps, InputWrapperProps, DefaultSwitchProps, AdditionalCompareProps{
    /** Pass in an arrow to display at the edge of the select box */ 
    arrow?: React.ReactNode
  }

  interface MultiSelectProps extends InputWrapperProps, BaseInputProps<any, any, List<any>>, AdditionalCompareProps, OptionsProp{
    noResultsText?: string,
    placeholder?: string
  }

  interface SwitchProps extends BaseInputProps<boolean | string | number, string | boolean | undefined>, DefaultSwitchProps, LabelProp, AdditionalCompareProps{
    /** Put into state as the value of the selected switch */
    id: string
  }

  interface RadioTabsProps extends BaseReactProps, NameProp, LabelProp{
    radioClasses?: string
  }

  interface RadioTabProps extends BaseReactProps{
    /** Put into state as the value of the selected switch */
    id: string,
    defaultSelected?: boolean
  }

  interface ValidationElementProps extends BaseReactProps, NameProp, AdditionalCompareProps{
    /** What validation attribute is the message for */
    isFor: InputTest,
  }

  interface DisplayValidationProps extends BaseReactProps, OptionalValidationProps, CustomValidationProps, TypeProp, NameProp {}

  interface DropZoneProps extends BaseReactProps, NameProp, ValueProp<List<File>>, AdditionalCompareProps {
    /** Can you upload multiple files*/	
    multiple?: boolean,
    /** Display a list of uploaded files*/		
    showList?: boolean,
  }

  interface DateWrapperProps extends InputWrapperProps, InputGroupProps, BaseReactProps, PlaceholderProp {}

  interface InternalDateWrapperProps extends DateWrapperProps {
    valueString: string,
    children: React.ReactElement<any>
  }

  interface CommonDateProps extends BaseReactProps, NameProp, DateWrapperProps, OnChangeEventProps<DateRange | Moment>, AdditionalCompareProps {
    date?: Moment,
    dateFormat?: string,
    firstDayOfTheWeek?: number,
    theme?: Object,
    onInit?: (date?: DateRange | Moment) => void | boolean,
    minDate?: string | Moment | Function,
    maxDate?: string | Moment | Function,
    serverFormat?: string
  }

  interface DatePickerProps extends CommonDateProps, DefaultValueProp<string>, ValueProp<Moment>{}

  interface DateRangeProps extends CommonDateProps, DefaultValueProp<DateRangeMap> , ValueProp<DateRangeMap>{
    startDate?: string | Moment | Function,
    endDate?: string | Moment | Function,
    value?: DateRangeMap
  }

  interface ErrorWrapperProps extends BaseReactProps, TypeProp {}

  type getInputPath = () => Array<string>

  type inputChanged = (value: PossibleInputValue, changed?:boolean) => void;
  
  type inputBlurred = () => void;
  
  type setValidation = (type: string, test?: TestType) => void;
  
  type compareAdditionalProps = <TProps> (props: TProps, nextProps: TProps) => boolean;

  type SetInputAction = FSA<SetInputPayload, 'SET_INPUT'>
  
  type SetValidationAction = FSA<SetValidationPayload, 'SET_VALIDATION'>
  
  type SetInputInteractionAction = FSA<SetInputInteractionPayload, 'SET_INPUT_INTERACTION'>
  
  type SetAllInputInteractionAction = FSA<SetAllInputInteractionPayload, 'SET_ALL_INPUT_INTERACTIONS'>
  
  type ClearAllInputsAction = FSA<ClearAllInputsPayload, 'CLEAR_ALL_INPUTS'>

  interface BaseAction<TType> extends Action {
    type: TType;
  }

  interface FSA<TPayload, TType> extends BaseAction<TType>{
    payload?: TPayload,
    meta?: any
  }

  interface InputInfoProps {
    inputInfo: Map<string, any>
  }

  interface NameSpaceProp {
    nameSpace: string
  }

  interface FormStateProp {
    FormState: Map<string, any>
  }

  interface FormContext extends NameSpaceProp, FormStateProp{
    fieldSetNameSpace: string,
    dispatch: Function
  }

  type formState = Map<string, Map<string, PossibleInputValue>>

  type OnSubmit<T> = (e:any, formData: formState | FormData, submitGeneratedForm?:T) => void

  interface FormStateProps {
    /** Can optionally be passed down by the user to intergrate with redux global state */
    FormState?: formState,
  }

  interface FormDispatchProps {
    /** Can optionally be passed down by the user to intergrate with redux global state */
    dispatch?: any
  }

  interface FormState {
    canSubmitString: string
  }

  interface FormOptionalProps<T> extends BaseReactProps {
    /** Accepts different mime types and ensures the user specified onSubmit is called with data in the correct format
    * currently supports: application/json and multipart/form-data */
    encType?: 'application/json' | 'multipart/form-data',
    /** Called before the form is submitted, ths is a chance to modify the contents of the payload
     * primarily used by the form generator */    
    mapOutput?: (data?: Map<string, any>) => Map<string, any>,
    /** Called once Form has ensured that all child Input components are valid */
    onSubmit?: OnSubmit<T>,    
  }

  interface FormOwnProps<T> extends FormOptionalProps<T> {
    /** Used to namespace all child input components in the redux store or local state */
    name: string,
  }

  interface FormProps<T> extends FormOwnProps<T>, FormStateProps, FormDispatchProps {}

  interface ClearAllInputsPayload {
    nameSpace: string,
  }

  interface SetInputPayload extends ClearAllInputsPayload {
    inputName: string[],
    value: PossibleInputValue
  }

  interface SetValidationPayload extends ClearAllInputsPayload {
    inputName: string[],
    type: string,
    test: string | boolean
  }

  interface SetAllInputInteractionPayload extends ClearAllInputsPayload {
    value: boolean,
    interaction: string
  }

  interface SetInputInteractionPayload extends SetAllInputInteractionPayload{
    inputName:string[]
  }
  

  interface InputBlurred extends NameProp, NameSpaceProp, IdProp, FieldSetNameSpaceProp {
    dispatch: Dispatch<SetInputInteractionPayload>
  }

  interface InputChanged extends NameProp, NameSpaceProp, IdProp, FieldSetNameSpaceProp {
    dispatch: Dispatch<SetInputPayload>
  }


  interface SetValidation extends NameSpaceProp, NameProp, FieldSetNameSpaceProp {
    dispatch: Dispatch<SetValidationPayload>
  }

  interface ValidationCloneElementProps extends InputInfoProps, TypeProp{
    test?: TestType,
    name: string,
    setValidation: setValidation
  }

  type InputUnionProps = TextInputProps | TextAreaProps | SelectInputProps | SwitchProps | RadioTabsProps | DatePickerProps | DateRangeProps

  interface ValidationAdditionProps extends ValidationElementProps, ValidationCloneElementProps{}

  interface ValidationInnerElementProps {
    displayed: boolean,
    className: string,
    children: any
  }

  interface PerformanceWrapperUncalledValidationHelpers {
    setValidation: (props:SetValidation) => setValidation,
    compareAdditionalProps: (props:AdditionalCompareProps) => compareAdditionalProps
  }

  interface PerformanceWrapperUncalledInputHelpers extends PerformanceWrapperUncalledValidationHelpers {
    /** Update state with a new value for this input */ 
    inputChanged?: (props:InputChanged) => inputChanged,
    /** Set the inputs state */ 
    setInputBlurred?: (props:InputBlurred) => () => void
  }

  interface PerformanceWrapperInputHelpers {
    /** Update state with a new value for this input */ 
    inputChanged: inputChanged,
    /** Set the inputs state */ 
    setInputBlurred: inputBlurred,
    setValidation: setValidation,
    compareAdditionalProps: compareAdditionalProps
  }

  interface PerformanceWrapperWithHandlers extends PerformanceWrapperInputHelpers {}

  interface PerformanceWrapperWithProps extends InputInfoProps, DefaultValueProp<PossibleInputValue> {
    inputPath: string[]
  }

  interface PerformanceWrapperProps extends PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, FormContext {}

  interface WithHandlersGuard extends NameProp, IdProp, TypeProp, DefaultSwitchProps, DefaultValueProp<PossibleInputValue>, NameProp, BaseReactProps, ValueProp<PossibleInputValue>, IdProp, TypeProp {}

  type ReducerFunc<TState = Map<string, {}>, TAction = ClearAllInputsAction | SetInputAction | SetAllInputInteractionAction | SetInputInteractionAction | SetValidationAction> = (state: TState, action:TAction) => TState;

  type BasicReducer = {
    SET_INPUT: ReducerFunc<Map<string, any>, SetInputAction>
    SET_VALIDATION: ReducerFunc<Map<string, any>, SetValidationAction>
    SET_INPUT_INTERACTION: ReducerFunc<Map<string, any>, SetInputInteractionAction>
    SET_ALL_INPUT_INTERACTIONS: ReducerFunc<Map<string, any>, SetAllInputInteractionAction>
    CLEAR_ALL_INPUTS: ReducerFunc<Map<string, any>, ClearAllInputsAction>
  }

  // Functions
  // ----------------------------------------------------------------------------
  function performanceWrapper<TOutter extends WithHandlersGuard> (Component: React.ComponentType<TOutter & PerformanceWrapperProps>): React.ComponentType<TOutter>
  
  function validationsAvailable<T> (inputAttributes:T): InputTest[];
  
  function clearAllInputs(nameSpace: string): ClearAllInputsAction;
}