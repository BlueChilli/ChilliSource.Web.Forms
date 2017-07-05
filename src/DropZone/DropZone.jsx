/** Libraries */
import React, {Children} from 'react';
import {Set} from 'immutable';
import DropZone from 'react-dropzone';
import classnames from 'classnames';
import {compose} from 'recompose';
import {isFunction} from "lodash";

/** * Components */
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';
import {DropZoneProps, DropZoneFile} from '../Form/Types/types';
import {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';

/** Styles */
import './DropZone.scss';

/** Helpers */
const isFileArray = (files) => {
  return Set.isSet(files) && files.size > 1;
};

const isSingleFile = (files) => {
  return Set.isSet(files) && files.size === 1;
};

const PassDownProps = (props, children) => {
  if (children.type === 'span' || children.type === 'div') {
    return React.cloneElement(children);
  } else {
    return React.cloneElement(children, {
      ...props
    });
  }
};

/** Class DropZone */
class DropZoneFrecl extends React.Component{
  static defaultProps = {
    children: <noscript />
  }

  componentDidMount(){
    this.props.inputChanged(this.getFiles(), false);
  }

  getFiles = () => {
    const {value} = this.props;
    return isFileArray(value) ? value : isSingleFile(value) ? value.first() : Set();
  }
  
  onDrop = (files) => {
    const {multiple = false, inputChanged} = this.props;
    if(multiple) {
      inputChanged(this.getFiles().concat(files));
    } else {
      inputChanged(Set(files));
    }
  }


  deleteFile = (index) => {
    const {multiple = false, inputChanged} = this.props;
    const stateFiles = this.getFiles();
    
    inputChanged(stateFiles.delete(index));
  }
  
  render() {
    const {children, className, placeholder = "Drop here", multiple = false, showList = true, fileListComponent} = this.props;
    const attributes = getHTMLAttributes(this.props);

    const files = this.getFiles();
    const classes = classnames("drop-zone-box", className);

    return (
      <div>
        <div className="drop-zone">
          <DropZone className={classes} onDrop={this.onDrop} multiple={multiple} {...attributes}>
            {isFunction(children) ? (
              children(this.getFiles(), this.deleteFile)
            ) : (
              <div>
                {children && PassDownProps({files}, children)}
              </div>
            )}
            
          </DropZone>
        </div>

        {isFunction(fileListComponent) && (
          fileListComponent(this.getFiles(), this.deleteFile)
        )}
      </div>
    )
  }
}

export default performanceWrapper(DropZoneFrecl);
export {DropZoneFrecl};
