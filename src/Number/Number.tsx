/** Libraries */
import React from 'react';

/** Components */
import Input from '../Input/Input';

/** Interfaces */
import {TextInputProps} from '../../typings/types.d';

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