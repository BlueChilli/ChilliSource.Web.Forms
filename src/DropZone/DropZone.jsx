/**
 * Libraries
 */
import React, {Children} from 'react';
import {List, Map} from 'immutable';
import DropZone from 'react-dropzone';
import classnames from 'classnames';
import {compose} from 'recompose';

/**
 * Components
 */
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import FileItem from './FileItem';
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';
import {DropZoneProps, DropZoneFile} from '../Form/Types/types';
import {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';

/**
 * Styles
 */
import './DropZone.scss';

/**
 * Helpers
 */
const isFileArray = (files) => {
  return List.isList(files) && files.size > 1;
};

const isSingleFile = (files) => {
  return List.isList(files) && files.size === 1;
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

/**
 * Class DropZone
 */
class DropZoneFrecl extends React.Component{
  static defaultProps = {
    children: <noscript />
  }
  componentDidMount(){
    this.props.inputChanged(this.getFiles(), false);
  }
  getFiles = () => {
    const {value} = this.props;
    return isFileArray(value) ? value : isSingleFile(value) ? value : null;
  }
  
  onDrop = (files) => {
    const {multiple, inputChanged} = this.props;
    const droppedFiles = List(files);
    
    if(!multiple) {
      const stateFiles = this.getFiles();
      
      if(stateFiles) {
        const cleanList = droppedFiles.filter(file => {
          return stateFiles.every(stateFile => stateFile.name !== file.name);
        });
        inputChanged(cleanList.concat(stateFiles));
      }
      inputChanged(droppedFiles);
    } else {
      inputChanged(List(files[0]));
    }
  }
  
  deleteFile = (index) => {
    const stateFiles = this.getFiles();
    this.props.inputChanged(stateFiles.delete(index));
  }
  render() {
    const {children, className, placeholder, showList = true} = this.props;
    const attributes = getHTMLAttributes(this.props);
    const files = this.getFiles();
    const classes = classnames("drop-zone-box", className);
    return (
      <div className="drop-zone">
          <DropZone className={classes} onDrop={this.onDrop} {...attributes}>
            {placeholder && <p className="placeholder">{placeholder}</p>}
            {PassDownProps({files}, children)}
          </DropZone>
        {showList && <ul className="drop-zone-files-list">
          {isFileArray(files) && files.map((file, index) => (
            <FileItem index={index} key={index} file={file} deleteFile={this.deleteFile}/>
          ))}
          {isSingleFile(files) && <FileItem file={files.first()} index={0} deleteFile={this.deleteFile}/>}
        </ul>}
      </div>

    )
  }
}

export default performanceWrapper(DropZoneFrecl);
export {DropZoneFrecl};