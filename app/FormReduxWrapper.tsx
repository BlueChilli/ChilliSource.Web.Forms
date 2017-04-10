import React from "react";
import {Map} from "immutable";
import Form from "./Form";
import {connect} from "react-redux";

class FormReduxWrapper extends React.Component<{}, {}> {
  render() {
    return (
     <Form {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    FormState: state.get('FormState', Map()) || Map()
  }
}

export default connect(mapStateToProps)(FormReduxWrapper)