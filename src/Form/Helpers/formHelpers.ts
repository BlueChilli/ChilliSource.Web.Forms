import {Map, List, Iterable} from "immutable";

export const convertToFormData = (formMap:Map<string, any>) => {
  const formData = new FormData();
  if(Iterable.isIterable(formMap)){
    formMap.forEach((value, key:string) => {
    if(Iterable.isIterable(value) && value.size === 1 && value.first() instanceof File) {
      formData.append(key, value.first());
    } else if (Map.isMap(value)) {
      value.map((innerVal:string | Blob, index:number) => {
        if(innerVal !== null){
          formData.append(key + `.${index}`, innerVal);
        }
      })
    } else if (List.isList(value)) {
      value.map((innerVal:string | Blob, index:number) => {
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
  }
  throw new Error("convertToFormData requires a Immutable Iterable object")
};

export const normalizeFields = (fields:Map<string, any>, depth:number = 0) => {
  if(depth > 20) {
    throw new Error("Your form nesting has exceeded the maximum limit");
  }

  return fields.map<Map<string, any>>((input, inputName:string) => {
    if(input.has('value')) {
      return input.get("value");
    } else {
      return normalizeFields(input, depth + 1);
    }
  });
};