import React from 'react';
import { Route, Switch } from 'react-router';

import { GeneralLayout } from '../components/GeneralLayout';
import { Main } from './Main';
import { Settings } from './Settings';
import { Examples } from './Examples';
import './index.styl';

export const Routes = () => (
  <GeneralLayout>
    <Switch>
      <Route exact={true} path="/" component={Main} />
      <Route exact={true} path="/settings" component={Settings} />
      <Route path="/examples" component={Examples} />
    </Switch>
  </GeneralLayout>
);