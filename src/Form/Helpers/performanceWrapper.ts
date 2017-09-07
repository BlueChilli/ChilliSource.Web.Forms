/** Libraries */
import { ComponentType, ReactHTMLElement } from 'react';
import PropTypes from 'prop-types';
import Recompose from 'recompose';
import { isUndefined } from 'lodash';
import { getContext, withProps, shouldUpdate, withHandlers, compose, lifecycle } from 'recompose';
import { Map } from 'immutable';

/** Components */
import { isMultipleValueInput, returnCheckedValue } from './inputHelpers';
import { createSpecificShallowEqual } from 'cs.core';
import { setInput, setInputInteraction, setValidation } from '../Actions/fields';
import {
	BaseReactProps,
	WithHandlersGuard,
	PerformanceWrapperProps,
	FormContext,
	PerformanceWrapperWithProps,
	PerformanceWrapperWithHandlers,
	PerformanceWrapperInputHelpers,
	FieldSetNameSpaceProp,
	ValidationProps,
	OptionsProp,
	PerformanceWrapperUncalledInputHelpers,
	PerformanceWrapperUncalledValidationHelpers,
	NameProp,
	IdProp,
	TypeProp,
	PossibleInputValue,
	OptionalValidationProps,
	LabelProp,
	DefaultValueProp,
	InputInfoProps,
	DefaultSwitchProps,
	NameSpaceProp,
	FormStateProp,
	ValueProp,
	SetValidation,
	AdditionalCompareProps
} from '../../../typings/types.d';

interface GetInputPathGuard extends NameProp, IdProp, FieldSetNameSpaceProp {}
interface GetValidationPathGuard extends NameProp, FieldSetNameSpaceProp {}
interface WithNeededPropsGuard
	extends DefaultSwitchProps,
		DefaultValueProp<PossibleInputValue>,
		ValueProp<PossibleInputValue>,
		NameProp,
		IdProp,
		TypeProp {}
type SpecificShallowEqualInterface = InputInfoProps &
	NameProp &
	NameSpaceProp &
	TypeProp &
	IdProp &
	BaseReactProps &
	OptionalValidationProps &
	ValidationProps &
	DefaultValueProp<PossibleInputValue> &
	DefaultSwitchProps &
	OptionsProp &
	FieldSetNameSpaceProp &
	ValueProp<PossibleInputValue> &
	LabelProp;

/** Helpers */
const specificShallowEqual = createSpecificShallowEqual<SpecificShallowEqualInterface>(
	'inputInfo',
	'name',
	'nameSpace',
	'type',
	'id',
	'disabled',
	'noValidate',
	'required',
	'className',
	'defaultValue',
	'defaultChecked',
	'defaultSelected',
	'options',
	'fieldSetNameSpace',
	'value',
	'label'
);

const specificShallowEqualDefault = createSpecificShallowEqual<
	DefaultValueProp<PossibleInputValue>
>('defaultValue');

const specificShallowEqualValue = createSpecificShallowEqual<ValueProp<PossibleInputValue>>(
	'value'
);

const getUnsetValue = ({ type }: TypeProp) => {
	if (type === 'radio' || type === 'checkbox') {
		return undefined;
	} else {
		return '';
	}
};

/**
 * 
 * @param type The type of grouping - 'input' or 'validation'
 * @param Object The values for each of the items i.e. {name, id, fieldSetNameSpace}
 */
export const getInputPath = (
	type: 'input' | 'validation',
	{ name, id, fieldSetNameSpace }: GetInputPathGuard
): string[] => {
	if (isMultipleValueInput(name) && fieldSetNameSpace !== undefined) {
		if (id) {
			return [fieldSetNameSpace, name, type, id];
		} else {
			return [fieldSetNameSpace, name, type];
		}
	} else if (fieldSetNameSpace !== undefined) {
		return [fieldSetNameSpace, name];
	} else if (isMultipleValueInput(name)) {
		if (id) {
			return [name, type, id];
		} else {
			return [name, type];
		}
	}
	return [name];
};

export const getPrioritisedDefaultValue = (
	defaultValue?: PossibleInputValue,
	defaultChecked?: boolean | number | string,
	defaultSelected?: boolean | number | string
) =>
	returnCheckedValue(
		arg => !isUndefined(arg) && arg !== false,
		defaultValue,
		defaultChecked,
		defaultSelected
	);

export const getPrioritisedValue = (
	value: PossibleInputValue,
	inputInfoValue: PossibleInputValue,
	prioritisedDefaultValue: PossibleInputValue,
	unsetValue: string | boolean
) =>
	returnCheckedValue(
		arg => !isUndefined(arg),
		value,
		inputInfoValue,
		prioritisedDefaultValue,
		unsetValue
	);

const setIdToDefault = (type: string, id: string, defaultSwitch: string | number | boolean) => {
	if (
		(type === 'radio' || type === 'checkbox') &&
		typeof defaultSwitch === 'boolean' &&
		defaultSwitch !== false
	) {
		return id;
	}
	return defaultSwitch;
};

export const withNeededProps = <TOutter extends WithNeededPropsGuard>() =>
	withProps<
		PerformanceWrapperWithProps,
		PerformanceWrapperWithHandlers & FormContext & TOutter
	>((props: FormContext & TOutter) => {
		if (props.nameSpace === undefined) {
			throw new Error(
				`nameSpace is undefined ensure that a Form component is a parent of the component with name: "${props.name}"`
			);
		}

		const inputPath = getInputPath('input', props);
		const inputInfo = props.FormState.getIn([props.nameSpace, ...inputPath], Map({}));
		const { defaultValue, defaultChecked, defaultSelected } = props;

		const prioritisedDefaultValue = getPrioritisedDefaultValue(
			defaultValue,
			setIdToDefault(props.type, props.id, defaultChecked),
			setIdToDefault(props.type, props.id, defaultSelected)
		);
		const value = getPrioritisedValue(
			props.value,
			inputInfo.get('value'),
			prioritisedDefaultValue,
			getUnsetValue(props)
		);
		return {
			inputInfo,
			defaultValue: prioritisedDefaultValue,
			inputPath,
			value
		};
	});

const setValidationWithHandlersObject = {
	setValidation: ({ dispatch, nameSpace, ...props }: SetValidation) => (
		type: string,
		test: string | boolean
	) => {
		dispatch(setValidation(nameSpace, getInputPath('validation', props), type, test));
	},
	compareAdditionalProps: ({ additionalCompareProps }: AdditionalCompareProps) => {
		if (additionalCompareProps) {
			return createSpecificShallowEqual<any>(...additionalCompareProps);
		} else {
			return () => false;
		}
	}
};

export const updateLifcycle = <TOutter extends ValueProp<PossibleInputValue>>() =>
	lifecycle<PerformanceWrapperProps & TOutter, {}>({
		componentWillMount() {
			this.props.inputChanged(this.props.value, false);
		},
		componentWillReceiveProps(nextProps) {
			if (!specificShallowEqualDefault(nextProps, this.props)) {
				nextProps.inputChanged(nextProps.defaultValue, false);
			}
			if (!specificShallowEqualValue(nextProps, this.props)) {
				nextProps.inputChanged(nextProps.value, true);
			}
			if (!nextProps.FormState.hasIn([nextProps.nameSpace, ...nextProps.inputPath])) {
				nextProps.inputChanged(nextProps.value, false);
			}
		}
	});

const createUniversalCompose = <TOutter extends WithHandlersGuard, TWithHandlers extends {}>(
	withHandlersArgs: TWithHandlers,
	type: string = 'input'
) =>
	compose<PerformanceWrapperProps & TOutter, TOutter>(
		getContext<FormContext>({
			nameSpace: PropTypes.string,
			FormState: PropTypes.object,
			fieldSetNameSpace: PropTypes.string,
			dispatch: PropTypes.func
		}),
		withNeededProps<TOutter>(),
		withHandlers<TWithHandlers, FormContext & TOutter>(withHandlersArgs),
		shouldUpdate<PerformanceWrapperProps & TOutter>((props, nextProps) => {
			return (
				!specificShallowEqual(props, nextProps) ||
				!nextProps.compareAdditionalProps(props, nextProps)
			);
		})
	);

export const validationPerformanceWrapper = <TOutter extends WithHandlersGuard>(
	ReactClass: ComponentType<TOutter & PerformanceWrapperProps>
) =>
	createUniversalCompose<TOutter, PerformanceWrapperUncalledValidationHelpers>(
		setValidationWithHandlersObject
	)(ReactClass);

export default <TOutter extends WithHandlersGuard>(
	ReactClass: ComponentType<TOutter & PerformanceWrapperProps>
) => {
	const inputWrapperCompose = createUniversalCompose<
		TOutter,
		PerformanceWrapperUncalledInputHelpers
	>({
		inputChanged: ({ dispatch, nameSpace, name, id, fieldSetNameSpace }) => (
			value,
			changed: boolean = true
		) => {
			const inputPath = getInputPath('input', { name, id, fieldSetNameSpace });
			dispatch(setInput(nameSpace, inputPath, value));
			dispatch(setInputInteraction(nameSpace, inputPath, 'changed', changed));
		},
		setInputBlurred: ({ dispatch, nameSpace, ...props }) => () => {
			dispatch(setInputInteraction(nameSpace, getInputPath('input', props), 'blurred', true));
		},
		...setValidationWithHandlersObject
	});

	return compose<PerformanceWrapperProps & TOutter, TOutter>(
		inputWrapperCompose,
		updateLifcycle<TOutter>()
	)(ReactClass);
};
