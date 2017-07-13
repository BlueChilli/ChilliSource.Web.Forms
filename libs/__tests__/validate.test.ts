import {validations, testElement, testValidation, validationsAvailable} from "../validate"
import sinon from "sinon";


describe('validations for input fields', () => {
  const {pattern} = validations;
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


describe('testElement', () => {
  it('should call setValid with true if test property is false', () => {
    let callback = sinon.spy();
    testElement({test: false, setValid: callback, value: 'string', isFor: "required"})
    expect(callback.calledWithExactly(true)).toBe(true);
  });
  it('should call setValid with true if test property is "false"', () => {
    let callback = sinon.spy();
    testElement({test: true, setValid: callback, value: 'string', isFor: "required"})
    expect(callback.calledOnce).toBe(true);
  });
  it('should call setValid with results of testValidation if test isn a function and isFor isnt customValidation', () => {
    let callback = sinon.spy();
    const availableValidations = Object.keys(validations);
    availableValidations.forEach(validation => {
      testElement({test: true, setValid: callback, value: 'string', isFor: "required"});
    });
    expect(callback.callCount === 8).toBe(true);
  })
  it('should call setValid with results of a custom function', () => {
    let callback = sinon.spy();
    const availableValidations = Object.keys(validations);
    testElement({test: () => true, setValid: callback, value: 'string', isFor: "customValidation"});
    expect(callback.calledWithExactly(true)).toBe(true);
  })
  it('should throw if it receives a function that returns a function', () => {
    let callback:any = () => () => true;
    let setValid = sinon.spy();
    expect(() => {
      testElement({test: callback, setValid, value: 'string', isFor: "customValidation"});
    }).toThrow()
  })
})