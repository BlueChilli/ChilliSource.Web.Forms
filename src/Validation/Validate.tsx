import React from "react";
import {PerformanceWrapperProps, validationPerformanceWrapper} from "../Form/Helpers/performanceWrapper";
import DisplayValidation from "./DisplayValidation";
import {InputValidationProps} from "../Form/Types/types"

interface ValidateProps extends InputValidationProps {
  /** The name of the input to validate */
  name: string
}

/** A component to allow validation anywhere inside of a form component for input elements in that same component */
class Validate extends React.PureComponent<ValidateProps & PerformanceWrapperProps, {}> {
  render() {
    return <DisplayValidation {...this.props}/>;
  }
};

export default validationPerformanceWrapper<ValidateProps>(Validate);

