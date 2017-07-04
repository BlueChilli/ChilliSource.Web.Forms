import {Component, ComponentType} from "react"
import {SwitchProps, DatePickerProps, DateRangeProps, DropZoneProps, TextInputProps, RadioTabProps, RadioTabsProps, SelectInputProps, MultiSelectProps, TextAreaProps, ValidateProps, FieldSetProps, InputUnionProps as InputUnionPackageProps, DateRangeMoment as DateRangePackageMoment} from "../src/Form/Types/types";
import {BasicReducer} from "../src/Form/Reducers/index";
import {PerformanceWrapperProps, WithHandlersGuard} from "../src/Form/Helpers/performanceWrapper";
import {FormProps, FormOwnProps as FormOwnPackageProps, FormOptionalProps as FormOptionalPackageProps} from "../src/Form/Form"
import {ValidationComponentProps} from "../src/Validation/Validation"

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
  export const ReduxReducer:BasicReducer;
  export type InputUnionProps = InputUnionPackageProps
  export type FormOwnProps<T> = FormOwnPackageProps<T>;
  export type FormOptionalProps<T> = FormOptionalPackageProps<T>
  export type DateRangeMoment = DateRangePackageMoment
  export function performanceWrapper<TOutter extends WithHandlersGuard> (Component:ComponentType<TOutter & PerformanceWrapperProps>): ComponentType<TOutter>
}