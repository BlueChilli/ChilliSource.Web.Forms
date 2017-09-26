// Reference Types
/// <reference types="react" />

/** Libraries */
import { Component } from 'react';
import { Moment } from 'moment';
import { List, Map, Set } from 'immutable';
import { Dispatch, Action } from 'redux';

/** Types */
export type InputType =
	| 'text'
	| 'radio'
	| 'checkbox'
	| 'number'
	| 'email'
	| 'password'
	| 'hidden'
	| 'file';

export type InputTest = 'required' | 'pattern' | 'type' | 'minLength' | 'maxLength' | 'min' | 'max';

export type TestType = string | number | boolean | Function | undefined;

export type DateRangeMoment = {
	startDate: Moment;
	endDate: Moment;
};

export type PossibleInputValue =
	| number
	| string
	| boolean
	| Moment
	| DateRangeMap
	| undefined
	| List<any>
	| Set<File>;

export type getInputPath = () => Array<string>;

export type inputChanged = (value: PossibleInputValue, changed?: boolean) => void;

export type inputBlurred = () => void;

export type setValidation = (type: string, test?: TestType) => void;

export type compareAdditionalProps = <TProps>(props: TProps, nextProps: TProps) => boolean;

export type SetInputAction = FSA<SetInputPayload, 'SET_INPUT'>;

export type SetValidationAction = FSA<SetValidationPayload, 'SET_VALIDATION'>;

export type SetInputInteractionAction = FSA<SetInputInteractionPayload, 'SET_INPUT_INTERACTION'>;

export type SetAllInputInteractionAction = FSA<
	SetAllInputInteractionPayload,
	'SET_ALL_INPUT_INTERACTIONS'
>;

export type ClearAllInputsAction = FSA<ClearAllInputsPayload, 'CLEAR_ALL_INPUTS'>;

export type formState = Map<string, Map<string, PossibleInputValue>>;

export type OnSubmit<T> = (e: any, formData: formState | FormData, submitGeneratedForm?: T) => void;

export type InputUnionProps =
	| TextInputProps
	| TextAreaProps
	| SelectInputProps
	| SwitchProps
	| RadioTabsProps
	| DatePickerProps
	| DateRangeProps;

export type ReducerFunc<
	TState = Map<string, {}>,
	TAction =
		| ClearAllInputsAction
		| SetInputAction
		| SetAllInputInteractionAction
		| SetInputInteractionAction
		| SetValidationAction
> = (state: TState, action: TAction) => TState;

export type BasicReducer = {
	SET_INPUT: ReducerFunc<Map<string, any>, SetInputAction>;
	SET_VALIDATION: ReducerFunc<Map<string, any>, SetValidationAction>;
	SET_INPUT_INTERACTION: ReducerFunc<Map<string, any>, SetInputInteractionAction>;
	SET_ALL_INPUT_INTERACTIONS: ReducerFunc<Map<string, any>, SetAllInputInteractionAction>;
	CLEAR_ALL_INPUTS: ReducerFunc<Map<string, any>, ClearAllInputsAction>;
};

/** export interfaces */
export interface DateRangeMap extends Map<string, Moment> {}

export interface BaseReactProps {
	children?: React.ReactNode;
	key?: React.Key;
	className?: string;
	style?: Object;
}

export interface ValidationProps {
	required?: boolean;
}

export interface ValidationTypes {
	required: (value: PossibleInputValue, test: boolean, type: InputType) => boolean;
	pattern: (value: PossibleInputValue, test: string) => boolean;
	type: (value: PossibleInputValue, test: string) => boolean;
	minLength: (value: PossibleInputValue, test: string) => boolean;
	maxLength: (value: PossibleInputValue, test: string) => boolean;
	min: (value: PossibleInputValue, test: string) => boolean;
	max: (value: PossibleInputValue, test: string) => boolean;
	default: () => false;
}

export interface InputValidationProps extends ValidationProps {
	/**
   * Lowest number(including itself) possible in
   * the input field
   */
	min?: string | number;

	/**
   * Highest number(including itself) possible in
   * the input field
   */
	max?: string | number;

	/**
   * The minimum length of the input text
   */
	minLength?: string | number;

	/**
   * The maximum length of the input text
   */
	maxLength?: string | number;

	/**
   * A regular expression(regex) for the input text
   * so as to allow only inputs that match the pattern
   */
	pattern?: string;
}

export interface CustomValidationProps extends InputValidationProps {
	/**
   * A validator function which takes in <input /> value
   * and returns a true or false
   */
	customValidation?: (input: string | number) => boolean;
}

export interface ValidateProps extends CustomValidationProps {
	/** The name of the input to validate */
	name: string;
}

export interface OnBlurEventProps<TBlurEvent> {
	onBlur?: (event?: TBlurEvent) => void | boolean;
}

export interface OnChangeEventProps<TChangeEvent> {
	onChange?: (event?: TChangeEvent) => void | boolean;
}

export interface FieldSetProps extends BaseReactProps, OnBlurEventProps<React.FocusEvent<{}>> {
	id: string;
	name: string;
}

export interface InputGroupProps extends BaseReactProps {
	prepend?: React.ReactNode;
	append?: React.ReactNode;
}

export interface ValueProp<TValue> {
	value?: TValue;
}

export interface FieldSetNameSpaceProp {
	fieldSetNameSpace?: string;
}

export interface LabelProp {
	/** Add a label to the input*/

	label?: string;
}

export interface TypeProp {
	/** What type of input is it [hidden|text|ect] */
	type?: InputType;
}

export interface NameProp {
	/** Name of the input in state; You can append [] to signify a group of inputs*/
	name: string;
}

export interface PlaceholderProp {
	/** A placeholder to display for the input field*/
	placeholder?: string;
}

export interface IdProp {
	/** Used to provide extra identification information when name isnt enough */
	id?: string;
}

export interface OptionsProp {
	options?: List<any>;
}

export interface DefaultValueProp<TDefault> {
	/** Default value for the input to display */

	defaultValue?: TDefault;
}

export interface AdditionalCompareProps {
	/** Additional props to check in should component update */

	additionalCompareProps?: string[];
}

export interface DefaultSwitchProps {
	defaultChecked?: boolean | string | number | undefined;
	defaultSelected?: boolean | string | number | undefined;
}

export interface InputWrapperProps extends BaseReactProps, LabelProp, NameProp, TypeProp {
	/** Pass in something to be prepended to the label */

	labelPrefix?: any;
	/** Pass in something to be appended to the label */

	labelPostfix?: any;
	/** Hint text */
	explanation?: string;
}

export interface BaseInputProps<TDefault, TValue, TChangeEvent = React.ChangeEvent<{}>>
	extends BaseReactProps,
		OnChangeEventProps<TChangeEvent>,
		OnBlurEventProps<React.FocusEvent<{}>>,
		ValidationProps,
		NameProp,
		TypeProp,
		IdProp,
		DefaultValueProp<TDefault>,
		ValueProp<TValue> {
	/** Automatically select this field on navigation*/

	autoFocus?: boolean;
}

export interface OptionalValidationProps {
	/** Disable the input*/

	disabled?: boolean;
	/** Don't validate the input*/

	noValidate?: boolean;
}

export interface OptionTypes {
	value: string | boolean | number;
	children: List<React.ReactText>;
}

export interface TextAreaProps
	extends BaseInputProps<string, string>,
		CustomValidationProps,
		InputWrapperProps,
		PlaceholderProp,
		AdditionalCompareProps {
	/** The number of rows initially shown in the text area */
	rows?: number;
}

export interface TextInputProps
	extends BaseInputProps<any, any>,
		CustomValidationProps,
		InputWrapperProps,
		InputGroupProps,
		PlaceholderProp,
		AdditionalCompareProps {
	/** The corner radius for the input area */
	radius?: number;
	/** Type of preconfigured input */
	format?: 'percentage' | 'dollar' | 'euro' | 'yen' | 'search';
}

export interface SelectInputProps
	extends BaseInputProps<string | number, string | number>,
		CustomValidationProps,
		InputWrapperProps,
		DefaultSwitchProps,
		AdditionalCompareProps {
	/** Pass in an arrow to display at the edge of the select box */

	arrow?: React.ReactNode;
}

export interface MultiSelectProps
	extends InputWrapperProps,
		BaseInputProps<any, any, List<any>>,
		AdditionalCompareProps,
		OptionsProp {
	noResultsText?: string;
	placeholder?: string;
}

export interface SwitchProps
	extends BaseInputProps<boolean | string | number, string | boolean | undefined>,
		DefaultSwitchProps,
		LabelProp,
		AdditionalCompareProps {
	/** Put into state as the value of the selected switch */
	id: string;
}

export interface RadioTabsProps extends BaseReactProps, NameProp, LabelProp {
	radioClasses?: string;
}

export interface RadioTabProps extends BaseReactProps, LabelProp {
	/** Put into state as the value of the selected switch */
	id: string;
	defaultSelected?: boolean;
}

export interface ValidationElementProps extends BaseReactProps, NameProp, AdditionalCompareProps {
	/** What validation attribute is the message for */
	isFor: InputTest;
}

export interface DisplayValidationProps
	extends BaseReactProps,
		OptionalValidationProps,
		CustomValidationProps,
		TypeProp,
		NameProp {}

export interface DropZoneProps
	extends BaseReactProps,
		NameProp,
		ValueProp<List<File>>,
		AdditionalCompareProps {
	/** Width of the droppable area */
	width?: string;
	/** Height of the droppable area */
	height?: string;
	/** Can you upload multiple files*/

	multiple?: boolean;
	/** Display a list of uploaded files*/

	showList?: boolean;
	/** Custom onDrop handler */
	onDrop?: Function;
	/** Placeholder text inside the dropzone */
	placeholder?: string;
	/** A function to display the dropped files */
	fileListComponent?: (files: Set<File>, deleteFile: (index: number) => any) => any;
}

export interface DateWrapperProps
	extends InputWrapperProps,
		InputGroupProps,
		BaseReactProps,
		PlaceholderProp {}

export interface InternalDateWrapperProps extends DateWrapperProps {
	valueString: string;
	children: React.ReactElement<any>;
}

export interface CommonDateProps
	extends BaseReactProps,
		NameProp,
		DateWrapperProps,
		OnChangeEventProps<DateRangeMoment | Moment>,
		AdditionalCompareProps {
	date?: Moment;
	dateFormat?: string;
	firstDayOfTheWeek?: number;
	theme?: Object;
	onInit?: (date?: DateRangeMoment | Moment) => void | boolean;
	minDate?: string | Moment | Function;
	maxDate?: string | Moment | Function;
	serverFormat?: string;
}

export interface DatePickerProps
	extends CommonDateProps,
		DefaultValueProp<string>,
		ValueProp<Moment> {}

export interface DateRangeProps
	extends CommonDateProps,
		DefaultValueProp<DateRangeMap>,
		ValueProp<DateRangeMap> {
	startDate?: string | Moment | Function;
	endDate?: string | Moment | Function;
	value?: DateRangeMap;
}

export interface ErrorWrapperProps extends BaseReactProps, TypeProp {}

export interface BaseAction<TType> extends Action {
	type: TType;
}

export interface FSA<TPayload, TType> extends BaseAction<TType> {
	payload?: TPayload;
	meta?: any;
}

export interface InputInfoProps {
	inputInfo: Map<string, any>;
}

export interface NameSpaceProp {
	nameSpace: string;
}

export interface ValidationComponentProps {
	isFor: string;
}

export interface FormStateProp {
	FormState: Map<string, any>;
}

export interface FormContext extends NameSpaceProp, FormStateProp {
	fieldSetNameSpace: string;
	dispatch: Function;
}

export interface FormStateProps {
	/** Can optionally be passed down by the user to intergrate with redux global state */
	FormState?: formState;
}

export interface FormDispatchProps {
	/** Can optionally be passed down by the user to intergrate with redux global state */
	dispatch?: any;
}

export interface FormState {
	canSubmitString: string;
}

export interface FormOptionalProps<T> extends BaseReactProps {
	/** Accepts different mime types and ensures the user specified onSubmit is called with data in the correct format
  * currently supports: application/json and multipart/form-data */
	encType?: 'application/json' | 'multipart/form-data';
	/** Called before the form is submitted, ths is a chance to modify the contents of the payload
   * primarily used by the form generator */

	mapOutput?: (data?: Map<string, any>) => Map<string, any>;
	/** Called once Form has ensured that all child Input components are valid */
	onSubmit?: OnSubmit<T>;
}

export interface FormOwnProps<T> extends FormOptionalProps<T> {
	/** Used to namespace all child input components in the redux store or local state */
	name: string;
}

export interface FormProps<T> extends FormOwnProps<T>, FormStateProps, FormDispatchProps {}

export interface ClearAllInputsPayload {
	nameSpace: string;
}

export interface SetInputPayload extends ClearAllInputsPayload {
	inputName: string[];
	value: PossibleInputValue;
}

export interface SetValidationPayload extends ClearAllInputsPayload {
	inputName: string[];
	type: string;
	test: string | boolean;
}

export interface SetAllInputInteractionPayload extends ClearAllInputsPayload {
	value: boolean;
	interaction: string;
}

export interface SetInputInteractionPayload extends SetAllInputInteractionPayload {
	inputName: string[];
}

export interface InputBlurred extends NameProp, NameSpaceProp, IdProp, FieldSetNameSpaceProp {
	dispatch: Dispatch<SetInputInteractionPayload>;
}

export interface InputChanged extends NameProp, NameSpaceProp, IdProp, FieldSetNameSpaceProp {
	dispatch: Dispatch<SetInputPayload>;
}

export interface SetValidation extends NameSpaceProp, NameProp, FieldSetNameSpaceProp {
	dispatch: Dispatch<SetValidationPayload>;
}

export interface ValidationCloneElementProps extends InputInfoProps, TypeProp {
	test?: TestType;
	name: string;
	setValidation: setValidation;
}

export interface ValidationAdditionProps
	extends ValidationElementProps,
		ValidationCloneElementProps {}

export interface ValidationInnerElementProps {
	displayed: boolean;
	className: string;
	children: any;
}

export interface PerformanceWrapperUncalledValidationHelpers {
	setValidation: (props: SetValidation) => setValidation;
	compareAdditionalProps: (props: AdditionalCompareProps) => compareAdditionalProps;
}

export interface PerformanceWrapperUncalledInputHelpers
	extends PerformanceWrapperUncalledValidationHelpers {
	/** Update state with a new value for this input */

	inputChanged?: (props: InputChanged) => inputChanged;
	/** Set the inputs state */

	setInputBlurred?: (props: InputBlurred) => () => void;
}

export interface PerformanceWrapperInputHelpers {
	/** Update state with a new value for this input */

	inputChanged: inputChanged;
	/** Set the inputs state */

	setInputBlurred: inputBlurred;
	setValidation: setValidation;
	compareAdditionalProps: compareAdditionalProps;
}

export interface PerformanceWrapperWithHandlers extends PerformanceWrapperInputHelpers {}

export interface PerformanceWrapperWithProps
	extends InputInfoProps,
		DefaultValueProp<PossibleInputValue> {
	inputPath: string[];
}

export interface PerformanceWrapperProps
	extends PerformanceWrapperWithProps,
		PerformanceWrapperWithHandlers,
		FormContext {}

export interface WithHandlersGuard
	extends NameProp,
		IdProp,
		TypeProp,
		DefaultSwitchProps,
		DefaultValueProp<PossibleInputValue>,
		NameProp,
		BaseReactProps,
		ValueProp<PossibleInputValue>,
		IdProp,
		TypeProp {}
