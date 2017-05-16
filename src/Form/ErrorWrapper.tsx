import React from "react";
import classnames from "classnames";
import {TypeProp} from "./Types/types"

interface Props extends TypeProp{
  className?: string,
  children?: any
}


export default ({className, type, children} : Props) => {
    var classes = classnames(className, {
      'input-hidden': type === 'hidden'
    });
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }

