import React from "react";
import classnames from "classnames";
import {RadioTabProps} from "../Form/Types/types";
import Radio from "../Radio/Radio";
import {RadioTabsPassedDownProps} from "./RadioTabs"
import {compose} from "recompose"


class RadioTab extends React.Component<RadioTabsPassedDownProps & RadioTabProps, {}> {
  componentWillMount(){
    if(this.props.defaultSelected){
      this.props.setId(this.props.id);
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.defaultSelected !== nextProps.defaultSelected){
      this.props.setId(nextProps.id);
    }
  }
  render() {
    const {className, children, setId, chosenId, ...props} = this.props;
    var classes = classnames(className, 'radio-tab', {active: chosenId === props.id});
    
    return (
      <div className={classes} onClick={() => setId(props.id)}>
        <Radio {...props}/>
        {children}
      </div>
    );
  }
}


// This is a hack to ensure that proper types are passed down. Need a better way to type React.cloneElement
export default compose<RadioTabsPassedDownProps & RadioTabProps, RadioTabProps>((radioTab) => radioTab)(RadioTab);