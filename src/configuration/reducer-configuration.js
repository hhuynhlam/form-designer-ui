import { combineReducers } from 'redux';

import form from '../form';

export default combineReducers({
  [form.constant.NAME]: form.reducer
});
