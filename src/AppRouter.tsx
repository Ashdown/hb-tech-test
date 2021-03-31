import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SurveyListPage from './pages/SurveyListPage';

function AppRouter(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SurveyListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
