import React from "react";
import classnames from "classnames";
import InputWrapper from "../Form/InputWrapper";
import "./RadioTabs.scss";
import {RadioTabsProps, RadioTabProps, SwitchProps} from "../Form/Types/types";

export interface RadioTabsPassedDownProps {
  name: string, 
  chosenId: string, 
  setId: (chosenId: string) => undefined
}


interface RadioTabsInnerProps extends RadioTabsProps{
  children: React.ReactElement<RadioTabProps>
}

class RadioTabs extends React.Component<RadioTabsProps, {chosenId: string}> {
  constructor(){
    super();
    this.state = {
      chosenId: ""
    }
  }

  setId = (chosenId) => {
    this.setState({
      chosenId
    })
  }

  render() {
    const {className, radioClasses = undefined, name, label, children} = this.props;
    const {chosenId} = this.state;
    var classes:string = classnames(className, 'input', 'radio-tabs');

    // Deprication warning, v1.0.x
    if(radioClasses != undefined) {
      throw new Error("radioClasses prop has been replaced with className");
    }

    return (
      <InputWrapper className={classes} name={name} label={label}>
        {React.Children.map(children, (child:React.ReactElement<any>) => {
          if(typeof child.type === 'string' || child.type.name !== 'RadioTab') {
              throw new Error("RadioTabs can only accept RadioTab components as childen");
          } 

          return React.cloneElement(child as React.ReactElement<RadioTabsPassedDownProps>, {
            name,
            chosenId,
            setId: this.setId
          })
        })}
      </InputWrapper>
    );
  }
}

export default RadioTabs;