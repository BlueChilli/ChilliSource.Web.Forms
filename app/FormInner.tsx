import React from 'react';
import moment from 'moment';
import { List } from 'immutable';
import SyntaxHighlighter from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import { docco } from 'react-syntax-highlighter/dist/styles';
import CheckBox from '../src/CheckBox/CheckBox';
import Form from '../src/Form/Form';
import Fieldset from '../src/Form/Fieldset';
import Input from '../src/Input/Input';
import Radio from '../src/Radio/Radio';
import RadioTab from '../src/Radio/RadioTab';
import RadioTabs from '../src/Radio/RadioTabs';
import Select from '../src/Select/Select';
import MultiSelect from '../src/Select/MultiSelect';
import DropZone from '../src/DropZone/DropZone';
import DateRange from '../src/DatePicker/DateRange';
import DatePicker from '../src/DatePicker/DatePicker';
import TextArea from '../src/TextArea/TextArea';
import Validation from '../src/Validation/Validation';
import Validate from '../src/Validation/Validate';
import GitSnippet from './GitSnippet/GitSnippet';

import './FormInner.scss';
import './Styles/main.scss';

export default class FormInner extends React.Component<{}, {}> {
  render() {
    const options = List([
      { value: 'Pash', label: 'Pash' },
      { value: 'Wolf', label: 'Wolf' },
      { value: 'Hunter', label: 'Hunter' },
      { value: 'Mouse', label: 'Mouse' },
      { value: 'Millenial', label: 'Millenial' },
    ]);

    return (
      <div style={{ padding: '20px 40px' }}>
        {/* INPUTS */}
        <div className="row">
          <div className="tablet-col-6">
            <Input label="First Name" required placeholder="John" name="firstName" explanation="Enter it exactly as it appears on your passport" radius={4} />
          </div>

          <div className="tablet-col-6">
            <Input label="Last Name" required placeholder="Doe" name="lastName" explanation="Enter it exactly as it appears on your passport" radius={4} />
          </div>

          <div className="tablet-col-12 margin-top-2">
            <Input name="search" label="Search" format="search" placeholder="Enter the text you would like to search for" radius={100} />
          </div>

          <div className="tablet-col-3 margin-top-2">
            <Input name="dollars" label="Dollars" format="dollar" type="number" />
          </div>

          <div className="tablet-col-3 margin-top-2">
            <Input name="yen" label="Yen" format="yen" type="number" />
          </div>

          <div className="tablet-col-3 margin-top-2">
            <Input name="euro" label="Euro" format="euro" type="number" />
          </div>

          <div className="tablet-col-3 margin-top-2">
            <Input name="discount" label="Discount" format="percentage" type="number" />
          </div>
        </div>

        {/* DATE & RANGE PICKERS */}
        <div className="row margin-top-2">
          <div className="tablet-col-6">
            <DatePicker label="Date Picker" name="DatePickerNoDefault" />
          </div>

          <div className="tablet-col-6">
            <DateRange label="Date Range" name="DateRange" />
          </div>
        </div>

        {/* SELECTS */}
        <div className="row margin-top-2">
          <div className="tablet-col-6">
            <Select label="Front End Developers" defaultSelected="Mick" name="FrontEndDevelopers">
              <option value="Shane">Shane</option>
              <option value="Mick">Mick</option>
              <option value="Mitch">Mitch</option>
            </Select>
          </div>

          <div className="tablet-col-6">
            <Select label="Numbers" name="Numbers">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
          </div>

          <div className="tablet-col-12">
            <MultiSelect name="FDs" options={options} defaultValue={List(['Pash', 'Hunter'])} label="Frontend Devs" />
          </div>
        </div>

        <div className="row margin-top-2">
          {/* CHECKBOXES */}
          <div className="tablet-col-4">
            <div className="switch-container">
              <CheckBox defaultChecked id="red" label="Red" name="color[]" />
              <CheckBox defaultChecked={false} id="blue" label="Blue" name="color[]" />
              <CheckBox defaultChecked id="green" label="Green" name="color[]"/>
              <Validate name="color[]" required>
                <Validation isFor="required">Please choose a color</Validation>
              </Validate>
            </div>
          </div>

          {/* RADIOS */}
          <div className="tablet-col-4">
            <div className="switch-container">
              <Radio name="size" label="Extra Small" id="x-small" />
              <Radio name="size" label="Small" id="small" />
              <Radio defaultChecked name="size" label="Medium" id="medium" />
              <Radio name="size" label="Large" id="large" />
              <Validate name="size" required>
                <Validation isFor="required">Please choose a size</Validation>
              </Validate>
            </div>
          </div>

          {/* RADIOTABS */}
          <div className="tablet-col-4">
            <RadioTabs name="radio-tabs">
              <RadioTab id="tab-1" label="Tab 1" />
              <RadioTab defaultSelected id="tab-2" label="Tab 2" />
            </RadioTabs>
          </div>
        </div>

        {/* DROPZONE */}
        <div className="row margin-top-2">
          <div className="tablet-col-6">
            <DropZone name="dropzone-single" placeholder="Drop a single file here">
              {(file) => <p>{file}</p>}
            </DropZone>
          </div>

          <div className="tablet-col-6">
            <DropZone name="dropzone-multiple" multiple fileListComponent={files => files.map(file => <p>{file.name}</p>)}/>
          </div>
        </div>

        <button className="button button-primary margin-top-2">Submit</button>
        
      </div>
    );
  }
}