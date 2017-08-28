import {validations} from "../validate"



describe('validations for input fields', () => {
  const {pattern, type} = validations;
  describe('regex tests', () => {
    it('does not validate if there are no characters', () => {
      const regexp = "[0-9]";
      expect(pattern("", regexp)).toBe(true);
      expect(pattern(undefined, regexp)).toBe(true);
      expect(pattern(null, regexp)).toBe(true);
    });
    it('passes if a valid value is passed in', () => {
      const regexp = "[0-9]";
      expect(pattern("8", regexp)).toBe(true);
      expect(pattern(8, regexp)).toBe(true);
    });
    it('fails if a invalid value is passed in', () => {
      const regexp = "[0-9]";
      expect(pattern("a", regexp)).toBe(false);
      expect(pattern(false, regexp)).toBe(false);
    })
  })
 
  describe('type tests', () => {
    it('testing an email should return true', () => {
      expect(type("jarimado@gmail.com", "email")).toBe(true);
    });
  })
})