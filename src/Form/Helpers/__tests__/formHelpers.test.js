import { convertToFormData } from '../formHelpers';
import { Map, Set } from 'immutable';

const formMap = Map({
	attachmentFile: Set([new File(['afssdfasdf'], 'sdfsd.json')])
});

describe('convertToFormData()', () => {
	it('should convert sets to a formData list', () => {
		const formData = convertToFormData(formMap);
		console.log(formData.get('attachmentFile'));
		// const iterate = formData.get('set');
		// console.log(iterate);
	});
});
