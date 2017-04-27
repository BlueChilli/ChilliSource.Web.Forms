import {Map} from "immutable";
import {getInputValue, getInputState, getInputValidation} from "../Helpers/path";
import {isMultipleValueInput} from "../Helpers/inputHelpers";
import {FSA} from "../../../libs/types";

import {ClearAllInputsPayload, SetInputPayload, SetAllInputInteractionPayload, SetInputInteractionPayload, SetValidationPayload} from "../Actions/fields"

export const basicReducer = {
  SET_INPUT: (state, {payload}:FSA<SetInputPayload>) => {
    const valuePath = getInputValue(payload.nameSpace, payload.inputName);
    return state.setIn(valuePath, payload.value);
  },

  SET_VALIDATION: (state, {payload}:FSA<SetValidationPayload>) => {
    const validationPath = getInputValidation(payload.nameSpace, payload.inputName);
    return state.updateIn(validationPath, Map(), validationMap => {
      return validationMap.set(payload.type, payload.test)
    });
  },

  SET_INPUT_INTERACTION: (state, {payload}:FSA<SetInputInteractionPayload>) => {
    const interactionPath = getInputState(payload.nameSpace, payload.inputName, payload.interaction);
    return state.setIn(interactionPath, payload.value);
  },

  SET_ALL_INPUT_INTERACTIONS: (state, {payload}:FSA<SetAllInputInteractionPayload>) => {
    const inputs:Map<string, Map<string, any>> = state.get(payload.nameSpace, Map({}));
    if (inputs.size && inputs.size === 0) {
      return state;
    }
    const updatedFields = inputs.map((input, key) => {
      if (isMultipleValueInput(key)) {
        return input.map((innerInput:Map<string, any>) => {
          return innerInput.set(payload.interaction, payload.value);
        });
      }
      return input.set(payload.interaction, payload.value);
    });
    return state.set(payload.nameSpace, updatedFields);
  },
  CLEAR_ALL_INPUTS: (state, {payload}:FSA<ClearAllInputsPayload>) => {
    return state.set(payload.nameSpace, Map({}))
  }
}

export const withReducerState = (state = Map<string, {}>(), action:FSA<SetInputPayload | SetValidationPayload | SetInputInteractionPayload | SetAllInputInteractionPayload>) => {
  const reducerFunc = basicReducer[action.type];
  if(typeof reducerFunc === 'function'){
    reducerFunc(state, action);
  }else{
    return state;
  }
}