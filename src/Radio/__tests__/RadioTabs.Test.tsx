import React from 'react';
import { shallow, mount } from 'enzyme';
import { isEqual } from 'lodash';
import Form from '../../Form/Form';
import RadioTabs from '../RadioTabs';
import RadioTab from '../RadioTab';

const radioTabChildren = [
	<RadioTab key="radiotab1" id="RadioTab1">
		Tab1
	</RadioTab>,
	<RadioTab key="radiotab2" id="RadioTab2">
		Tab2
	</RadioTab>,
	<RadioTab key="radiotab3" id="RadioTab3">
		Tab3
	</RadioTab>
];

const radioTabDefaultChildren = [
	<RadioTab key="radiotab1" id="RadioTab1">
		Tab1
	</RadioTab>,
	<RadioTab key="radiotab2" defaultSelected id="RadioTab2">
		Tab2
	</RadioTab>,
	<RadioTab key="radiotab3" id="RadioTab3">
		Tab3
	</RadioTab>
];

const htmlChildren = [<p key="p">p tag</p>, <div key="div">div tag</div>, <h1 key="h1">h1 tag</h1>];

const allRadioTabsProps = {
	name: 'name',
	className: 'RadioTabsClass input radio-tabs',
	label: 'RadioTabs Label'
};

const { name, className, label } = allRadioTabsProps;

const inputWrapperProps = {
	name,
	label,
	className: 'RadioTabsClass input radio-tabs'
};

describe('<RadioTabs />', () => {
	it('should have the required props for InputWrapper', () => {
		const wrapper = shallow(
			<Form name="Form">
				<RadioTabs {...allRadioTabsProps} />
			</Form>
		).find(RadioTabs);
		const { children, ...InputWrapperProps } = wrapper.props();
		expect(isEqual(InputWrapperProps, inputWrapperProps)).toBe(true);
	});

	it('should render pure HTML children', () => {
		const radioTabsProps = {
			children: htmlChildren,
			...allRadioTabsProps
		};

		const wrapper = shallow(
			<Form name="Form">
				<RadioTabs {...radioTabsProps} />
			</Form>
		);
		htmlChildren.map(item => {
			expect(wrapper.contains(item)).toBe(true);
		});
	});

	it('should render react higher order components', () => {
		const radioTabsProps = {
			children: radioTabChildren,
			...allRadioTabsProps
		};
		const wrapper = shallow(
			<Form name="Form">
				<RadioTabs {...radioTabsProps} />
			</Form>
		);
		radioTabChildren.map(item => {
			expect(wrapper.contains(item)).toBe(true);
		});
	});

	it('should set the name, chosenId and setId prop on children', () => {
		const radioTabsProps = {
			children: radioTabChildren,
			...allRadioTabsProps
		};
		const wrapper = mount(
			<Form name="Form">
				<RadioTabs {...radioTabsProps} />
			</Form>
		);

		const test = wrapper.find('RadioTab').everyWhere(elm => {
			return (
				elm.prop('name') === allRadioTabsProps.name &&
				elm.prop('chosenId') === '' &&
				typeof elm.prop('setId') === 'function'
			);
		});

		expect(test).toBe(true);
	});

	it('should set chosenId to correct id', () => {
		const radioTabsProps = {
			children: radioTabDefaultChildren,
			...allRadioTabsProps
		};
		const wrapper = mount(
			<Form name="Form">
				<RadioTabs {...radioTabsProps} />
			</Form>
		);

		const test = wrapper.find('RadioTab').everyWhere(elm => {
			return elm.prop('chosenId') === 'RadioTab2';
		});

		expect(test).toBe(true);
	});

	it('should add an active class to chosen tab', () => {
		const radioTabsProps = {
			children: radioTabDefaultChildren,
			...allRadioTabsProps
		};
		const wrapper = mount(
			<Form name="Form">
				<RadioTabs {...radioTabsProps} />
			</Form>
		);

		expect(
			wrapper
				.find('.active')
				.find('#RadioTab2')
				.exists()
		).toBe(true);
	});

	it('should throw if you pass in radioClasses', () => {
		const brokenProps = {
			...allRadioTabsProps,
			radioClasses: 'This_will_break'
		};

		const wrapper = shallow(
			<Form name="Form">
				<RadioTabs {...brokenProps} />
			</Form>
		).find(RadioTabs);
		expect(wrapper).toThrow();
	});

	it('should throw error when Radio tab is not a direct children of Radio Tabs', () => {
		const tabItems = [
			{ id: 'tab1', selected: true },
			{ id: 'tab2', selected: false },
			{ id: 'tab3', selected: false }
		];

		expect(() => {
			mount(
				<Form name="Form">
					<RadioTabs {...allRadioTabsProps}>
						{tabItems.map((item, index) => (
							<div key={index}>
								<RadioTab id={item.id} defaultSelected={item.selected} />
								<h5>Hello</h5>
							</div>
						))}
					</RadioTabs>
				</Form>
			);
		}).toThrow();
	});
});

//Throws error if form doesnt exist
