import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DashboardScreenPage from './components/dashboard/DashboardScreenPage';
import LoginScreenPage from './components/login/LoginScreenPage';
import SummaryScreenPage from './components/summary/SummaryScreenPage';

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/summary">
            <SummaryScreenPage />
          </Route>
          <Route path="/dashboard">
            <DashboardScreenPage />
          </Route>
          <Route path="/" exact={true}>
            <LoginScreenPage />
          </Route>
          <Route path="**">
            <LoginScreenPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
