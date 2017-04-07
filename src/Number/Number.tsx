import React, {PropTypes} from 'react';
import Input from '../Input/Input';

import {TextInputProps} from "../Form/Types/types";

class Number extends React.Component<TextInputProps, {}> {
  static defaultProps = {
    pattern: '[0-9]',
    type: 'number',
  }

  render() {
    return <Input {...this.props} />;
  }
}

export default Number;