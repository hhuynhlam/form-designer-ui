import React from 'react';

class NoMatch extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: 'center'
        }}
      >
          <h1>{'404'}</h1>
          <p>{'The page you\'re looking for cannot be found.'}</p>
      </div>
    );
  }
}

export default NoMatch;
