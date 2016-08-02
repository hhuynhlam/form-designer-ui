import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { component as NoMatch } from '../no-match';

import { component as PartnerA } from '../partner/partnerA';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route
          component={PartnerA}
          path="/partnerA"
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
