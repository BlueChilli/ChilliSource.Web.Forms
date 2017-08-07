import React from 'react';
import Input from '../Input/Input';

import {TextInputProps} from "../../index.d";

class Number extends React.Component<TextInputProps, {}> {
  static defaultProps = {
    pattern: '[0-9]+.?[0-9]*',
    type: 'number',
  }

  render() {
    return <Input {...this.props} />;
  }
}

export default Number;