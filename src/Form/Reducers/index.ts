import {Map} from "immutable";
import {getInputValue, getInputState, getInputValidation} from "../Helpers/path";
import {isMultipleValueInput} from "../Helpers/inputHelpers";
import {FSA} from "../../../libs/types";

import {ClearAllInputsAction, SetInputAction, SetAllInputInteractionAction, SetInputInteractionAction, SetValidationAction} from "../Actions/fields"

export const basicReducer = {
  SET_INPUT: (state:Map<string, any>, {payload}:SetInputAction) => {
    const valuePath = getInputValue(payload.nameSpace, payload.inputName);
    return state.setIn(valuePath, payload.value);
  },

  SET_VALIDATION: (state:Map<string, any>, {payload}:SetValidationAction) => {
    const validationPath = getInputValidation(payload.nameSpace, payload.inputName);
    return state.updateIn(validationPath, Map(), validationMap => {
      return validationMap.set(payload.type, payload.test)
    });
  },

  SET_INPUT_INTERACTION: (state:Map<string, any>, {payload}:SetInputInteractionAction) => {
    const interactionPath = getInputState(payload.nameSpace, payload.inputName, payload.interaction);
    return state.setIn(interactionPath, payload.value);
  },

  SET_ALL_INPUT_INTERACTIONS: (state:Map<string, any>, {payload}:SetAllInputInteractionAction) => {
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
  CLEAR_ALL_INPUTS: (state:Map<string, any>, {payload}:ClearAllInputsAction) => {
    return state.set(payload.nameSpace, Map({}))
  }
}

type ReducerFunc<TState> = (state: TState, action:ClearAllInputsAction | SetInputAction | SetAllInputInteractionAction | SetInputInteractionAction | SetValidationAction) => TState

export const withReducerState = (state = Map<string, {}>(), action:ClearAllInputsAction | SetInputAction | SetAllInputInteractionAction | SetInputInteractionAction | SetValidationAction) => {
  const reducerFunc:ReducerFunc<Map<string, {}>> = basicReducer[action.type];
  if(typeof reducerFunc === 'function'){
    return reducerFunc(state, action);
  }else{
    return state;
  }
}