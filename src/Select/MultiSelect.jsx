import React from "react"
import Select from "react-select"
import {List, fromJS} from "immutable";
import "react-select/dist/react-select.css"
import InputWrapper from "../../../Frecl/Components/Form/InputWrapper.tsx";
import performanceWrapper from "../../../Frecl/Components/Form/Helpers/performanceWrapper.ts";
import classnames from "classnames";


const OptionSelect = React.createClass({
  getDefaultProps(){
    return {
      options: List([])
    }
  },
  componentWillMount(){
    this.props.inputChanged(this.props.defaultValue || List([]), false)
  },

  handleChange(values){
    this.props.inputChanged(List([]).concat(fromJS(values)))
    if (this.props.onChange) {
      this.props.onChange(values);
    }
  },

  render()
  {
    const {options, getAttributes, value} = this.props;
    const safeValue = value !== '' ? List(value) : List();
    const classes = classnames(this.props.className, 'input');


    return (
      <InputWrapper {...this.props} className={classes}>
        <Select value={safeValue.toJS()} options={options.toJS()} multi={true} onChange={this.handleChange}/>
        {/*<Validate required={this.props.required} name={this.props.name}/>*/}
      </InputWrapper>
    )
  }
});

export default performanceWrapper(OptionSelect);
