import React, { SyntheticEvent } from "react";
import { Map } from "immutable";

/** Icons */
import imageIcon from './Assets/img.svg';
import pdfIcon from './Assets/pdf.svg';
import docIcon from './Assets/doc.svg';
import excelIcon from './Assets/excel.svg';
import pptIcon from './Assets/ppt.svg';
import textIcon from './Assets/txt.svg';
import zipIcon from './Assets/zip.svg';
import mp3Icon from './Assets/mp3.svg';
import fileIcon from './Assets/file.svg';

interface FileItemFile extends File {
  preview: string
}

interface FileItem {
  /** The file to display */
  file: FileItemFile,
  /** Function to fire when the delete button is clicked */
  deleteFile: Function,
  /** Index of the file to delete */
  index: number,
  /** Show preview or not */
  showPreview?: boolean
}

interface FileItemStateProps {
  /** The generated URL to preview the dropped file */
  fileURL: string
}

const FileTypeIcons = (type: any) => { // should ideally  be string
  switch (type) {
    case type.indexOf('image') >= 0: {
      return imageIcon;
    }

    case type.indexOf('audio') >= 0: {
      return imageIcon;
    }

    case type.indexOf('pdf') >= 0: {
      return pdfIcon;
    }

    case type.indexOf('zip') >= 0: {
      return zipIcon;
    }

    case type.indexOf('wordprocessingml') >= 0: {
      return docIcon;
    }

    case type.indexOf('spreadsheetml') >= 0: {
      return excelIcon;
    }

    case type.indexOf('presentationml') >= 0: {
      return pptIcon;
    }

    case type.indexOf('text/') >= 0: {
      return textIcon;
    }

    default: {
      return null;
    }
  }
};

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


      xhr.open('GET', file.preview, true);
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
    const { showPreview = false, file } = this.props;
    console.log(file);

    if (showPreview) {
      // only one file
      return (
        <div className="file text-center">
          <img className="preview" src={fileURL} />
          <div className="remove-button" onClick={this.removeFile}>
            <p>×</p>
          </div>
        </div>
      );
    }
    return (
      <div className="file">
        <div className="icon">

        </div>


      </div>
    );
  }
}

export default FileItem;