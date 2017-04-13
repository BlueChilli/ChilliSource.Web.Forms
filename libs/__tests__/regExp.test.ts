import regExp from "../validationRegExps";

const basicEmail = 'shane@bluechilli.com';
const capsEmail = 'SHANE@bluechilli.com';
const ausEmail = 'shane@bluechilli.com.au';
const longDomain = 'email@example.museum';

const noDomain = "email@example";


describe("validationRegExps object", () => {
  describe("email regexp", () => {
    const emailRegExp = new RegExp(regExp.email);
    it('works on basic email', () => {
      expect(emailRegExp.test(basicEmail)).toBe(true);
    })
    it('works on caps email', () => {
      expect(emailRegExp.test(capsEmail)).toBe(true);
    })
    it('works on aus email', () => {
      expect(emailRegExp.test(ausEmail)).toBe(true);
    })
    it('works on longDomain email', () => {
      expect(emailRegExp.test(longDomain)).toBe(true);
    })
    it('fails on noDomain email', () => {
      console.log(emailRegExp.test(noDomain));
      expect(emailRegExp.test(noDomain)).toBe(false);
    })
  });
  describe("number regexp", () => {});
}) 
