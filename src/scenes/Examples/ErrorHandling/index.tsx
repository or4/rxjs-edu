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
      <Link to="/examples/errorHandling/catch">catch</Link>
      <Link to="/examples/errorHandling/retry">retry</Link>
      <Link to="/examples/errorHandling/retryWhen">retryWhen</Link>
    </div>

    <Switch>
      <Route path="/examples/errorHandling/catch" component={Catch} />
      <Route path="/examples/errorHandling/retry" component={Retry} />
      <Route path="/examples/errorHandling/retryWhen" component={RetryWhen} />
    </Switch>
  </div>
);