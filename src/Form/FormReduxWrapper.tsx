/** Libraries */
import React from 'react';
import {Map} from 'immutable';
import {connect, Dispatch} from 'react-redux';

/** Components */
import Form from './Form';

/** Interfaces */
import {FormProps, FormOptionalProps} from '../../typings/types.d';

interface MapStateToProps {
  FormState: Map<string, any>
}

interface MapDispatchToProps {
  dispatch: Dispatch<any>
}


export default (props: FormProps<undefined> & MapStateToProps & MapDispatchToProps) => <Form {...props}/>

const mapStateToProps = (state:Map<string, any>):MapStateToProps => {
  return {
    FormState: state.get('FormState', Map()) || Map()
  }
}

export {FormProps, FormOptionalProps}