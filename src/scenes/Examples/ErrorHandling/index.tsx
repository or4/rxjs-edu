import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Catch } from './Catch';
import { Retry } from './Retry';
import { RetryWhen } from './RetryWhen';

export const ErrorHandling = () => (
  <div className={'page'}>
    <h5>error handling</h5>
    <div className={'menu'}>
      <Link to="/examples/error/catch">catch</Link>
      <Link to="/examples/error/retry">retry</Link>
      <Link to="/examples/error/retryWhen">retryWhen</Link>
    </div>

    <Switch>
      <Route path="/examples/error/catch" component={Catch} />
      <Route path="/examples/error/retry" component={Retry} />
      <Route path="/examples/error/retryWhen" component={RetryWhen} />
    </Switch>
  </div>
);