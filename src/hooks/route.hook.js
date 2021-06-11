import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from '../pages/Auth';
import { Admin } from '../pages/Admin';
import { Driver } from '../pages/Driver';


const RoleTypeManager = 1;


export const useRoutes = (isAuthenticated, role) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/'>
          {
            role === RoleTypeManager ?
              <Admin />
              :
              <Driver />
          }
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/'>
        <Auth />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};