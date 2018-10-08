import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { GameLoop } from './GameLoop';
import { HttpPolling } from './HttpPolling';
import { ProgressBar } from './ProgressBar';
import { SmartCounter } from './SmartCounter';

export const Recipes = () => (
  <div className={'page'}>
    <h5>recipes</h5>
    <div className={'menu'}>
      <Link to="/examples/recipes/gameLoop">gameLoop</Link>
      <Link to="/examples/recipes/httpPolling">httpPolling</Link>
      <Link to="/examples/recipes/progressBar">progressBar</Link>
      <Link to="/examples/recipes/smartCounter">smartCounter</Link>
    </div>

    <Switch>
      <Route path="/examples/recipes/gameLoop" component={GameLoop} />
      <Route path="/examples/recipes/httpPolling" component={HttpPolling} />
      <Route path="/examples/recipes/progressBar" component={ProgressBar} />
      <Route path="/examples/recipes/smartCounter" component={SmartCounter} />
    </Switch>
  </div>
);