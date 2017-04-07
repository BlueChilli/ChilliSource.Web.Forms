import React from "react"
import {List} from "immutable";
import {connect} from "react-redux";
import {setInput} from "../../../Frecl/Components/Form/Actions/fields";
import performanceWrapper from "../Form/Helpers/performanceWrapper";
import {Input, Row, Col} from '../../exports';


const MultiInputBase = React.createClass({
  handleAdd(){
    this.props.inputChanged(this.props.value.concat([this.props.inputVal]));
    this.props.clearInput()
  },
  createDeleteItem(index){
    return () => {
      this.props.inputChanged(this.props.value.delete(index));
    }
  },
  render() {
    return (
      <div className="multi-input">
        <ul>
          {this.props.value.map((item, key) => <li onClick={this.createDeleteItem(key)}>{item}</li>)}
        </ul>
        <Row>
          <Col cols="desktop-6"><Input label={this.props.label} name={this.props.getName()}/></Col>
          <Col cols="desktop-2"><button onClick={this.handleAdd} type="button">Add</button></Col>
        </Row>
      </div>
    );
  }
});

const mapStateToProps = (state, {nameSpace, name}) => {
  const getName = () => name + 'Multi';
  return {
    inputVal: state.getIn(['FormState', nameSpace, getName(), 'value']),
    getName
  }
};

const mapDispatchToProps = (dispatch, {nameSpace, name}) => {
  const getName = () => name + 'Multi';
  return {
    clearInput: () => dispatch(setInput(nameSpace, [getName()], ''))
  }
};


const WrappedMultiInputBase = connect(mapStateToProps, mapDispatchToProps)(MultiInputBase);

const MultiInput = React.createClass({
  getDefaultProps(){
    return {
      defaultValue: List()
    }
  },
  render() {
    return <WrappedMultiInputBase {...this.props}/>;
  }
});

export default performanceWrapper(MultiInput);
