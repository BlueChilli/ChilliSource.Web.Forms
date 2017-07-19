import {Component, ComponentType} from "react"
import {SwitchProps, DatePickerProps, DateRangeProps, DropZoneProps, InputGroupProps, ErrorWrapperProps, InputWrapperProps, DisplayValidationProps, TextInputProps, RadioTabProps, RadioTabsProps, SelectInputProps, MultiSelectProps, TextAreaProps, ValidateProps, FieldSetProps, InputUnionProps as InputUnionPackageProps, DateRangeMoment as DateRangePackageMoment, TypeOfTest, PossibleValues as InternalPossibleValues} from "../src/Form/Types/types";
import {BasicReducer} from "../src/Form/Reducers/index";
import {PerformanceWrapperProps, WithHandlersGuard} from "../src/Form/Helpers/performanceWrapper";
import {FormProps, FormOwnProps as FormOwnPackageProps, FormOptionalProps as FormOptionalPackageProps} from "../src/Form/Form"
import {ValidationComponentProps} from "../src/Validation/Validation"
import {ClearAllInputsAction} from "../src/Form/Actions/fields";


declare module "cs.forms" {
  export class CheckBox extends Component<SwitchProps, {}>{}
  export class DatePicker extends Component<DatePickerProps, {}>{}
  export class DateRange extends Component<DateRangeProps, {}>{}
  export class DropZone extends Component<DropZoneProps, {}>{}
  export class Input extends Component<TextInputProps, {}>{}
  export class Number extends Component<TextInputProps, {}>{}
  export class Radio extends Component<SwitchProps, {}>{}
  export class RadioTab extends Component<RadioTabProps, {}>{}
  export class RadioTabs extends Component<RadioTabsProps, {}>{}
  export class Select extends Component<SelectInputProps, {}>{}
  export class MultiSelect extends Component<MultiSelectProps, {}>{}
  export class TextArea extends Component<TextAreaProps, {}>{}
  export class Validate extends Component<ValidateProps, {}>{}
  export class Validation extends Component<ValidationComponentProps, {}>{}
  export class Form extends Component<FormProps<undefined>, {}>{}
  export class Fieldset extends Component<FieldSetProps, {}>{}
  export class InputGroup extends Component<InputGroupProps, {}>{}
  export class InputWrapper extends Component<InputWrapperProps, {}>{}
  export class ErrorWrapper extends Component<ErrorWrapperProps, {}>{}
  export class DisplayValidation extends Component<DisplayValidationProps, {}>{}
  
  export const ReduxReducer:BasicReducer;

  export type InputUnionProps = InputUnionPackageProps
  export type FormOwnProps<T> = FormOwnPackageProps<T>;
  export type FormOptionalProps<T> = FormOptionalPackageProps<T>
  export type DateRangeMoment = DateRangePackageMoment
  export type PossibleValues = InternalPossibleValues;

  export function performanceWrapper<TOutter extends WithHandlersGuard> (Component:ComponentType<TOutter & PerformanceWrapperProps>): ComponentType<TOutter>
  export function validationsAvailable<T> (inputAttributes:T): TypeOfTest[];
  export function clearAllInputs(namespace: string): ClearAllInputsAction
}
