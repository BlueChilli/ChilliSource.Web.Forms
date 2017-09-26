/** Libraries */
import React, { Component, FocusEvent } from 'react';
import classnames from 'classnames';
import onReactOutsideClick from 'react-onclickoutside';

/** Components */
import InputWrapper from '../Input/InputWrapper';
import InputGroup from '../Input/InputGroup';
import Input from '../Input/Input';

/** Icons & Images */
import dateInactiveIcon from './Assets/date-icon-inactive.svg';
import dateActiveIcon from './Assets/date-icon-active.svg';

/** Interfaces */
import { InternalDateWrapperProps } from '../../typings/types.d';

interface StateProps {
	hidden: boolean;
}

export interface DateWrapperPassedDownProps {
	/** Close the popup modal */
	close?: () => undefined;
}

/** Class DateWrapper */
class DateWrapper extends Component<InternalDateWrapperProps, StateProps> {
	refs: {
		[name: string]: HTMLInputElement;
	};

	constructor(props: InternalDateWrapperProps) {
		super(props);

		this.state = {
			hidden: true
		};
	}

	handleFocus = (event: FocusEvent<{}>) => {
		event.preventDefault();
		this.setState({ hidden: false });
	};

	handleClickOutside = () => {
		this.setState({ hidden: true });
	};

	closeInput = () => {
		this.setState({ hidden: true });
		this.refs[this.props.name].blur();
	};

	render() {
		const { hidden } = this.state;

		const dateRangeClasses = classnames({ hidden: hidden }, 'date-range-container');

		return (
			<div className="date-range-wrapper">
				<InputWrapper
					className="input date-picker"
					name={this.props.name}
					labelPostfix={this.props.labelPostfix}
					label={this.props.label}>
					<InputGroup prepend={this.props.prepend} append={this.props.append}>
						<div className={classnames('date-input-container', { active: !hidden })}>
							<input
								onFocus={this.handleFocus}
								placeholder={this.props.placeholder}
								value={this.props.valueString}
								ref={this.props.name}
								readOnly={true}
							/>
							<img src={hidden ? dateInactiveIcon : dateActiveIcon} />
						</div>
					</InputGroup>
				</InputWrapper>
				<div className={dateRangeClasses}>
					{React.cloneElement(this.props.children, {
						close: this.closeInput
					})}
				</div>
			</div>
		);
	}
}

export default onReactOutsideClick<any>(DateWrapper);
export { DateWrapper };
