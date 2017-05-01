import React from "react";
import {Map} from "immutable";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createReducer, combineReducers} from "redux-immutablejs";
import {basicReducer} from '../src/Form/Reducers';
import Form from "../src/Form/FormReduxWrapper";
import FormInner from "./FormInner";

const reducers = combineReducers({
  FormState: createReducer<Map<string, any>, any>(Map({}), basicReducer)
});


declare global {
  interface Window {
    "__REDUX_DEVTOOLS_EXTENSION__": () => any
  }
}


const store = createStore(reducers, reducers(Map()), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Redux extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Form name="Test">
          <FormInner/>
        </Form>
      </Provider>
    );
  }
}

const rootEl = document.getElementById("app");

ReactDOM.render(<Redux />, rootEl);