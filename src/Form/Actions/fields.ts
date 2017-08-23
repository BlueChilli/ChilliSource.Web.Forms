/** Libraries */
import {Dispatch, Action} from 'redux';
import {Map} from 'immutable';
import {FSA} from 'cs.core';

/** Constants */
export const SET_INPUT = 'SET_INPUT';
export const SET_VALIDATION = 'SET_VALIDATION';
export const SET_INPUT_INTERACTION = 'SET_INPUT_INTERACTION';
export const SET_ALL_INPUT_INTERACTIONS = 'SET_ALL_INPUT_INTERACTIONS';
export const CLEAR_ALL_INPUTS = 'CLEAR_ALL_INPUTS';

/** Interfaces */
import {PossibleInputValue, SetInputAction, SetValidationAction, SetInputInteractionAction, ClearAllInputsAction, SetAllInputInteractionAction} from '../../../typings/types.d';

export function setInput(nameSpace: string, inputName:string[], value:PossibleInputValue):SetInputAction {
  return {
    type: SET_INPUT,
    payload: {
      nameSpace,
      inputName,
      value
    }
  };
}

export function setValidation(nameSpace: string, inputName:string[], type:string, test:string|boolean):SetValidationAction {
  return {
    type: SET_VALIDATION,
    payload: {
      nameSpace,
      inputName,
      type, 
      test
    }
  };
}

export function setInputInteraction(nameSpace:string, inputName:string[], interaction:string, value:boolean):SetInputInteractionAction {
  return {
    type: SET_INPUT_INTERACTION,
    payload: {
      nameSpace,
      inputName,
      interaction,
      value,
    }
  };
}

export function setAllInputInteractions(nameSpace:string, interaction:string, value:boolean):SetAllInputInteractionAction {
  return {
    type: SET_ALL_INPUT_INTERACTIONS,
    payload: {
      nameSpace,
      interaction,
      value
    }
  };
}

export function clearAllInputs(nameSpace:string):ClearAllInputsAction {
  return {
    type: CLEAR_ALL_INPUTS,
    payload: {
      nameSpace
    }
  }
}

export function setDefaultValue(nameSpace:string, inputName:string[], value:PossibleInputValue) {
  return function (dispatch:(action:SetInputAction) => void, getState: () => Map<string, any>) {
    const currentValue = getState().getIn(['FormState', nameSpace, inputName, 'value'], false);
    if (!currentValue) {
      dispatch(setInput(nameSpace, inputName, value));
    }
  }
}