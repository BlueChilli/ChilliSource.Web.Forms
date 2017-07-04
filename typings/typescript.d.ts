import {Component, ComponentType} from "react"
import {SwitchProps, DatePickerProps, DateRangeProps, DropZoneProps, TextInputProps, RadioTabProps, RadioTabsProps, SelectInputProps, MultiSelectProps, TextAreaProps, ValidateProps, ValidationElementProps, FieldSetProps} from "../src/Form/Types/types";
import {BasicReducer} from "../src/Form/Reducers/index";
import {PerformanceWrapperProps, WithHandlersGuard} from "../src/Form/Helpers/performanceWrapper";
import {FormProps, FormOwnProps, FormOptionalProps} from "../src/Form/Form"

declare module "cs.forms" {
  type CheckBox = Component<SwitchProps, {}>
  type DatePicker = Component<DatePickerProps, {}>
  type DateRange = Component<DateRangeProps, {}>
  type DropZone = Component<DropZoneProps, {}>
  type Input = Component<TextInputProps, {}>
  type Number = Component<TextInputProps, {}>
  type Radio = Component<SwitchProps, {}>
  type RadioTab = Component<RadioTabProps, {}>
  type RadioTabs = Component<RadioTabsProps, {}>
  type Select = Component<SelectInputProps, {}>
  type MultiSelect = Component<MultiSelectProps, {}>
  type TextArea = Component<TextAreaProps, {}>
  type Validate = Component<ValidateProps, {}>
  type Validation = Component<ValidationElementProps, {}>
  type Form = Component<FormProps<undefined>, {}>
  type Fieldset = Component<FieldSetProps, {}>
  type ReduxReducer = BasicReducer;
  type performanceWrapper<TOutter extends WithHandlersGuard> = (Component:ComponentType<TOutter & PerformanceWrapperProps>) => ComponentType<TOutter>
  
  export {
    CheckBox, DatePicker, DateRange, DropZone, Input, Number, Radio, RadioTab, RadioTabs, Select, MultiSelect, TextArea, Validate, Validation, Form, FormOwnProps, FormOptionalProps, Fieldset, ReduxReducer, performanceWrapper
  }
}
