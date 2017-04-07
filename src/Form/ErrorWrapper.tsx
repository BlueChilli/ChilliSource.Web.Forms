import React from "react";
import classnames from "classnames";

interface Props {
  className?: string,
  type: string,
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

