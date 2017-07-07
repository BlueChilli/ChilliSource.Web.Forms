import {ChangeEvent, FocusEvent} from "react";
import {ShallowCompare, BaseReactProps} from '../../../libs/types';
import {TypeOfTest} from './types';
import {Dispatch} from 'redux';
import {Map, List} from 'immutable';
import moment, {Moment} from 'moment';

import {SetInputPayload, SetInputInteractionPayload, SetValidationPayload} from '../Actions/fields'


export type Type = 'text' | 'radio' | 'checkbox' | 'number' | 'email' | 'password' | 'hidden' | 'file'
export type TypeOfTest = "required" | "pattern" | "type" | "minLength" | "maxLength" | "min" | "max";
export type Tests = string | number | boolean | Function | undefined;

export type DateRangeMoment = {
  startDate: Moment;
  endDate: Moment;
}

export interface DateRangeMap extends Map<string, Moment> {}

export type PossibleDefaultValues = number | string | boolean | Moment | DateRangeMap | undefined;
export type PossibleValues = number | string | boolean | Moment | DateRangeMap | undefined;

export interface ValidationProps{
	required?: boolean,
}


export interface InputValidationProps extends ValidationProps{
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

export interface BaseFreclValidationProps extends InputValidationProps{
	customValidation?: Function
}

export interface ValidateProps extends BaseFreclValidationProps {
  /** The name of the input to validate */
  name: string
}


export interface OnBlurEventProps<TBlurEvent> {
	onBlur?: (event?: TBlurEvent) => void | boolean
}

export interface OnChangeEventProps<TChangeEvent>{
	onChange?: (event?: TChangeEvent) => void | boolean
}

export interface FieldSetProps extends BaseReactProps, OnBlurEventProps<FocusEvent<{}>> {
	id: string,
	name: string
}

export interface ErrorWrapperProps extends BaseReactProps, TypeProp{}

export interface InputGroupProps extends BaseReactProps {
	prepend?: React.ReactNode,
	append?: React.ReactNode
}

export interface ValueProp<TValue> {
	value?: TValue
}

export interface FieldSetNameSpaceProp {
  fieldSetNameSpace?: string,
}

export interface LabelProp {
	/** Add a label to the input*/			
	label?: string
}


export interface TypeProp {
	/** What type of input is it [hidden|text|ect] */
  type?: Type
}

export interface NameProp {
	/** Name of the input in state; You can append [] to signify a group of inputs*/
	name: string
}

export interface PlaceholderProp {
	/** A placeholder to display for the input field*/
	placeholder?: string
}

export interface IdProp {
	/** Used to provide extra identification information when name isnt enough */
	id?: string
}

export interface DefaultValueProp<TDefault> {
	/** Default value for the input to display */	
	defaultValue?: TDefault,
}

export interface AdditionalCompareProps{
	/** Additional props to check in should component update */	
	additionalCompareProps?: string[],
}

export interface DefaultSwitchProps {
	defaultChecked?: boolean | string | number | undefined,
	defaultSelected?: boolean | string | number | undefined 
}

export interface InputWrapperProps extends BaseReactProps, LabelProp, NameProp, TypeProp {
	/** Pass in something to be prepended to the label */ 	
	labelPrefix?: any,
	/** Pass in something to be appended to the label */ 	
	labelPostfix?: any,
}


interface BaseInputProps<TDefault, TValue, TChangeEvent = ChangeEvent<{}>> extends BaseReactProps, OnChangeEventProps<TChangeEvent>, OnBlurEventProps<FocusEvent<{}>>, ValidationProps, NameProp, TypeProp, IdProp, DefaultValueProp<TDefault>, ValueProp<TValue>{
	/** Automatically select this field on navigation*/			
	autoFocus?: boolean,
}

export interface OptionalValidationProps{
	/** Disable the input*/	
	disabled?: boolean,
	/** Don't validate the input*/			
	noValidate? :boolean, 
}

interface OptionTypes{
  value: string | boolean | number,
  children: List<React.ReactText>
}

export interface TextAreaProps extends BaseInputProps<string, string>, BaseFreclValidationProps, InputWrapperProps, PlaceholderProp, AdditionalCompareProps {}
export interface TextInputProps extends BaseInputProps<string, string | number>, BaseFreclValidationProps, InputWrapperProps, InputGroupProps, PlaceholderProp, AdditionalCompareProps{} 
export interface SelectInputProps extends BaseInputProps<string | number, string | number>, BaseFreclValidationProps, InputWrapperProps, DefaultSwitchProps, AdditionalCompareProps{
	/** Pass in an arrow to display at the edge of the select box */ 
	arrow?: React.ReactNode
}

export interface MultiSelectProps extends InputWrapperProps, BaseInputProps<any, any, List<any>>, AdditionalCompareProps {
	options: List<any>
}

export interface SwitchProps extends BaseInputProps<boolean | string | number, string | boolean | undefined>, DefaultSwitchProps, LabelProp, AdditionalCompareProps{
	/** Put into state as the value of the selected switch */
	id: string
}

export interface RadioTabsProps extends BaseReactProps, NameProp, LabelProp{
	radioClasses?: string
}

export interface RadioTabProps extends BaseReactProps{
	/** Put into state as the value of the selected switch */
	id: string,
	defaultSelected?: boolean
}


export interface ValidationElementProps extends BaseReactProps, NameProp, AdditionalCompareProps{
	/** What validation attribute is the message for */
	isFor: TypeOfTest,
}


export interface DisplayValidationProps extends BaseReactProps, OptionalValidationProps, BaseFreclValidationProps, TypeProp, NameProp{}

export interface DropZoneProps extends BaseReactProps, NameProp, ValueProp<List<File>>, AdditionalCompareProps{
	/** Can you upload multiple files*/	
	multiple?: boolean,
	/** Display a list of uploaded files*/		
	showList?: boolean,
}

export interface DateWrapperProps extends InputWrapperProps, InputGroupProps, BaseReactProps, PlaceholderProp{}

export interface InternalDateWrapperProps extends DateWrapperProps{
	valueString: string,
	children: React.ReactElement<any>
}

interface CommonDateProps extends BaseReactProps, NameProp, DateWrapperProps, OnChangeEventProps<DateRangeMoment | Moment>, AdditionalCompareProps{
	date?: moment.Moment,
	dateFormat?: string,
	firstDayOfTheWeek?: number,
	theme?: Object,
	onInit?: (date?: DateRangeMoment | Moment) => void | boolean,
	minDate?: string | moment.Moment | Function,
	maxDate?: string | moment.Moment | Function
}

export interface DatePickerProps extends CommonDateProps, DefaultValueProp<string>, ValueProp<Moment>{}

export interface DateRangeProps extends CommonDateProps, DefaultValueProp<DateRangeMap> , ValueProp<DateRangeMap>{
	startDate?: string | moment.Moment | Function,
	endDate?: string | moment.Moment | Function,
	value?: DateRangeMap
}


export interface ValidationCloneElementProps extends InputInfoProps, TypeProp{
  test?: Tests,
  name: string,
	setValidation: setValidation
}

export type InputUnionProps = TextInputProps | TextAreaProps | SelectInputProps | SwitchProps | RadioTabsProps | DatePickerProps | DateRangeProps


export interface ValidationAdditionProps extends ValidationElementProps, ValidationCloneElementProps{}


export interface ValidationInnerElementProps {
  displayed: boolean,
  className: string,
  children: any
}


/*Performance Wrapper HOCS*/
type InputInfo = Map<string, any>

export interface InputInfoProps {
	inputInfo: InputInfo
}

export interface NameSpaceProp {
	nameSpace: string
}

export interface FormStateProp {
	FormState: Map<string, any>
}

export interface FormContext extends NameSpaceProp, FormStateProp{
  fieldSetNameSpace: string,
  dispatch: Function
}

type getInputPath = () => Array<string>


interface InputBlurred extends NameProp, NameSpaceProp, IdProp, FieldSetNameSpaceProp {
	dispatch: Dispatch<SetInputInteractionPayload>
}

interface InputChanged extends NameProp, NameSpaceProp, IdProp, FieldSetNameSpaceProp {
	dispatch: Dispatch<SetInputPayload>
}


export interface SetValidation extends NameSpaceProp, NameProp, FieldSetNameSpaceProp {
	dispatch: Dispatch<SetValidationPayload>
}

type inputChanged = (value: ShallowCompare, changed?:boolean) => void;
type inputBlurred = () => void;
type setValidation = (type: string, test?: Tests) => void;
type compareAdditionalProps = <TProps> (props: TProps, nextProps: TProps) => boolean;

export interface PerformanceWrapperUncalledValidationHelpers {
	setValidation: (props:SetValidation) => setValidation,
	compareAdditionalProps: (props:AdditionalCompareProps) => compareAdditionalProps
}

export interface PerformanceWrapperUncalledInputHelpers extends PerformanceWrapperUncalledValidationHelpers {
	/** Update state with a new value for this input */ 
  inputChanged?: (props:InputChanged) => inputChanged,
	/** Set the inputs state */ 
  setInputBlurred?: (props:InputBlurred) => () => void
}


export interface PerformanceWrapperInputHelpers {
	/** Update state with a new value for this input */ 
	inputChanged: inputChanged,
	/** Set the inputs state */ 
	setInputBlurred: inputBlurred,
	setValidation: setValidation,
	compareAdditionalProps: compareAdditionalProps
}


export interface PerformanceWrapperWithHandlers extends PerformanceWrapperInputHelpers {}

export interface PerformanceWrapperWithProps extends InputInfoProps, DefaultValueProp<PossibleDefaultValues> {
  inputPath: string[]
}
