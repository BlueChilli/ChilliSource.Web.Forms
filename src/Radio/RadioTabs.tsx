/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import InputWrapper from '../Input/InputWrapper';

/** Interfaces */
import { RadioTabsProps, RadioTabProps, SwitchProps } from '../../typings/types.d';

/** Styles */
import './RadioTabs.scss';

export interface RadioTabsPassedDownProps {
	name: string;
	chosenId: string;
	setId: (chosenId: string) => undefined;
}

interface RadioTabsStateProps {
	chosenId: string;
}

interface RadioTabsInnerProps extends RadioTabsProps {
	children: React.ReactElement<RadioTabProps>;
}

/** Class RadioTabs */
class RadioTabs extends React.Component<RadioTabsProps, RadioTabsStateProps> {
	constructor() {
		super();
		this.state = {
			chosenId: ''
		};
	}

	setId = chosenId => {
		this.setState({
			chosenId
		});
	};

	render() {
		const { className, radioClasses = undefined, name, label, children } = this.props;
		const { chosenId } = this.state;
		var classes: string = classnames(className, 'input', 'radio-tabs');

		// Deprecation warning, v1.0.x
		if (radioClasses != undefined) {
			throw new Error('radioClasses prop has been replaced with className');
		}

		return (
			<InputWrapper className={classes} name={name} label={label}>
				{React.Children.map(children, (child: React.ReactElement<any>) => {
					{
						/* 
          ATTN SHANE: Your hack doesn't work. Fix it!
          if(typeof child.type === 'string' || child.type.name !== 'RadioTab') {
            console.warn("RadioTabs can only accept RadioTab components as childen", "Element is " + child);
          }  */
					}

					return React.cloneElement(child as React.ReactElement<RadioTabsPassedDownProps>, {
						name,
						chosenId,
						setId: this.setId
					});
				})}
			</InputWrapper>
		);
	}
}

export default RadioTabs;
