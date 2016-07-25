import { Provider } from 'react-redux';
import configureStore from './configuration/store-configuration';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './configuration/route-configuration';

const rootEl = document.getElementById('AppView');
const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./configuration/route-configuration', () => {
    const NextApp = require('./configuration/route-configuration').default;

    ReactDOM.render(<NextApp />, rootEl);
  });
}
