/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import {withContext} from 'recompose';

/** Interfaces */
import {FieldSetProps, FormContext} from '../../typings/types.d';

/** Class Fieldset */
class Fieldset extends React.Component<FieldSetProps, undefined> {
  render() {
    const {children, ...props} = this.props;

    return (
      <fieldset {...props}>{children}</fieldset>
    );
  }
}

export default withContext<FormContext, FieldSetProps>({
  fieldSetNameSpace: PropTypes.string
}, ({name, id} : FieldSetProps) => ({
  fieldSetNameSpace: id ? `${name}/${id}` : name
}))(Fieldset);