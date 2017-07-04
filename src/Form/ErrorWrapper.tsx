import React from "react";
import classnames from "classnames";
import {TypeProp} from "./Types/types"
import {BaseReactProps} from "../../libs/types"

interface Props extends TypeProp, BaseReactProps{
}


export default ({className, style, type, children} : Props) => {
    var classes = classnames(className, {
      'input-hidden': type === 'hidden'
    });
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }

