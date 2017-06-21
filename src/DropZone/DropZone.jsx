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

  constructor() {
    this.state = {
      showPlaceholder: true
    };
  }

  componentDidMount(){
    this.props.inputChanged(this.getFiles(), false);
  }

  getFiles = () => {
    const {value} = this.props;
    return isFileArray(value) ? value : isSingleFile(value) ? value : null;
  }
  
  onDrop = (files) => {
    const {multiple = false, inputChanged} = this.props;
    const droppedFiles = List(files);
    
    if(multiple) {
      const stateFiles = this.getFiles();
      
      if(stateFiles) {
        const cleanList = droppedFiles.filter(file => {
          return stateFiles.every(stateFile => stateFile.name !== file.name);
        });
        inputChanged(cleanList.concat(stateFiles));
      }
      inputChanged(droppedFiles);
    } else {
      inputChanged(List(files));
      this.setState({
        showPlaceholder: false
      })
    }
  }
  
  showFiles = () => {
    const {multiple = false, showList = true} = this.props;
    const files = this.getFiles();

    if(files) {
      if(showList) {
        if(multiple) {
          // list of filenames with icons for data type
          return files.map((file, index) => {
            return <FileItem index={index} key={index} file={file} deleteFile={this.deleteFile} />;
          }).toArray()
        }
        return <FileItem file={files.first()} index={0} deleteFile={this.deleteFile} showPreview />;
      }
    }
    return <noscript />;
  }

  deleteFile = (index) => {
    const {multiple = false, inputChanged} = this.props;
    const stateFiles = this.getFiles();
    
    inputChanged(stateFiles.delete(index));
    if(!multiple) {
      this.setState({
        showPlaceholder: true
      });
    }
  }
  
  render() {
    const {children, className, placeholder = "Drop here", multiple = false, showList = true} = this.props;
    const {showPlaceholder} = this.state;
    const attributes = getHTMLAttributes(this.props);

    const files = this.getFiles();
    const classes = classnames("drop-zone-box", className);

    return (
      <div className="drop-zone">
        {showPlaceholder && (
          <DropZone className={classes} onDrop={this.onDrop} multiple={multiple} {...attributes}>
            <p className="placeholder">{placeholder}</p>
            {children && PassDownProps({files}, children)}
          </DropZone>
        )}

        {this.showFiles()}
      </div>

    )
  }
}

export default performanceWrapper(DropZoneFrecl);
export {DropZoneFrecl};