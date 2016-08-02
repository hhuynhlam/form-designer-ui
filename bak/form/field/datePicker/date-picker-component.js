import React from 'react';
import MUIDatePicker from 'material-ui/DatePicker';

class DatePicker extends React.Component {
  render() {
    return (
      <MUIDatePicker {...this.props}>
      </MUIDatePicker>
    );
  }
}

DatePicker.defaultProps = {
};

DatePicker.propTypes = {
};

export default DatePicker;
