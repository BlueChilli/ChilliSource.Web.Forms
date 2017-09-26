/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import InputGroup from './InputGroup';
import InputWrapper from './InputWrapper';
import InputBase from './Base';
import DisplayValidation from '../Validation/DisplayValidation';
import performanceWrapper from '../Form/Helpers/performanceWrapper';

/** Interfaces */
import { TextInputProps, PerformanceWrapperProps } from '../../typings/types.d';

/** Icons & Images */
import yenIcon from './Assets/yen.svg';
import euroIcon from './Assets/euro.svg';
import dollarIcon from './Assets/dollar.svg';
import percentageIcon from './Assets/percentage.svg';
import searchIcon from './Assets/search.svg';

/** Styles */
import './Input.scss';

/** Class Input */
export class Input extends React.Component<TextInputProps & PerformanceWrapperProps, {}> {
	getInputGroupProps = () => {
		const { prepend, append, format } = this.props;

		let inputGroupProps = {
			append,
			prepend
		};

		const getInputAddon = (icon: string, shaded: boolean = false) => {
			return (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						height: '100%',
						backgroundColor: shaded ? '#EDEDED' : 'transparent'
					}}>
					<img src={icon} />
				</div>
			);
		};

		if (format) {
			switch (format) {
				case 'percentage': {
					inputGroupProps['append'] = getInputAddon(percentageIcon, true);
					break;
				}

				case 'yen': {
					inputGroupProps['prepend'] = getInputAddon(yenIcon, true);
					break;
				}

				case 'euro': {
					inputGroupProps['prepend'] = getInputAddon(euroIcon, true);
					break;
				}

				case 'dollar': {
					inputGroupProps['prepend'] = getInputAddon(dollarIcon, true);
					break;
				}

				case 'search': {
					inputGroupProps['append'] = getInputAddon(searchIcon);
					break;
				}

				default:
					break;
			}
		}

		return inputGroupProps;
	};

	render() {
		const {
			className,
			label,
			labelPostfix,
			labelPrefix,
			explanation,
			prepend,
			append,
			format,
			radius,
			...props
		} = this.props;
		const { autoFocus, onChange, onBlur, id, value, ...validationProps } = props;
		const classes: string = classnames(className, 'input');

		if (props.type !== 'hidden') {
			const inputWrapperProps = {
				labelPrefix,
				labelPostfix,
				explanation,
				label,
				name: props.name,
				type: props.type,
				className: classes
			};

			return (
				<InputWrapper {...inputWrapperProps}>
					<InputGroup
						{...this.getInputGroupProps()}
						style={{ borderRadius: radius ? `${radius}px` : 0 }}>
						<InputBase {...props} style={{ borderRadius: radius ? `${radius}px` : 0 }} />
					</InputGroup>
					<DisplayValidation {...validationProps} />
				</InputWrapper>
			);
		}
		return <InputBase {...props} />;
	}
}

export default performanceWrapper<TextInputProps>(Input);
