import React, {FormEvent} from "react";
import PropTypes from "prop-types";
import {is, List, Map} from "immutable";
import classnames from "classnames";
import {defer} from "lodash";
import {setAllInputInteractions, clearAllInputs} from "./Actions/fields";
import {withReducerState} from "./Reducers";
import {isMultipleValueInput} from "./Helpers/inputHelpers";
import {ShallowCompare, BaseReactProps} from "../../libs/types";
import {convertToFormData, normalizeFields} from "./Helpers/formHelpers";
import {withReducer, compose, branch} from "recompose";


type formState = Map<string, Map<string, ShallowCompare>>

export type OnSubmit<T> = (e:any, formData:formState | FormData, submitGeneratedForm?:T) => void

export interface FormOptionalProps<T> extends BaseReactProps {
    /** Accepts different mime types and ensures the user specified onSubmit is called with data in the correct format
     * currently supports: application/json and multipart/form-data */
    encType?: 'application/json' | 'multipart/form-data',
    /** Called before the form is submitted, ths is a chance to modify the contents of the payload
     * primarily used by the form generator */    
    mapOutput?: (data?: Map<string, any>) => Map<string, any>,
     /** Called once Form has ensured that all child Input components are valid */
    onSubmit?: OnSubmit<T>,    
}

interface FormStateProps {
  /** Can optionally be passed down by the user to intergrate with redux global state */
  FormState?: formState,
}

interface FormDispatchProps {
  /** Can optionally be passed down by the user to intergrate with redux global state */
  dispatch?: any
}

interface FormState {
  canSubmit: boolean
}

interface FormOwnProps<T> extends FormOptionalProps<T> {
   /** Used to namespace all child input components in the redux store or local state */
    name: string,
}

export interface FormProps<T> extends FormOwnProps<T>, FormStateProps, FormDispatchProps {

}
interface FormInnerProps<T> extends FormOwnProps<T>, FormStateProps, FormDispatchProps {
  FormState: formState,
  dispatch: any,
  mapOutput: (data?: Map<string, any>) => Map<string, any>
}

const mapOutput = (data:Map<string, any>, mapOutputFunc: ((data?: Map<string, any>) => Map<string, any>)) => (mapOutput) ? mapOutputFunc(data) : data;

/** Displays a form component, inserts all user input into redux state and ensures that all inputs are validated
 * before allowing the user to submit the form. */
class Form extends React.Component<FormInnerProps<undefined>, FormState>{

  public static childContextTypes = {
    FormState: PropTypes.object,
    nameSpace: PropTypes.string,
    dispatch: PropTypes.func
  }

  //FIXME: any to make TS happy unsure why it needs to be this way
  public static defaultProps:any = {
    encType: 'application/json',
    mapOutput: (data:Map<string, any>) => data
  }

  refs: {
    [name: string]: Element
  }

  constructor(props:FormInnerProps<undefined>){
    super(props);
    this.state = {
      canSubmit: false
    }
  }

  getChildContext(){
    return {
      FormState: this.props.FormState,
      nameSpace: this.props.name,
      dispatch: this.props.dispatch
    }
  }

  componentWillReceiveProps(nextProps:FormProps<undefined>){
    if (this.props.name !== nextProps.name) {
      this.props.dispatch(clearAllInputs(nextProps.name));
      // make the new form unsubmit-able
      this.setState({
        canSubmit: false
      });
    } else {
      this.setState({
        canSubmit: nextProps.FormState !== this.props.FormState
      });
    }
  }

  componentWillUnmount(){
    this.props.dispatch(clearAllInputs(this.props.name));
  }

  handleFormSubmit = (event:FormEvent<{}>) => {
    event.preventDefault();

    if(this.state.canSubmit) {
      const {dispatch, onSubmit, FormState, name, encType} = this.props;

      // INSERT COMMENT HERE
      dispatch(setAllInputInteractions(name, "changed", true));

      // INSERT COMMENT HERE
      defer(() => {
        const form = this.refs[name];
        const firstError = form.querySelector('.invalid');
        
        if(firstError === null) {
          if(onSubmit) {
            const fields = FormState.get(name);
            const normalizedFields = mapOutput(normalizeFields(fields) as Map<string, any>, this.props.mapOutput);

            if(encType === "multipart/form-data") {
              onSubmit(event, convertToFormData(normalizedFields));
            } else {
              onSubmit(event, normalizedFields);
            }

            // update state so users cannot submit again
            this.setState({
              canSubmit: false
            });
          }
        } else {
          const scrollTo = firstError.getBoundingClientRect().top - 50;
          if(scrollTo < 0) {
            window.scrollTo(0, document.body.scrollTop + scrollTo - 5);
          }
        }
      });
    }
  }

  render(){
    const {FormState, dispatch, onSubmit, className, name, encType, ...safeProps} = this.props;
    var classes = classnames('form', className);
    return (
      <form name={name} ref={name} onSubmit={this.handleFormSubmit} className={classes} noValidate encType={encType}>
        {this.props.children}
      </form>
    );
  }
};

export default compose<FormStateProps & FormDispatchProps, FormProps<undefined>>(
  branch<FormProps<undefined>>(props => {
    return !(props.FormState && props.dispatch)
  }, withReducer("FormState", "dispatch", withReducerState, Map<string, {}>()))
)(Form);


export {clearAllInputs}