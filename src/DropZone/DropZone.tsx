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
<<<<<<< HEAD:src/DropZone/DropZone.tsx
import {DropZoneProps} from '../Form/Types/types';
import {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';
=======
import {DropZoneProps, DropZoneFile, PerformanceWrapperProps} from '../../typings/types.d';
>>>>>>> unified-types:src/DropZone/DropZone.jsx

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
<<<<<<< HEAD:src/DropZone/DropZone.tsx

  onDrop = (acceptedFiles: FileList, rejectedFiles: FileList) => {
    const {multiple = false, inputChanged} = this.props;
    
    if(multiple) {
      inputChanged(Set(this.getFiles().concat(Set(acceptedFiles))));
    } else {
      inputChanged(Set([acceptedFiles[0]]));
    }
  }

  deleteFile = (index: number) => {
=======
  
  onDrop = (files) => {
    const {multiple = false, inputChanged, onDrop} = this.props;
    if(multiple) {
      const allFiles = this.getFiles().concat(files);
      inputChanged(allFiles);

      if(isFunction(onDrop)) {
        onDrop(allFiles);
      }
    } else {
      inputChanged(Set(files));
      
      if(isFunction(onDrop)) {
        onDrop(files);
      }
    }
  }

  deleteFile = (index) => {
>>>>>>> unified-types:src/DropZone/DropZone.jsx
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
<<<<<<< HEAD:src/DropZone/DropZone.tsx
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
=======
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
>>>>>>> unified-types:src/DropZone/DropZone.jsx

        {isFunction(fileListComponent) && (
          fileListComponent(files, this.deleteFile)
        )}
      </div>
    );
  }
}

<<<<<<< HEAD:src/DropZone/DropZone.tsx
export default performanceWrapper<DropZoneProps>(DropZone);
export {DropZone};
=======
export default performanceWrapper(DropZoneFrecl);
export {DropZoneFrecl};
>>>>>>> unified-types:src/DropZone/DropZone.jsx
