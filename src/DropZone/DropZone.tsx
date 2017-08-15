/** Libraries */
import React from 'react';
import {Set} from 'immutable';
import ReactDropzone from 'react-dropzone';
import classnames from 'classnames';
import {compose} from 'recompose';
import {isFunction} from 'lodash';

/** Components */
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';
import {DropZoneProps} from '../Form/Types/types';
import {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';

/** Styles */
import './DropZone.scss';

/** Helpers */
const isFileArray = files => Set.isSet(files) && files.size > 1;

const isSingleFile = files => Set.isSet(files) && files.size === 1;

const passPropsToChildren = (props, children) => {
  if(children.type === 'span' || children.type === 'div') {
    return React.cloneElement(children);
  }
  return React.cloneElement(children, {...props});
}

/** Class DropZone */
class DropZone extends React.Component<DropZoneProps & PerformanceWrapperProps, undefined> {
  componentDidMount() {
    this.props.inputChanged(this.getFiles(), false);
  }

  getFiles = () => {
    const {value} = this.props;
    return value ?  value : Set();
  }

  onDrop = (acceptedFiles: FileList, rejectedFiles: FileList) => {
    const {multiple = false, inputChanged} = this.props;
    
    if(multiple) {
      inputChanged(Set(this.getFiles().concat(Set(acceptedFiles))));
    } else {
      inputChanged(Set([acceptedFiles[0]]));
    }
  }

  deleteFile = (index: number) => {
    const {multiple = false, inputChanged} = this.props;
    const filesInState = this.getFiles();

    inputChanged(filesInState.delete(index));
  }

  render() {
    const {children, className, showList = true, fileListComponent} = this.props;
    
    const {multiple = false, attributes} = getHTMLAttributes(this.props);
    const files = this.getFiles();
    const classes = classnames('drop-zone-box', className);
    
    return (
      <div>
        {/* Drop zone */}
        {!multiple && files.size > 0 ? <noscript /> : (
          <div className="drop-zone">
            <ReactDropzone className={classes} onDrop={this.onDrop} multiple={multiple} {...attributes}>
              {isFunction(children) ? (
                children(files, this.deleteFile)
              ) : (
                <div>
                  {children && passPropsToChildren({files}, children)}
                </div>
              )}
            </ReactDropzone>
          </div>
        )}

        {isFunction(fileListComponent) && (
          fileListComponent(files, this.deleteFile)
        )}
      </div>
    );
  }
}

export default performanceWrapper<DropZoneProps>(DropZone);
export {DropZone};