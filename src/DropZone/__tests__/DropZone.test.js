import React from 'react';
import PropTypes from 'prop-types';
import ReactDropZone from 'react-dropzone';
import {shallow, mount} from 'enzyme';
import DropZone, {DropZone as DropZoneUI} from '../DropZone';
import {basicReducer} from '../../Form/Reducers/';
import {Set, Map} from 'immutable';

const droppableFiles = [
  {
    name: 'ImageFile.png',
    size: 1234,
    type: 'image/png'
  },
  {
    name: 'PDFFile.pdf',
    size: 2345,
    type: 'application/pdf'
  },
  {
    name: 'GifFile.gif',
    size: 3456,
    type: 'image/gif'
  }
];

const fileListItem = (file, index) => <p key={index} className="file-item">{file.name}</p>
const fileListComponent = files => {
  let index = 0;
  return files.map(file => {
    ++index;
    return (index => fileListItem(file, index))(index)
  });
}

const filePreviewItem = (file, index) => <p key={index} className="preview-item">{file.name}</p>
const filePreviewComponent = files => {
  let index = 0;
  return files.map(file => {
    ++index;
    return (index => filePreviewItem(file, index))(index)
  });
}

const singleFileAllowedProps = {
  name: 'DropZoneSingle',
  className: 'dropzone-single'
};

const multipleFilesAllowedProps = {
  multiple: true,
  name: 'DropZoneMultiple',
  className: 'dropzone-multiple'
};

describe('DropZone', () => {
  it('renders the underlying dropzone', () => {
    const singleFileWrapper = shallow(<DropZoneUI {...singleFileAllowedProps} />);
    const multipleFileWrapper = shallow(<DropZoneUI {...multipleFilesAllowedProps} />);

    expect(singleFileWrapper.find(ReactDropZone)).toHaveLength(1);
    expect(multipleFileWrapper.find(ReactDropZone)).toHaveLength(1);
  });

  it('adds user defined classes to the dropzone', () => {
    const singleFileWrapper = shallow(<DropZoneUI {...singleFileAllowedProps} />);
    const multipleFileWrapper = shallow(<DropZoneUI {...multipleFilesAllowedProps} />);

    const extractedClassName = wrapper => wrapper.find(ReactDropZone).props().className;

    expect(extractedClassName(singleFileWrapper)).toBe(`drop-zone-box ${singleFileAllowedProps.className}`);
    expect(extractedClassName(multipleFileWrapper)).toBe(`drop-zone-box ${multipleFilesAllowedProps.className}`);
  });

  it('displays the file list if the user has provided list component', () => {
    const singleFileWrapper = shallow(<DropZoneUI {...singleFileAllowedProps} fileListComponent={fileListComponent} value={Set([droppableFiles[0]])} />);
    const multipleFileWrapper = shallow(<DropZoneUI {...multipleFilesAllowedProps} fileListComponent={fileListComponent} value={Set(droppableFiles)} />);
    const fileListItems = wrapper => wrapper.find('p.file-item');

    expect(fileListItems(singleFileWrapper)).toHaveLength(1);
    expect(fileListItems(multipleFileWrapper)).toHaveLength(3);
  });

  it('should show file preview(s) if user has provided preview component', () => {
    const singleFileWrapper = shallow(<DropZoneUI {...singleFileAllowedProps} fileListComponent={filePreviewComponent} value={Set([droppableFiles[0]])} />);
    const multipleFileWrapper = shallow(<DropZoneUI {...multipleFilesAllowedProps} fileListComponent={filePreviewComponent} value={Set(droppableFiles)} />);
    const filePreviewItems = wrapper => wrapper.find('p.preview-item');

    expect(filePreviewItems(singleFileWrapper)).toHaveLength(1);
    expect(filePreviewItems(multipleFileWrapper)).toHaveLength(3);
  });

  it('should mount', () => {
    const filePreviewItems = wrapper => wrapper.find('p.preview-item');
    let state = Map();
    const context = {
        nameSpace: "DropZone",
        FormState: state,
        dispatch: action => {
          const reducer = basicReducer[action.type];
          state = reducer(state, action);
        }
    };

    const mountOptions = {
        context,
        childContextTypes: {
            nameSpace: PropTypes.string,
            FormState: PropTypes.object,
            dispatch: PropTypes.func,
        }
    }

    const singleFileWrapper = mount(<DropZone {...singleFileAllowedProps} fileListComponent={filePreviewComponent} />, mountOptions);
    singleFileWrapper.find(ReactDropZone).simulate('drop', { target: {files: droppableFiles}});
    singleFileWrapper.setContext(Object.assign({}, context, {FormState: state}))
    
    const multipleFileWrapper = mount(<DropZone {...multipleFilesAllowedProps} fileListComponent={filePreviewComponent} />, mountOptions);
    multipleFileWrapper.find(ReactDropZone).simulate('drop', { target: {files: droppableFiles}});
    multipleFileWrapper.setContext(Object.assign({}, context, {FormState: state}))

    expect(filePreviewItems(singleFileWrapper)).toHaveLength(1);
    expect(filePreviewItems(multipleFileWrapper)).toHaveLength(3);
  });
});