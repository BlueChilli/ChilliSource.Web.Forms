import {Iterable, List, Map} from "immutable";
import React from "react";


type DateRangeMoment = any;
type Moment = any;

export type apiPathArgs = Map<string, string | number>
export type apiParamArgs = apiPathArgs;

export type apiResponseData<T> = string | number | boolean | Map<string | number, T> | List<T>;

// TODO: Actually force the developer to pass in T that reflects the stucture of the response
export type apiResponseDataMap = Map<string, any>;
export type apiRequestDataMap = apiResponseDataMap;

export interface AxiosResponse {
  status: number;
  data: apiResponseDataMap;
}


export type swaggerApi = (data?: apiRequestDataMap, params?: Object, pathArgs?: apiPathArgs) => Promise<AxiosResponse>;


export interface BaseAction {
  type: string;
}

export interface FSA<TPayload> extends BaseAction{
  payload?: TPayload,
  meta?: any
}

export interface ResolvedPromiseAction extends BaseAction {
  payload: Map<string, any>
}

export interface PromiseAction extends BaseAction {
  payload: {
      promise: Promise<any>;
  };
}

export interface StateNameAction extends BaseAction {
  meta: {
    stateName: string
  };
}

export interface PostAction extends BaseAction, PromiseAction, StateNameAction {};

export interface BaseReactProps {
  children?: React.ReactNode;
  key?: React.Key;
  className?: string;
}

// TODO: Actually force the developer to pass in T that reflects the structure of ShallowCompare
export type ShallowCompareInner<T> = string | number | boolean | DateRangeMoment | Moment | File | Iterable<string | number, File | T> | List<File | T>;
export type ShallowCompare = ShallowCompareInner<ShallowCompareInner<ShallowCompareInner<ShallowCompareInner<ShallowCompareInner<any>>>>>;

export interface ShallowCompareProps {
  [propName: string]: ShallowCompare;
}

export type ReactComponent<T> = React.ComponentClass<T> | React.StatelessComponent<T> | React.ClassicComponentClass<T>;

export type ReactElement<T> = React.ComponentElement<T, any> | React.SFCElement<T> | React.ClassicElement<T>;
