import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { component as Form } from '../form';
import { component as NoMatch } from '../no-match';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route
          component={Form}
          path="/form"
        />
        <Route
          component={NoMatch}
          path="*"
        />
      </Router>
    );
  }
}

export default Routes;
