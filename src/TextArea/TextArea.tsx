/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import InputWrapper from '../Input/InputWrapper';
import InputGroup from '../Input/InputGroup';
import TextAreaBase from './Base';
import DisplayValidation from '../Validation/DisplayValidation';
import performanceWrapper from '../Form/Helpers/performanceWrapper';

/** Styles */
import './TextArea.scss';

/** Interfaces */
import { TextAreaProps, PerformanceWrapperProps } from '../../typings/types.d';

/** Class TextArea */
export class TextArea extends React.Component<TextAreaProps & PerformanceWrapperProps, {}> {
	render() {
		const { className, label, labelPrefix, labelPostfix, explanation, ...props } = this.props;
		const { autoFocus, onChange, onBlur, id, value, resize, ...validationProps } = props;
		const classes = classnames(className, 'textarea', 'input');

		return (
			<InputWrapper
				className={classes}
				name={props.name}
				labelPrefix={labelPrefix}
				labelPostfix={labelPostfix}
				label={label}
				explanation={explanation}>
				<InputGroup>
					<TextAreaBase {...props} />
				</InputGroup>
				<DisplayValidation {...validationProps} />
			</InputWrapper>
		);
	}
}

export default performanceWrapper<TextAreaProps>(TextArea);
