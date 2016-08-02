import _ from 'lodash';
import { connect } from 'react-redux';
import action from '../action/form-action';
import constant from '../constant/form-constant';
import { addPublishers, addSubscribers, fieldLibrary } from '../field';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  componentWillReceiveProps(nextProps) {
    const fields = nextProps.fields;
    const onUpdate = this.props.update;

    _.forEach(fields, (field) => {
      addPublishers(field, nextProps, onUpdate);
      addSubscribers(field, nextProps);
    });

    this.props = nextProps;
  }

  render() {
    return (
      <form id={this.props.formId}>
        {this.props.fields.map((field, index) => {
          _.assign(field, { key: index });

          return React.createElement(fieldLibrary[field.fieldType], field);
        })}
      </form>
    );
  }
}

Form.defaultProps = {
  fields: [],
  formId: ''
};

Form.propTypes = {
  fields: React.PropTypes.array,
  formId: React.PropTypes.string,
  onLoad: React.PropTypes.func,
  update: React.PropTypes.func
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
)(Form);
