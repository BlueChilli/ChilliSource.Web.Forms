import React from "react";
import ReactDOM from "react-dom";
import CheckBox from "../src/CheckBox/CheckBox";
import Form from "../src/Form/Form";
import Fieldset from "../src/Form/Fieldset";
import Input from "../src/Input/Input";
import Radio from "../src/Radio/Radio";
import Select from "../src/Select/Select";
import DropZone from "../src/DropZone/DropZone";
import DateRange from "../src/DatePicker/DateRange";
import DatePicker from "../src/DatePicker/DatePicker";
import TextArea from "../src/TextArea/TextArea";
import Validation from "../src/Validation/Validation";
import Validate from "../src/Validation/Validate";


class HelloMessage extends React.Component {
  lastNameValidation(value){
    return value === 'Shane';
  }
  render() {
    return (
      <div style={{padding: "20px 40px"}}>
        <Form name="Forms">
          <Input autoFocus label="First Name" required defaultValue="First Name" pattern="[A-Za-z]+$" name="firstName" customValidation={this.lastNameValidation}>
            <Validation isFor="required">This field is required</Validation>
            <Validation isFor="customValidation">This field must be Shane</Validation>
          </Input>
          <Fieldset name="users" id="test">
            <Input label="Last Name" name="LastName" required minLength="2">
              <Validation isFor="required">This field is required</Validation>
            </Input>
            <Input label="First Name" name="FirstName" required minLength="2">
              <Validation isFor="required">This field is required</Validation>
            </Input>
          </Fieldset>
          <Fieldset name="users" id="test2">
            <Input label="Last Name" name="LastName" required minLength="2">
              <Validation isFor="required">This field is required</Validation>
            </Input>
            <Input label="First Name" name="FirstName" required minLength="2">
              <Validation isFor="required">This field is required</Validation>
            </Input>
          </Fieldset>
          <Input label="Currency" prepend="$" type="text" required min="10" max="100000"
                  pattern="[0-9]" name="Currency">
            <Validation isFor="required">Currency is required</Validation>
            <Validation isFor="pattern">Currency must be a number</Validation>
            <Validation isFor="min">Currency must be greater then 9</Validation>
            <Validation isFor="max">Currency must be less then 100001</Validation>
          </Input>
          <Input label="Percentage" append="%" type="number" required name="Percentage">
            <Validation isFor="pattern">Percentage must be a number</Validation>
          </Input>
          <Input label="Credit Card" type="text" required name="CreditCard">
            <Validation isFor="required">Currency is required</Validation>
          </Input>
          <Input label="Expiry Date" type="text" required name="ExpiryDate">
            <Validation isFor="required">Expiry Date is required</Validation>
          </Input>
          <Input label="Email" type="email" required name="Email">
            <Validation isFor="required">Email is required</Validation>
            <Validation isFor="type">Must be a valid email</Validation>
          </Input>
          <Input label="Password" labelPostfix="Your password must be at least 6 characters long." minLength="5"
                  type="password" required name="password">
            <Validation isFor="required">Password is required</Validation>
            <Validation isFor="minLength">Password must be 5 characters long</Validation>
          </Input>     
          <TextArea label="Write something" name="something"/>
          <TextArea label="With validation" required name="withValidation">
            <Validation isFor="required">With validation is required</Validation>
          </TextArea>
          <div className="switch-container">
            <CheckBox id="tanscs" required label="Terms and Conditions" name="tandcs">
              <Validation isFor="required">Please accept the T&Cs</Validation>
            </CheckBox>
          </div>
          <div className="switch-container">
            <CheckBox defaultChecked id="red" label="Red" name="color[]"/>
            <CheckBox id="blue" label="Blue" name="color[]"/>
            <CheckBox defaultChecked id="green" label="Green" name="color[]"/>
            <Validate name="color[]" required>
              <Validation isFor="required">Please choose a color</Validation>
            </Validate>
          </div>
          <div className="switch-container">
            <Radio name="size" label="Extra Small" id="x-small"/>
            <Radio name="size" label="Small" id="small"/>
            <Radio name="size" label="Medium" id="medium"/>
            <Radio name="size" label="Large" id="large"/>
            <Validate name="size" required>
              <Validation isFor="required">Please choose a size</Validation>
            </Validate>
          </div>
          <Select label="Front End Developers" defaultSelected="Mick" name="FrontEndDevelopers">
            <option value="Shane">Shane</option>
            <option value="Mick">Mick</option>
            <option value="Mitch">Mitch</option>
          </Select>

          <Select label="Numbers" name="Numbers">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <a target="_blank" href="https://github.com/okonet/react-dropzone">Props avaliable here</a>
          <br/>
          <br/>
          <DropZone className="drop-zone" name="dropZone">
            <span>Drop stuff here</span>
          </DropZone>
          <DateRange label="Date Range" name="DateRange"/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <DatePicker label="Date Picker" name="DatePicker"/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Form>
      
      </div>
    );
  }
}

const rootEl = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Jane" />, rootEl);