import { combineReducers } from 'redux';

import PartnerA from '../partner/partnerA';

export default combineReducers({
  [PartnerA.constant.NAME]: PartnerA.reducer
});
