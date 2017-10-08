/** Libraries */
import React, { Component, ChangeEvent, FocusEvent } from 'react';

/** Helpers */
import { getHTMLAttributes } from '../Form/Helpers/inputHelpers';

/** Interfaces */
import { TextAreaProps, PerformanceWrapperProps } from '../../typings/types.d';

/** Class TextAreaBase */
class TextAreaBase extends Component<TextAreaProps & PerformanceWrapperProps, {}> {
	displayName: 'TextAreaBase';

	static defaultProps = {
		resize: 'none'
	};

	handleChange = (event: ChangeEvent<{ value: string }>) => {
		const { inputChanged, onChange } = this.props;

		inputChanged(event.target.value);
		if (typeof onChange === 'function') {
			onChange(event);
		}
	};

	handleBlur = (event: FocusEvent<{}>) => {
		const { setInputBlurred, onBlur } = this.props;

		setInputBlurred();
		if (typeof onBlur === 'function') {
			onBlur(event);
		}
	};

	render() {
		const { resize } = this.props;
		var attributes = getHTMLAttributes<TextAreaProps & PerformanceWrapperProps>(this.props);
		return (
			<textarea
				onBlur={this.handleBlur}
				onChange={this.handleChange}
				{...attributes}
				style={{ resize }}
			/>
		);
	}
}

export default TextAreaBase;
