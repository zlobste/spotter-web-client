import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from '../pages/Auth';
import { Admin } from '../pages/Admin';
import { Driver } from '../pages/Driver';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/driver'>
          <Driver />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/auth'>
        <Auth />
      </Route>
      <Redirect to='/auth' />
    </Switch>
  );
};