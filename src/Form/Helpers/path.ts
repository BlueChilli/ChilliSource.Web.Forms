import {List} from "immutable";

export function getInputValue(nameSpace:string, inputName:Array<string>) {
  return List([nameSpace, ...inputName, 'value']);
}

export function getInputValidation(nameSpace:string, inputName:Array<string>) {
  return List([nameSpace, ...inputName]);
}

export function getInputState(nameSpace:string, inputName:Array<string>, state:string) {
  return List([nameSpace, ...inputName, state]);
}
