/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Interfaces */
import {InputGroupProps} from '../../typings/types.d';

/** Internal method to make creation of input boxes with appended or prepended segments easier */
const InputGroup = ({prepend, append, children} : InputGroupProps) => {
  const inputGroupClass:string = classnames('input-group', {'input-prepend': !!prepend}, {'input-append': !!append});
  
  return (
    <div className={inputGroupClass}>
      {!!append && <span className="input-addon">{append}</span>}
      {children}
      {!!prepend && <span className="input-addon">{prepend}</span>}
    </div>
  );
};

export default InputGroup;