/** Libraries */
import React, {FormEvent} from 'react';
import PropTypes from 'prop-types';
import {is, List, Map, Iterable} from 'immutable';
import classnames from 'classnames';
import {defer, isFunction} from 'lodash';
import {withReducer, compose, branch, ComponentEnhancer} from 'recompose';

/** Helpers */
import {setAllInputInteractions, clearAllInputs} from './Actions/fields';
import {withReducerState} from './Reducers';
import {convertToFormData, normalizeFields} from './Helpers/formHelpers';

const mapOutput = (data: Map<string, any>, mapOutputFunc: ((data?: Map<string, any>) => Map<string, any>)) => {
  if (isFunction(mapOutputFunc)){
    const mappedData = mapOutputFunc(data)
    if(!Iterable.isIterable(mappedData)){
      throw new Error("mapOutput must return an Immutable Iterable");
    }
    return mappedData;
  } else {
    return data;
  }
}

const randomString = (length) => Math.random().toString(36).substring(length);

/** Interfaces */
import {BaseReactProps, PossibleInputValue, OnSubmit, formState, 
        FormOptionalProps, FormOwnProps, FormStateProps,
        FormDispatchProps, FormState, FormProps} from '../../typings/types.d';

interface FormInnerProps<T> extends FormOwnProps<T>, FormStateProps, FormDispatchProps {
  FormState: formState,
  dispatch: any,
  mapOutput: (data?: Map<string, any>) => Map<string, any>
}

/** Displays a form component, inserts all user input into redux state and ensures that all inputs are validated
 * before allowing the user to submit the form. */
class Form extends React.Component<FormInnerProps<undefined>, FormState>{

  public static childContextTypes = {
    FormState: PropTypes.object,
    nameSpace: PropTypes.string,
    dispatch: PropTypes.func
  }

  private lastSumbittedString:string = null

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
      canSubmitString: randomString(10)
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
        canSubmitString: randomString(10)
      });
    } else {
      this.setState({
        canSubmitString: randomString(10)
      });
    }
  }

  componentWillUnmount(){
    this.props.dispatch(clearAllInputs(this.props.name));
  }

  handleFormSubmit = (event:FormEvent<{}>) => {
    event.preventDefault();

    if(this.state.canSubmitString !== this.lastSumbittedString) {
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
            this.lastSumbittedString = this.state.canSubmitString
          }
        } else {
          const scrollTo = firstError.getBoundingClientRect().top - 50;
          if(typeof window === 'object' && scrollTo < 0) {
            window.scrollTo(0, document.body.scrollTop + scrollTo - 5);
          }
        }
      });
    }
  }

  render(){
    const {FormState, dispatch, onSubmit, className, name, encType, ...safeProps} = this.props;
    const classes = classnames('form', className);
    return (
      <form name={name} ref={name} onSubmit={this.handleFormSubmit} className={classes} noValidate encType={encType}>
        {this.props.children}
      </form>
    );
  }
};

export default branch<FormProps<undefined>>(props => {
    return !(props.FormState && props.dispatch)
  }, withReducer("FormState", "dispatch", withReducerState, Map<string, {}>()) as any) //"any" is a short term fix till recompose types are updated
(Form);


export {clearAllInputs, Form}