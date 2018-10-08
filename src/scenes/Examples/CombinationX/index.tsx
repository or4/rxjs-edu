import React from 'react';
import { Route, Switch } from 'react-router';

import { Main } from './Main';
import './index.styl';

export const Combination = () => (
  <Switch>
    <Route exact={true} path="/" component={Main} />
    <Route exact={true} path="/settings" component={Settings} />
    <Route path="/examples" component={Examples} />
  </Switch>
);