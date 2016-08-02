import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button {...this.props}>
        {this.props.innerContent}
      </button>
    );
  }
}

Button.defaultProps = {
  innerContent: ''
};

Button.propTypes = {
  innerContent: React.PropTypes.string
};

export default Button;
