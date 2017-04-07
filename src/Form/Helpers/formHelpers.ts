import {isMultipleValueInput} from "./inputHelpers";
import {Map, List, Iterable} from "immutable";

export const convertToFormData = (formMap:Map<string, any>) => {
  const formData = new FormData();
  formMap.forEach((value, key) => {
    if(Iterable.isIterable(value) && value.size === 1 && value.first() instanceof File) {
      formData.append(key, value.first());
    } else if (Map.isMap(value)) {
      value.map((innerVal, index) => {
        if(innerVal !== null){
          formData.append(key + `.${index}`, innerVal);
        }
      })
    } else if (List.isList(value)) {
      value.map((innerVal, index) => {
        if(innerVal !== null){
          formData.append(key + `[${index}]`, innerVal);
        }
      })
    } else {
      if(value !== null){
        formData.append(key, value);
      }
    }
  });
  return formData;
};

export const normalizeFields = fields => {
  return fields.map((input, inputName) => {
    if (isMultipleValueInput(inputName)) {
      return input.map(innerInput => {
        return innerInput.get('value');
      });
    }
    return input.get('value');
  });
};