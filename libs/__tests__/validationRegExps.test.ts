import regExp from "../validationRegExps";

describe("validationRegExps object", () => {
  
  // Email Tests
  describe("Email Regex", () => {
    // Data
    const basicEmail = 'react@bluechilli.com';
    const capsEmail = 'REACT@bluechilli.com';
    const ausEmail = 'react@bluechilli.com.au';
    const numEmail = 'react9@bluechilli.com.au';
    const longDomain = 'email@WEATHERCHANNEL.museum';
    const noDomain = "email@example";

    // Regex
    const emailRegExp = new RegExp(regExp.email);

    it('works on basic email', () => {
      expect(emailRegExp.test(basicEmail)).toBe(true);
    });

    it('works on caps email', () => {
      expect(emailRegExp.test(capsEmail)).toBe(true);
    });

    it('works on country-specific email', () => {
      expect(emailRegExp.test(ausEmail)).toBe(true);
    });

    it('works on long domain email', () => {
      expect(emailRegExp.test(longDomain)).toBe(true);
    });

    it('works on numbered email', () => {
      expect(emailRegExp.test(numEmail)).toBe(true);
    });

    it('fails on no domain email', () => {
      expect(emailRegExp.test(noDomain)).toBe(false);
    });
  });

  // Number Tests
  describe("Number Regex", () => {
    // Data
    const integerNumber = '666';
    const floatNumber = '6.66';
    const alphanumericNumber = 'a666';
    const alphabeticNumber = 'aaa';

    const numberRegex = new RegExp(regExp.number);

    it('works on integers', () => {
      expect(numberRegex.test(integerNumber)).toBe(true);
    });

    it('works on floats', () => {
      expect(numberRegex.test(floatNumber)).toBe(true);
    });

    it('fails on alphanumeric word', () => {
      expect(numberRegex.test(alphanumericNumber)).toBe(false);
    });

    it('fails on alphabetic word', () => {
      expect(numberRegex.test(alphabeticNumber)).toBe(false);
    });
  });
});