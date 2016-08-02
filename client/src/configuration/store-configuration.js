import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer-configuration';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : (fn) => {
    return fn;
  }
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
