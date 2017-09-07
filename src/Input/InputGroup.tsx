/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Interfaces */
import { InputGroupProps } from '../../typings/types.d';

/** Internal method to make creation of input boxes with appended or prepended segments easier */
const InputGroup = ({ prepend, append, style, children }: InputGroupProps) => {
	const inputGroupClass: string = classnames(
		'input-group',
		{ 'input-prepend': !!prepend },
		{ 'input-append': !!append }
	);

	return (
		<div className={inputGroupClass} style={style}>
			{!!append && <div className="input-addon">{append}</div>}
			{children}
			{!!prepend && <div className="input-addon">{prepend}</div>}
		</div>
	);
};

export default InputGroup;
