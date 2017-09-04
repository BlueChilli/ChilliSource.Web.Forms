/** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

/** The root where the app is inserted */
const rootEl = document.getElementById('app');

/** The app to insert into the DOM */
const InsertableApp = () => {
  const App = require('./app.tsx').default;
  return <App />;
}

const renderApp = () => ReactDOM.render(InsertableApp(), rootEl);
const renderError = error => ReactDOM.render(<RedBox error={error} />, rootEl);
const renderAndHandleError = () => {
  try {
    renderApp()
  } catch (error) {
    renderError(error);
    throw error;
  }
}

if (module.hot) {
  module.hot.accept('./app.tsx', () => {
    setTimeout(renderAndHandleError)
  });
}

renderAndHandleError();