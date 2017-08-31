import {Action} from 'redux';

export interface BaseAction<TType> extends Action {
  type: TType;
}

export interface FSA<TPayload, TType> extends BaseAction<TType>{
  payload?: TPayload,
  meta?: any
}

export interface BaseReactProps {
  children?: React.ReactNode;
  key?: React.Key;
	className?: string,
	style?: Object
}
