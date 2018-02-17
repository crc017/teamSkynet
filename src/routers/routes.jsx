import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect } from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";

import DashboardOverviewPage from "../components/pages/dashboard/Overview";
import DashboardReportsPage from "../components/pages/dashboard/Reports";
import NewUserPage from "../components/pages/newUser";
import LoginPage from "../components/pages/Login";
import CalendarHome from "../components/pages/dashboard/Calendar";


var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="base" path="/" handler={BaseLayout}>
            <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
              <Route name="dashboard.overview" path="/overview" handler={DashboardOverviewPage} />
              <Route name="dashboard.calendar" path="/calendar" handler={DashboardCalendarPage} />
              <Route name="dashboard.reports" path="/reports" handler={DashboardReportsPage} />
              <Route name="dashboard.personalinfo" path="/personalinfo" handler={DashboardPersonalInfoPage} />
              <DefaultRoute name="dashboard.default" handler={DashboardOverviewPage} />
            </Route>
            
          <Route name="login" path="/login" handler={LoginPage} />
          <Route name="newUser" path="/newUser" handler={NewUserPage} />
            <DefaultRoute name="default" handler={DashboardLayout} />
            <Redirect from="/" to="dashboard.overview" />
          </Route>
      );
    }
  },
  render: function() {
  
  }
  
});

export default Routes;