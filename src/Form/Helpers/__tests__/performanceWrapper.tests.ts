import {HTMLAttributes} from "react";
import {getHTMLAttributes} from "../performanceWrapper";
import {isEqual} from "lodash";

// required", "name", "type", "value", "min", "max", "minLength", "maxLength"

const supportedProps = {
  min: 30,
  max: 25,
  value: true,
  id: "test",
  autoFocus: true,
  required: true,
  name: "input",
  type: "input",
  minLength: 5,
  maxLength: 1000,
  pattern: "[0-9]"
}

const unsupportedProps = {
  misc: 'here',
  another: true
}


describe("perfomanceWraper", () => {
  describe("getHTMLAttributes", () => {
    it("returns all supported attributes", () => {
      const returnedSupportedProps = getHTMLAttributes(supportedProps);
      expect(isEqual(supportedProps, returnedSupportedProps)).toBe(true);
    })
    it("excludes unsupported attributes", () => {
      const returnedSupportedProps = getHTMLAttributes(Object.assign({}, supportedProps, unsupportedProps));
      expect(isEqual(supportedProps, returnedSupportedProps)).toBe(true);
    })
  })
})