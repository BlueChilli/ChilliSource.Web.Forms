import React from "react";
import PropTypes from "prop-types"
import {withContext} from "recompose";
import {FieldSetProps, FormContext} from "./Types/types";
import {BaseReactProps} from "../../libs/types"




const Fieldset = ({children, ...props}:FieldSetProps) =>(
  <fieldset {...props}>{children}</fieldset>
);

export default withContext<FormContext, FieldSetProps>({
  fieldSetNameSpace: PropTypes.string
}, ({name, id} : FieldSetProps) => ({
  fieldSetNameSpace: id ? `${name}/${id}` : name
}))(Fieldset);