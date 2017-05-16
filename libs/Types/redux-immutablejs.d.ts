
interface BaseAction {
  type: string;
}

interface FSA<TPayload> extends BaseAction{
  payload?: TPayload,
  meta?: any
}


interface Reducers<TState, TPayload> {
  [key: string]: (state:TState, action: FSA<TPayload>) => TState
}

//TODO: Type this properly
declare module "redux-immutablejs" {
  export function createReducer<TState, TPayload>(initialState: TState, reducer: Reducers<TState, TPayload>): any;
  export function combineReducers({}): any;
}

