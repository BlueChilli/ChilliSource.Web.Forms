import React from "react";
import ReactDOM from "react-dom";
import FormInner from "./FormInner";
import Form from "../src/Form/Form";


class Base extends React.Component<{}, {}> {
  lastNameValidation(value:string){
    return value === 'Shane';
  }
  render() {
    return (
      <div>
        <Form name="test" onSubmit={console.log}>
          <FormInner/>
        </Form>
      </div>
    );
  }
}

const rootEl = document.getElementById("app");

ReactDOM.render(<Base />, rootEl);
