import React, {PropTypes} from "react";
import {canUseDOM} from "../../Helpers/canUseDOM";
import {Map} from "immutable";

interface FileItem {
  /** The file to display */
  file: Map<string, any>,
  /** Function to fire when the delete button is clicked */
  deleteFile: Function,
  /** Index of the file to delete */
  index: number
}

/** Internal component used to display and delete a file item in a list */
const FileItem = ({file, deleteFile, index}:FileItem) => {
  function onClick(e) {
    e.preventDefault();
    deleteFile(index);
  }
  return (
    <li className="file-item">
      {file.get('name', '')}
      <button type="button" onClick={onClick}>x</button>
    </li>
  )
};

const filePropType = canUseDOM ? PropTypes.instanceOf(File) : PropTypes.object;

export default FileItem
