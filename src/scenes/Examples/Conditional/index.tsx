import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { DefaultIfEmpty } from './DefaultIfEmpty';
import { Every } from './Every';

export const Conditional = () => (
  <div className={'page'}>
    <h5>conditional</h5>
    <div className={'menu'}>
      <Link to="/examples/conditional/defaultIfEmpty">defaultIfEmpty</Link>
      <Link to="/examples/conditional/every">every</Link>
    </div>

    <Switch>
      <Route path="/examples/conditional/defaultIfEmpty" component={DefaultIfEmpty} />
      <Route path="/examples/conditional/every" component={Every} />
    </Switch>
  </div>
);