import React from "react";
import CheckBox from "../src/CheckBox/CheckBox";
import Form from "../src/Form/Form";
import Input from "../src/Input/Input";
import Radio from "../src/Radio/Radio";
import TextArea from "../src/TextArea/TextArea";


class HelloMessage extends React.Component {
  render() {
    return (
      <div>
      
        <Form name="Forms">
          <CheckBox name="checkbox"/>
        </Form>
      
      </div>
    );
  }
}

const rootEl = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Jane" />, rootEl);