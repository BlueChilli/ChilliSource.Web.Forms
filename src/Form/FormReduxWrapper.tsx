import React from "react";
import {Map} from "immutable";
import Form, {FormProps, FormOptionalProps} from "./Form";
import {connect, Dispatch} from "react-redux";

interface MapStateToProps {
  FormState: Map<string, any>
}

interface MapDispatchToProps {
  dispatch: Dispatch<any>
}


export default (props:FormProps<undefined> & MapStateToProps & MapDispatchToProps) => <Form {...props}/>

const mapStateToProps = (state:Map<string, any>):MapStateToProps => {
  return {
    FormState: state.get('FormState', Map()) || Map()
  }
}



export {FormProps, FormOptionalProps}
// export default connect<MapStateToProps, MapDispatchToProps, FormProps<undefined>>(mapStateToProps)(FormReduxWrapper);