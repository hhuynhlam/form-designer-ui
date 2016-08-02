import { createAction } from 'redux-actions';
import constant from '../constant/partnerA-constant';

const update = createAction(
  constant.ACTION.UPDATE,
  (path, state) => { return { path, state }; }
);

export default {
  update
};
