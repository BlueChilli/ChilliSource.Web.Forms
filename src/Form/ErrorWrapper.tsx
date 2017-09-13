/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Interfaces */
import {ErrorWrapperProps} from '../../typings/types.d';

/** Class ErrorWrapper */
class ErrorWrapper extends React.Component<ErrorWrapperProps, undefined> {
  render() {
    const {className, style, type, children} = this.props;

    var classes = classnames(className, {
      'input-hidden': type === 'hidden'
    });
    
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
}

export default ErrorWrapper;