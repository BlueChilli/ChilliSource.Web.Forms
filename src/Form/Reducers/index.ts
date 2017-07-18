import {Map} from "immutable";
import {getInputValue, getInputState, getInputValidation} from "../Helpers/path";
import {isMultipleValueInput} from "../Helpers/inputHelpers";
import {FSA} from "cs.core";

import {ClearAllInputsAction, SetInputAction, SetAllInputInteractionAction, SetInputInteractionAction, SetValidationAction} from "../Actions/fields"


export type BasicReducer = {
  SET_INPUT: ReducerFunc<Map<string, any>, SetInputAction>
  SET_VALIDATION: ReducerFunc<Map<string, any>, SetValidationAction>
  SET_INPUT_INTERACTION: ReducerFunc<Map<string, any>, SetInputInteractionAction>
  SET_ALL_INPUT_INTERACTIONS: ReducerFunc<Map<string, any>, SetAllInputInteractionAction>
  CLEAR_ALL_INPUTS: ReducerFunc<Map<string, any>, ClearAllInputsAction>
}


export const basicReducer:BasicReducer = {
  SET_INPUT: (state, {payload}) => {
    const valuePath = getInputValue(payload.nameSpace, payload.inputName);
    return state.setIn(valuePath, payload.value);
  },

  SET_VALIDATION: (state, {payload}) => {
    const validationPath = getInputValidation(payload.nameSpace, payload.inputName);
    return state.updateIn(validationPath, Map(), validationMap => {
      return validationMap.set(payload.type, payload.test)
    });
  },

  SET_INPUT_INTERACTION: (state, {payload}) => {
    const interactionPath = getInputState(payload.nameSpace, payload.inputName, payload.interaction);
    return state.setIn(interactionPath, payload.value);
  },

  SET_ALL_INPUT_INTERACTIONS: (state, {payload}) => {
    const inputs:Map<string, Map<string, any>> = state.get(payload.nameSpace, Map({}));
    if (inputs.size && inputs.size === 0) {
      return state;
    }
    const updatedFields = inputs.map((input:Map<string, any>, key:string) => {
      if (isMultipleValueInput(key)) {
        return input.map((innerInput:Map<string, any>) => {
          return innerInput.setIn(["input", payload.interaction], payload.value);
        });
      }
      return input.set(payload.interaction, payload.value);
    });
    return state.set(payload.nameSpace, updatedFields);
  },
  CLEAR_ALL_INPUTS: (state, {payload}) => {
    return state.set(payload.nameSpace, Map({}))
  }
}

export type ReducerFunc<TState = Map<string, {}>, TAction = ClearAllInputsAction | SetInputAction | SetAllInputInteractionAction | SetInputInteractionAction | SetValidationAction> = (state: TState, action:TAction) => TState

export const withReducerState = (state = Map<string, {}>(), action:ClearAllInputsAction | SetInputAction | SetAllInputInteractionAction | SetInputInteractionAction | SetValidationAction) => {
  const reducerFunc:ReducerFunc<Map<string, {}>> = basicReducer[action.type];
  if(typeof reducerFunc === 'function'){
    return reducerFunc(state, action);
  }else{
    return state;
  }
}