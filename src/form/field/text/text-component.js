import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <input type="text"
             {...this.props}>
      </input>
    );
  }
}

Text.defaultProps = {};

Text.propTypes = {};

export default Text;
