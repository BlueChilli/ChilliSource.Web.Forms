import {ShallowCompare, BaseReactProps} from "../../../libs/types";
import {Map, List} from "immutable";
import moment, {Moment} from "moment";


export type DateRangeMoment = {
  startDate: Moment;
  endDate: Moment;
}

export interface DateRangeMap extends Map<string, Moment> {}

export type eventHandler = (any) => boolean


export type DropZoneFile = List<Map<string, any>>


export type PossibleDefaultValues = number | string | boolean | Moment | DateRangeMap;

export interface ValidationProps{
	required?: boolean,
	customValidation?: (any) => boolean	
}

export interface InputValidationProps extends ValidationProps{
	min?: string | number,
	max?: string | number,
	minLength?: string | number,
	maxLength?: string | number,
	pattern?: string,
}

export interface BaseEventProps {
	onBlur?: eventHandler
}

export interface InputEventProps extends BaseEventProps {
	onChange?: eventHandler	
}

export interface FieldSetProps extends BaseReactProps, BaseEventProps {
	id: string,
	name: string
}

export interface InputGroupProps extends BaseReactProps {
	prepend?: React.ReactNode,
	append?: React.ReactNode
}

export interface ValueProp {
	value?: ShallowCompare
}

export interface LabelProp {
	/** Add a label to the input*/			
	label?: string
}

export interface TypeProp {
	/** What type of input is it [hidden|text|ect] */
  type?: string
}

export interface NameProp {
	/** Name of the input in state; You can append [] to signify a group of inputs*/
	name: string
}

export interface IdProp {
	/** Used to provide extra identification information when name isnt enough */
	id?: string
}

export interface DefaultValueProp<TDefault> {
	/** Default value for the input to display */	
	defaultValue?: TDefault,
}

export interface DefaultSwitchProps {
	defaultChecked?: boolean | string | number,
	defaultSelected?: boolean | string | number
}

export interface InputWrapperProps extends BaseReactProps, LabelProp, NameProp, TypeProp {
	/** Pass in something to be appened to the end of a label */ 	
	labelPostfix?: any,
}


interface BaseInputProps<TDefault> extends BaseReactProps, InputEventProps, ValidationProps, NameProp, TypeProp, IdProp, DefaultValueProp<TDefault>, ValueProp{
	/** Automatically select this field on navigation*/			
	autoFocus?: boolean,
}

export interface OptionalValidationProps{
	/** Disable the input*/	
	disabled?: any,
	/** Don't validate the input*/			
	noValidate? :any,
}


export interface TextAreaProps extends BaseInputProps<string>, InputValidationProps, InputWrapperProps {}
export interface TextInputProps extends BaseInputProps<string>, InputValidationProps, InputWrapperProps, InputGroupProps, InputWrapperProps {} 
export interface SelectInputProps extends BaseInputProps<string | number>, InputValidationProps, InputWrapperProps, InputGroupProps, InputWrapperProps, DefaultSwitchProps {
	/** Pass in an arrow to display at the edge of the select box */ 
	arrow?: React.ReactNode,
	children?: Array<React.ReactText>
}

export interface SwitchProps extends BaseInputProps<boolean | string | number>, DefaultSwitchProps, LabelProp{
	/** Put into state as the value of the selected switch */
	id: string
}

export interface RadioTabsProps extends BaseReactProps, NameProp{
	radioClasses?: string,
	label?: string
}


export interface ValidationElementProps extends BaseReactProps, NameProp{
	/** What validation attribute is the message for */
	isFor: string,
}

export interface DisplayValidationProps extends BaseReactProps, OptionalValidationProps, TypeProp, NameProp{}

export interface DropZoneProps extends BaseReactProps, NameProp{
	/** Can you upload multiple files*/	
	multiple?: boolean,
	/** Display a list of uploaded files*/		
	showList?: boolean,
	value?: DropZoneFile
}

export interface DateWrapperProps extends InputWrapperProps, InputGroupProps, BaseReactProps{
	placeholder?: string
}

export interface InternalDateWrapperProps extends DateWrapperProps{
	valueString: string,
	children: React.ReactElement<any>
}

interface CommonDateProps extends BaseReactProps, NameProp, DateWrapperProps, ValueProp{
	date?: moment.Moment,
	format?: string,
	firstDayOfTheWeek?: number,
	theme?: Object,
	onChange?: eventHandler,
	onInit?: eventHandler,
	minDate?: string | moment.Moment | Function,
	maxDate?: string | moment.Moment | Function
}

export interface DatePickerProps extends CommonDateProps, DefaultValueProp<string>{}

export interface DateRangeProps extends CommonDateProps, DefaultValueProp<DateRangeMap> {
	startDate?: string | moment.Moment | Function,
	endDate?: string | moment.Moment | Function,
	value?: DateRangeMap
}


export interface ValidationCloneElementProps extends InputInfoProps {
  test: boolean | string | Function,
  type?: string,
  name: string,
	setValidation: (type: string, test: string | boolean) => undefined
}

export type InputUnionProps = TextInputProps | TextAreaProps | SelectInputProps | SwitchProps | RadioTabsProps | DatePickerProps | DateRangeProps


export interface ValidationAdditionProps extends ValidationElementProps, ValidationCloneElementProps{}

/*Performance Wrapper HOCS*/
interface InputInfo extends Map<string, any>{
	changed: boolean,
	blurred?: boolean
}

export interface InputInfoProps {
	inputInfo: InputInfo,
	inputGroupInfo: List<InputInfo>
}

export interface NameSpaceProp {
	nameSpace: string
}

export interface FormStateProp {
	FormState: Map<string, any>
}

export interface PerformanceWrapperContext extends NameSpaceProp, FormStateProp{
  fieldSetNameSpace: string,
  dispatch: Function
}

export interface PerfomanceWrapperGetInputPath {
	/** Get the path to this input in FormState */ 
	getInputPath: () => Array<string>
}



export interface PerformanceWrapperInputHelpers {
	/** Update state with a new value for this input */ 
  inputChanged: (value: ShallowCompare, changed?:boolean) => undefined,
	/** Set the inputs state */ 
  setInputBlurred: () => undefined,
  getHTMLAttributes:<T> (props: T) => React.HTMLAttributes<any>,
	setValidation: (type: string, test: string | boolean) => undefined
}

export interface PerformanceWrapperWithHandlers extends PerfomanceWrapperGetInputPath, PerformanceWrapperInputHelpers {}

export interface PerformanceWrapperWithProps extends InputInfoProps, ValueProp, DefaultValueProp<PossibleDefaultValues> {
  inputPath: string[]
}
