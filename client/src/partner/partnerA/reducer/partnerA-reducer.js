import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import constant from '../constant/partnerA-constant';

const initialState = fromJS({
  data: {},
  fields: [],
  id: ''
});

function update(state, action) {
  if (!action.payload) {
    return state;
  }

  const path = (action.payload.path || '').split('.');
  const newState = action.payload.state;

  if (!path[0]) {
    return state.merge(newState);
  }

  return state.setIn(path, newState);
}

export default handleActions({
  [constant.ACTION.UPDATE]: update
}, initialState);
