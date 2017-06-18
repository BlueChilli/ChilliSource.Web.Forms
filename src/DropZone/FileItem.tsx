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

/** Internal component used to display and delete a file item in a list */
const FileItem = ({ file, deleteFile, index }: FileItem) => {
  console.log(file);
  function onClick(event: SyntheticEvent<{}>) {
    event.preventDefault();
    deleteFile(index);
  }
  return (
    <li className="file-item">
      {file.get('name', '')}
      <button type="button" onClick={onClick}>x</button>
    </li>
  )
};


export default FileItem
