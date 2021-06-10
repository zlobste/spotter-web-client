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
        {
          role === RoleTypeManager ?
            <Route path='/admin'>
              <Admin />
            </Route>
            :
            <Route path='/'>
              <Driver />
            </Route>
        }
        <Route path='/auth'>
          <Auth />
        </Route>
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