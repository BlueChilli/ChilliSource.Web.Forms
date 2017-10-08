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

		return (
			<div>
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
							<Input
								label="First Name"
								required
								placeholder="John"
								name="firstName"
								explanation="Enter it exactly as it appears on your passport"
								radius={4}
							/>
						</div>

						<div className="tablet-col-4 margin-top-2">
							<Input
								label="Last Name"
								required
								placeholder="Doe"
								name="lastName"
								explanation="Enter it exactly as it appears on your passport"
								radius={4}
							/>
						</div>

						<div className="tablet-col-4 margin-top-2">
							<Input
								name="search"
								label="Search"
								format="search"
								explanation="Enter the text you would like to search for"
								placeholder="Search"
								radius={100}
							/>
						</div>
					</div>
					<div className="row">
						<div className="tablet-col-3 margin-top-2">
							<Input name="dollars" label="Dollars" format="dollar" type="number" />
						</div>

						<div className="tablet-col-3 margin-top-2">
							<Input name="yen" label="Yen" format="yen" type="number" />
						</div>

						<div className="tablet-col-3 margin-top-2">
							<Input name="euro" label="Euro" format="euro" type="number" />
						</div>

						<div className="tablet-col-3 margin-top-2">
							<Input name="discount" label="Discount" format="percentage" type="number" />
						</div>
					</div>

					<div className="row">
						<div className="tablet-col-12 margin-top-2">
							<TextArea
								name="message"
								label="Message"
								explanation={
									<p>
										Enter your message{' '}
										<a href="https://google.com" target="_blank">
											here
										</a>
									</p>
								}
							/>
						</div>
					</div>

					{/* DATE & RANGE PICKERS */}
					<div className="row">
						<div className="tablet-col-6 margin-top-2">
							<DatePicker label="Date Picker" name="DatePickerNoDefault" />
						</div>

						<div className="tablet-col-6 margin-top-2">
							<DateRange label="Date Range" name="DateRange" />
						</div>
					</div>

					{/* SELECTS */}
					<div className="row">
						<div className="tablet-col-6 margin-top-2">
							<Select label="Front End Developers" defaultSelected="Mick" name="FrontEndDevelopers">
								<option value="Shane">Shane</option>
								<option value="Mick">Mick</option>
								<option value="Mitch">Mitch</option>
							</Select>
						</div>

						<div className="tablet-col-6 margin-top-2">
							<Select label="Numbers" name="Numbers">
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</Select>
						</div>

						<div className="tablet-col-12 margin-top-2">
							<MultiSelect
								name="FDs"
								options={options}
								defaultValue={List(['Pash', 'Hunter'])}
								label="Frontend Devs"
							/>
						</div>
					</div>

					<div className="row">
						{/* CHECKBOXES */}
						<div className="tablet-col-4 margin-top-2">
							<div className="switch-container">
								<CheckBox defaultChecked id="red" label="Red" name="color[]" />
								<CheckBox defaultChecked={false} id="blue" label="Blue" name="color[]" />
								<CheckBox defaultChecked id="green" label="Green" name="color[]" />
								<Validate name="color[]" required>
									<Validation isFor="required">Please choose a color</Validation>
								</Validate>
							</div>
						</div>

						{/* RADIOS */}
						<div className="tablet-col-4 margin-top-2">
							<div className="switch-container">
								<Radio name="size" label="Extra Small" id="x-small" />
								<Radio name="size" label="Small" id="small" />
								<Radio defaultChecked name="size" label="Medium" id="medium" />
								<Radio name="size" label="Large" id="large" />
								<Validate name="size" required>
									<Validation isFor="required">Please choose a size</Validation>
								</Validate>
							</div>
						</div>

						{/* RADIOTABS */}
						<div className="tablet-col-4 margin-top-2">
							<RadioTabs name="radio-tabs">
								<RadioTab id="tab-1" label="Tab 1" />
								<RadioTab defaultSelected id="tab-2" label="Tab 2" />
							</RadioTabs>
						</div>
					</div>

					{/* DROPZONE */}
					<div className="row">
						<div className="tablet-col-6 margin-top-2">
							<DropZone name="dropzone-single" placeholder="Drop a single file here">
								{file => <p>{file}</p>}
							</DropZone>
						</div>

						<div className="tablet-col-6 margin-top-2">
							<DropZone
								name="dropzone-multiple"
								multiple
								fileListComponent={files => files.map(file => <p>{file.name}</p>)}
							/>
						</div>
					</div>

					<button className="button button-primary margin-top-2">Submit</button>
				</div>
			</div>
		);
	}
}
