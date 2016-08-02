import _ from 'lodash';
import { connect } from 'react-redux';
import action from '../action/partnerA-action';
import baseTheme from '../theme/partnerA-theme';
import constant from '../constant/partnerA-constant';
import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';

class PartnerA extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <DatePicker hintText="Portrait Dialog" />
        <DatePicker hintText="Landscape Dialog" mode="landscape" />
        <DatePicker hintText="Dialog Disabled" disabled={true} />
      </div>
    );
  }
}

PartnerA.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

PartnerA.defaultProps = {
};

PartnerA.propTypes = {
};

export default connect(
  (state) => {
    return {
      data: state[constant.NAME].toJS().data,
      fields: state[constant.NAME].toJS().fields,
      formId: state[constant.NAME].toJS().id
    };
  },
  action
)(PartnerA);
