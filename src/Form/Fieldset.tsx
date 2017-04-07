import React, {PropTypes} from "react";
import {withContext} from "recompose";
import {FieldSetProps} from "./Types/types";
import {BaseReactProps} from "../../types"

const Fieldset = ({children, ...props}:FieldSetProps) =>(
  <fieldset {...props}>{children}</fieldset>
);

export default withContext<BaseReactProps, FieldSetProps>({
  fieldSetNameSpace: PropTypes.string
}, ({name, id} : FieldSetProps) => ({
  fieldSetNameSpace: id ? `${name}/${id}` : name
}))(Fieldset);