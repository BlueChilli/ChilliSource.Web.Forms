/** Libraries */
import React, { Children } from 'react';
import { Set } from 'immutable';
import ReactDropZone from 'react-dropzone';
import classnames from 'classnames';
import { compose } from 'recompose';
import { isFunction } from 'lodash';

/** * Components */
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import { getHTMLAttributes } from '../Form/Helpers/inputHelpers';
import { DropZoneProps, PerformanceWrapperProps } from '../../typings/types.d';

/** Icons & Images */
import filesIcon from './Assets/doc.svg';

/** Styles */
import './DropZone.scss';

/** Helpers */
const isFileArray = files => {
	return Set.isSet(files) && files.size > 1;
};

const isSingleFile = files => {
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
class DropZone extends React.Component<DropZoneProps & PerformanceWrapperProps, undefined> {
	static defaultProps = {
		placeholder: 'Drag and drop files here',
		width: '100%',
		height: '256px'
	};

	componentDidMount() {
		const files = this.getFiles();

		if (files.size > 0) {
			this.props.inputChanged(this.getFiles(), false);
		}
	}

	getFiles = (): Set<any> => {
		const { value } = this.props;

		if (isFileArray(value)) {
			return Set(value);
		} else if (isSingleFile(value)) {
			return Set([value.first()]);
		}
		return Set();
	};

	onDrop = files => {
		const { multiple = false, inputChanged, onDrop } = this.props;
		if (multiple) {
			const allFiles = this.getFiles().concat(files) as Set<File>;
			inputChanged(allFiles);

			if (isFunction(onDrop)) {
				onDrop(allFiles);
			}
		} else {
			inputChanged(Set([files]));

			if (isFunction(onDrop)) {
				onDrop(files);
			}
		}
	};

	deleteFile = index => {
		const { multiple = false, inputChanged } = this.props;
		const stateFiles = this.getFiles();

		inputChanged(stateFiles.delete(index));
	};

	getInnerContent = () => {
		const { children, placeholder } = this.props;

		if (children && this.getFiles().size > 0) {
			if (isFunction(children)) {
				return children(this.getFiles(), this.deleteFile);
			}
			return <div>{PassDownProps({ files: this.getFiles() }, children)}</div>;
		}

		return (
			<div className="placeholder-container">
				<img src={filesIcon} />
				<p>{placeholder}</p>
				<button type="button" className="button button-primary">
					Upload
				</button>
			</div>
		);
	};

	render() {
		const {
			children,
			className,
			placeholder,
			multiple = false,
			showList = true,
			fileListComponent,
			width,
			height
		} = this.props;
		const attributes = getHTMLAttributes(this.props);

		const files = this.getFiles();
		const classes = classnames('drop-zone-box', className);
		const style = {
			width,
			height
		};

		return (
			<div>
				<div className="drop-zone">
					<ReactDropZone
						className={classes}
						onDrop={this.onDrop}
						multiple={multiple}
						disablePreview={true}
						{...attributes}
						style={style}>
						{this.getInnerContent()}
					</ReactDropZone>
				</div>

				{isFunction(fileListComponent) && fileListComponent(this.getFiles(), this.deleteFile)}
			</div>
		);
	}
}

export default performanceWrapper<DropZoneProps>(DropZone);
export { DropZone };
