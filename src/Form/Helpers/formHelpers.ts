import { isMultipleValueInput } from './inputHelpers';
import { Map, List, Iterable, Set } from 'immutable';

export const convertToFormData = (formMap: Map<string, any>) => {
	const formData = new FormData();
	if (Iterable.isIterable(formMap)) {
		formMap.forEach((value, key: string) => {
			if (Iterable.isIterable(value) && value.size === 1 && value.first() instanceof File) {
				formData.append(key, value.first());
			} else if (Map.isMap(value)) {
				value.map((innerVal: string | Blob, index: number) => {
					if (innerVal !== null) {
						formData.append(key + `.${index}`, innerVal);
					}
				});
			} else if (List.isList(value) || Set.isSet(value)) {
				value.map((innerVal: string | Blob, index: number) => {
					if (innerVal !== null) {
						formData.append(key + `[${index}]`, innerVal);
					}
				});
			} else {
				if (value !== null) {
					formData.append(key, value);
				}
			}
		});
		return formData;
	}
	throw new Error('convertToFormData requires a Immutable Iterable object');
};

export const normalizeFields = (fields: Map<string, any>) => {
	return fields.map<Map<string, any>>((input, inputName: string) => {
		if (isMultipleValueInput(inputName)) {
			return input.map((innerInput: Map<string, any>) => {
				return innerInput.get('value');
			});
		}
		return input.get('value');
	});
};
