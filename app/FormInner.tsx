/** Libraries */
import React from 'react';
import moment from 'moment';
import { List } from 'immutable';
import SyntaxHighlighter from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import { docco } from 'react-syntax-highlighter/dist/styles';

/** Components */
import {
	CheckBox,
	Form,
	Fieldset,
	Input,
	Radio,
	RadioTab,
	RadioTabs,
	Select,
	MultiSelect,
	DropZone,
	DatePicker,
	DateRange,
	TextArea,
	Validation,
	Validate
} from './';
import GitSnippet from './GitSnippet/GitSnippet';

import './FormInner.scss';
import './Styles/main.scss';

export default class FormInner extends React.Component<{}, {}> {
	render() {
		const options = List([
			{ value: 'Pash', label: 'Pash' },
			{ value: 'Wolf', label: 'Wolf' },
			{ value: 'Hunter', label: 'Hunter' },
			{ value: 'Mouse', label: 'Mouse' },
			{ value: 'Millenial', label: 'Millenial' }
		]);

		return <div>
				<div className="header">
					<div className="container">
						<p>
							ChilliSource.Web.Forms (<a href="https://goo.gl/XsNK7X" target="_blank">
								cs.forms
							</a>)
						</p>
					</div>
				</div>

				<div className="container display">
					{/* INPUTS */}
					<div className="row">
						<div className="tablet-col-4 margin-top-2">
							<Input required label="First Name" type="email" placeholder="John" name="firstName" explanation="Enter it exactly as it appears on your passport" radius={4} />
						</div>
						<div className="tablet-col-4 margin-top-2">
							<Input required label="Number" type="number" placeholder="John" name="number" explanation="Enter it exactly as it appears on your passport" radius={4} />
						</div>
					</div>
					<button className="button button-primary margin-top-2">Submit</button>
				</div>
			</div>;
	}

}
