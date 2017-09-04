import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { withInfo } from '@storybook/addon-info';
import { setDefaults } from '@storybook/addon-info';


import Input, {Input as InputComponent} from '../src/Input/Input';
import Validation from '../src/Validation/Validation';
import Form, { Form as FormComponent } from "../src/Form/Form";

import jsxToString from 'jsx-to-string';

const fs = require('fs');
/* const InputString = fs.readFileSync('../src/Input/Input', 'utf8'); */

const lastNameValidation = () => (value) => {
  return value === 'Shane';
}

console.log('jsxToString: ', jsxToString(<FormComponent name="test" onSubmit={console.log}>
  <InputComponent autoFocus label="First Name" required defaultValue="First Name" pattern="[A-Za-z]+$" name="firstName" customValidation={lastNameValidation()}>
  </InputComponent>
</FormComponent>))



// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [/* Components used in story */], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shoun in Prop Tables section
  styles: {}, // Overrides styles of addon
  marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});

const CenterDecorator = (storyFn) => (
  <Form name="test" onSubmit={console.log}>
    {storyFn()}
  </Form>
);
addDecorator(CenterDecorator);


storiesOf('Component', module)
  .add('simple info',
  withInfo('doc string about my component')(() =>
    <Component>Click the "?" mark at top-right to view the info.</Component>
  )
  )

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module) 
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>); 
  
const MadComponent = ({children}) => {
  return (
    <div>{children}</div>
  )
}

const Ayy = ({ children }) => {
  return (
    <div>{children}</div>
  )
}


const lol = () => {
  return (
      <InputComponent autoFocus label="First Name" required defaultValue="First Name" pattern="[A-Za-z]+$" name="firstName" customValidation={lastNameValidation()}>
      </InputComponent>
  )
}


storiesOf('Input', module)
  .add(
  'Text',
  withInfo("this some info")(() => (lol()))
  )

storiesOf('Test', module)
  .add(
  'Mad Component',
  withInfo("Mad Component")(() => (
    <Ayy>
      <MadComponent>Ay this is the mad component</MadComponent>
    </Ayy>
  ))
  )
