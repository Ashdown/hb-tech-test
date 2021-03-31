import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import TestPage from './pages/TestPage';

function AppRouter(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <TestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
