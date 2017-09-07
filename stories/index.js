import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

import Input, { Input as ShallowInput } from '../src/Input/Input';
import Form from '../src/Form/Form';
import Select, { Select as ShallowSelect } from "../src/Select/Select";
import CheckBox, { CheckBox as ShallowCheckBox } from "../src/CheckBox/CheckBox";
import Validate from "../src/Validation/Validate"
import Validation from "../src/Validation/Validation";
import FormInner from '../app/FormInner';


import "../app/FormInner.scss";
import "../app/Styles/main.scss";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>); 

const ShallowFormDecorator = (storyFn) => (
  <div className="container display">
    <Form name="demo-form">
      { storyFn() }
    </Form>
  </div>
);



/* 
storiesOf("CS.Forms", module)
  .add( "input", withInfo("doc string about my component")(() => (
   
  )
  )
 */


 storiesOf("CS.Forms", module)
   .addDecorator(ShallowFormDecorator)
   .add("input", withInfo("This is an input component")(() => (
       <div className="row">
            <div className="tablet-col-6">
              <ShallowInput label="First Name" placeholder="John" name="firstName" explanation="Enter it exactly as it appears on your passport" radius={4} />
            </div>

            <div className="tablet-col-6">
              <ShallowInput label="Last Name" placeholder="Doe" name="lastName" explanation="Enter it exactly as it appears on your passport" radius={4} />
            </div>
        </div>
     )))
   .add("select", withInfo("This is an select component")(() => (
       <ShallowSelect name="input" label="Name">
         <option value="Shane">Shane</option>
         <option value="Mick">Mick</option>
         <option value="Mitch">Mitch</option>
       </ShallowSelect>
     )))
   .add("radio", withInfo("This is an radio component")(() =>
         <ShallowCheckBox defaultChecked id="red" label="Red" name="color[]" />));
    


/*   .add( "select",
    withInfo("doc string about my component")(() => ( <ShallowInput name="input" label="Name" />  
)) */