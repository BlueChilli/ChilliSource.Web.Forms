import React from 'react';
import classnames from 'classnames';
import './InputGroup.scss';
import {InputGroupProps} from  "./Types/types"

/** Internal method to make creation of input boxes with appended or prepended segments easier */
const InputGroup = ({prepend, append, children} : InputGroupProps) => {
  const inputGroupClass:string = classnames('input-group', {'input-prepend': !!prepend}, {'input-append': !!append});
  return (
    <div className={inputGroupClass}>
      {children}
      {!!prepend && <span className="input-addon">{prepend}</span>}
      {!!append && <span className="input-addon">{append}</span>}
    </div>
  );
};

export default InputGroup;