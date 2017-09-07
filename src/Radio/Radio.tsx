/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import Switch from '../Switch/Switch';

/** Interfaces */
import { SwitchProps } from '../../typings/types.d';

/** 
 * Class Radio
 * Creates a radio button connected to forms 
 * state management. All HTML5 attributes apply.
 */
class Radio extends React.Component<SwitchProps, {}> {
	render() {
		const { className, ...other } = this.props;
		var classes: string = classnames(className, 'radio');

		return <Switch className={classes} {...other} type="radio" />;
	}
}

export default Radio;
