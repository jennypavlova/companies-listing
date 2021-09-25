import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { CompaniesPage } from '../pages/companies-page';

import routes from './routes';

export const AppRouter: React.FC = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path={routes.companies} component={CompaniesPage} />
      <Redirect to={routes.companies} />
    </Switch>
  </BrowserRouter>
);
