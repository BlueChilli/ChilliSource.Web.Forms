/** Libraries */
import React from 'react';

/** Components */
import {Form} from './';
import FormInner from './FormInner';

/** Class App */
class App extends React.Component<undefined, undefined> {
  showFormData = (...data) => {
    console.log(data);
    alert('Open DevTools > Console to see the submitted form data');
  }

  render() {
    return (
      <Form name="test" onSubmit={this.showFormData}>
        <FormInner />
      </Form>
    );
  }
}

export default App;