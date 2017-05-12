import React from "react";
import {PerformanceWrapperProps, validationPerformanceWrapper} from "../Form/Helpers/performanceWrapper";
import DisplayValidation from "./DisplayValidation";
import {BaseFreclValidationProps} from "../Form/Types/types"

interface ValidateProps extends BaseFreclValidationProps {
  /** The name of the input to validate */
  name: string
}

/** A component to allow validation anywhere inside of a form component for input elements in that same component */
class Validate extends React.Component<ValidateProps & PerformanceWrapperProps, {}> {
  render() {
    return <DisplayValidation {...this.props}/>;
  }
};

export default validationPerformanceWrapper<ValidateProps>(Validate);

