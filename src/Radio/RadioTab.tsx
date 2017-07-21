import React from "react";
import classnames from "classnames";
import {RadioTabProps} from "../Form/Types/types";
import Radio from "../Radio/Radio";
import {RadioTabsPassedDownProps} from "./RadioTabs"
import {compose} from "recompose"
import { isFunction } from 'lodash';


class RadioTab extends React.Component<RadioTabsPassedDownProps & RadioTabProps, {}> {
  componentWillMount(){
    if(this.props.defaultSelected){
      this.setId(this.props.id);
    }
  }
  componentWillReceiveProps(nextProps: RadioTabsPassedDownProps & RadioTabProps){
    if(this.props.defaultSelected !== nextProps.defaultSelected){
      this.setId(nextProps.id);
    }
  }

  setId = (id:string) => {
    const {setId} = this.props;
    if(!setId) throw new Error(`setId is not pass down from RadioTabs. please check RadioTab - ${id} is direct child of RadioTabs or create the wrapper to pass the props from RadioTabs`);
    if(setId && isFunction(setId)) setId(id);
  }

  onClick = () => {
    const {id} = this.props;
    this.setId(id);
  }

  render() {
    const {className, children, chosenId, ...props} = this.props;
    var classes = classnames(className, 'radio-tab', {active: chosenId === props.id});
    
    return (
      <div className={classes} onClick={this.onClick}>
        <Radio {...props}/>
        {children}
      </div>
    );
  }
}


// This is a hack to ensure that proper types are passed down. Need a better way to type React.cloneElement
export default compose<RadioTabsPassedDownProps & RadioTabProps, RadioTabProps>((radioTab) => radioTab)(RadioTab);