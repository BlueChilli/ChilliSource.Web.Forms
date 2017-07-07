import React from "react";
import classnames from "classnames";
import {ErrorWrapperProps} from "./Types/types"


export default ({className, style, type, children} : ErrorWrapperProps) => {
    var classes = classnames(className, {
      'input-hidden': type === 'hidden'
    });
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }

