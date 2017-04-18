import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";


class Base extends React.Component<{}, {}> {
  lastNameValidation(value){
    return value === 'Shane';
  }
  render() {
    console.log('here')
    return (
      <div>
        <Form/>
      </div>
    );
  }
}

const rootEl = document.getElementById("app");

ReactDOM.render(<Base />, rootEl);