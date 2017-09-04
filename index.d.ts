// Type definitions for CS.Forms v1.0.57
// Project: CS.Forms
// Definitions by: BlueChilli Technology Pty Ltd <https://www.bluechilli.com>

// Reference Types
/// <reference types="react" />

/** Libraries */
import {Component} from 'react';
import {Moment} from 'moment';
import {List, Map} from 'immutable';

/** Components */
import {WithHandlersGuard, InputTest, ClearAllInputsAction, SwitchProps, OnSubmit,
        DatePickerProps, DateRangeProps, DropZoneProps, TextInputProps, DateRangeMap,
        RadioTabProps, RadioTabsProps, SelectInputProps, MultiSelectProps,
        TextAreaProps, ValidateProps, ValidationComponentProps, FormProps,
        FieldSetProps, InputGroupProps, InputWrapperProps, ErrorWrapperProps,
        DisplayValidationProps, PerformanceWrapperProps, FormOwnProps, BaseReactProps} from './typings/types.d';

export = CSForms;
export as namespace CSForms;

declare namespace CSForms {
  
  // Types and Interfaces
  // ----------------------------------------------------------------------------
  type InputUnionProps = TextInputProps | TextAreaProps | SelectInputProps | SwitchProps | RadioTabsProps | DatePickerProps | DateRangeProps
  
  type DateRangeMoment = {
    startDate: Moment;
    endDate: Moment;
  }

  type PossibleInputValue = number | string | boolean | Moment | DateRangeMap | undefined | List<any>

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

  // Functions
  // ----------------------------------------------------------------------------
  function performanceWrapper<TOutter extends WithHandlersGuard> (Component: React.ComponentType<TOutter & PerformanceWrapperProps>): React.ComponentType<TOutter>
  
  function validationsAvailable<T> (inputAttributes:T): InputTest[];
  
  function clearAllInputs(nameSpace: string): ClearAllInputsAction;


  // Components
  class CheckBox extends Component<SwitchProps, {}>{}

  class DatePicker extends Component<DatePickerProps, {}>{}

  class DateRange extends Component<DateRangeProps, {}>{}
  
  class DropZone extends Component<DropZoneProps, {}>{}
  
  class Input extends Component<TextInputProps, {}>{}

  class Number extends Component<TextInputProps, {}>{}

  class Radio extends Component<SwitchProps, {}>{}

  class RadioTab extends Component<RadioTabProps, {}>{}

  class RadioTabs extends Component<RadioTabsProps, {}>{}

  class Select extends Component<SelectInputProps, {}>{}
  
  class MultiSelect extends Component<MultiSelectProps, {}>{}

  class TextArea extends Component<TextAreaProps, {}>{}

  class Validate extends Component<ValidateProps, {}>{}

  class Validation extends Component<ValidationComponentProps, {}>{}

  class Form extends Component<FormProps<undefined>, {}>{}

  class Fieldset extends Component<FieldSetProps, {}>{}

  class InputGroup extends Component<InputGroupProps, {}>{}

  class InputWrapper extends Component<InputWrapperProps, {}>{}

  class ErrorWrapper extends Component<ErrorWrapperProps, {}>{}
  
  class DisplayValidation extends Component<DisplayValidationProps, {}>{}
}