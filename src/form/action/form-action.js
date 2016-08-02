import { createAction } from 'redux-actions';
import { http } from '../../common';
import constant from '../constant/form-constant';

const afterLoad = createAction(
  constant.ACTION.UPDATE,
  (data) => {
    return { state: data || {} };
  }
);

function onLoad() {
  return (dispatch) => {
    http.get('http://localhost:9000/api/form/partner1')
      .then((data) => {
        dispatch(afterLoad(data));
      });
  };
}

const update = createAction(
  constant.ACTION.UPDATE,
  (path, state) => { return { path, state }; }
);

export default {
  onLoad,
  update
};
