/** Libraries */
import React from 'react';

/** Components */
import { validationPerformanceWrapper } from '../Form/Helpers/performanceWrapper';
import DisplayValidation from './DisplayValidation';

/** Interfaces */
import { PerformanceWrapperProps, ValidateProps } from '../../typings/types.d';

/**
 * Class Validate
 * 
 * A component to allow validation anywhere inside of a form component
 * for input elements in that same component
 */
class Validate extends React.Component<ValidateProps & PerformanceWrapperProps, {}> {
	render() {
		return <DisplayValidation {...this.props} />;
	}
}

export default validationPerformanceWrapper<ValidateProps>(Validate);
