import React, { SyntheticEvent } from "react";
import { Map } from "immutable";

interface FileItem {
  /** The file to display */
  file: Map<string, any>,
  /** Function to fire when the delete button is clicked */
  deleteFile: Function,
  /** Index of the file to delete */
  index: number
}

interface FileItemStateProps {
  /**
   * The generated URL to preview the 
   * dropped file
   */
  fileURL: string
}

/** Internal component used to display and delete a file item in a list */
class FileItem extends React.Component<FileItem, FileItemStateProps> {
  constructor() {
    super();

    this.state = {
      fileURL: ''
    };
  }

  componentWillReceiveProps(nextProps: FileItem) {
    if (nextProps !== this.props) {
      this.getFileURL();
    }
  }

  getFileURL = () => {
    const { file } = this.props;

    if (file) {
      const xhr = new XMLHttpRequest();
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.setState({
          fileURL: reader.result
        });
      }, false);


      xhr.open('GET', file.get('preview'), true);
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const target = event.currentTarget as XMLHttpRequest;
        if (target.status === 200) {
          reader.readAsDataURL(target.response);
        }
      }

      xhr.send();
    }
  }

  removeFile = (event: SyntheticEvent<{}>) => {
    event.preventDefault();
    const { deleteFile, index } = this.props;
    deleteFile(index);
  }

  render() {
    const { fileURL } = this.state;
    const { file } = this.props;
    const url = file.get('preview', '').substring(5);
    return (
      <li className="file-item">
        <img src={fileURL} style={{ width: '144px' }} />
        <button type="button" onClick={this.removeFile}>x</button>
      </li>
    );
  }
}

export default FileItem;