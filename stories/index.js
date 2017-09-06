import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

import Input, { Input as ShallowInput } from '../src/Input/Input';
import Form from '../src/Form/Form';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('CS.Forms', module)
  .add('input', withInfo('doc string about my component')(() =>
    <Form name="demo-form">
      <Input label="First Name" placeholder="John" name="firstName" radius={4}>Click the "?" mark at top-right to view the info.</Input>
    </Form>
  ))