import React from 'react';
import { render } from 'react-dom';
import { createHashHistory, useBasename } from 'history';
import { Router } from 'react-router';
import "./common/styles/app.less";
import NProgress from 'nProgress';

NProgress.configure({ showSpinner: false });

const history = useBasename(createHashHistory)({
   queryKey: false
})

const rootRoute = {
  path: '/',
  component: require('./components/layouts/Base'),
  indexRoute: {component: require('./components/layouts/Dashboard')},
  childRoutes: [ 
    {
      component: require('./components/layouts/Dashboard'),
      indexRoute: {component: require('./components/pages/dashboard/Overview')},
      childRoutes: [
        require('./components/pages/dashboard/Overview'),
        require('./components/pages/dashboard/Reports'),
        require('./components/pages/dashboard/Calendar'),
        require('./components/pages/dashboard/PersonalInfo')        
      ]
    },
    {
      path: '/login',
      component: require('./components/pages/Login'),
      childRoutes: [
      ]
    },
    {
      path: '/newUser',
      component: require('./components/pages/newUser'),
      childRoutes: [
      ]
    }
  ]
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('app')
)
