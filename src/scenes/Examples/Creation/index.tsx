import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Create } from './Create';
import { Empty } from './Empty';
import { From } from './From';
import { FromEvent } from './FromEvent';
import { Interval } from './Interval';
import { Of } from './Of';
import { Range } from './Range';
import { Throw } from './Throw';
import { Timer } from './Timer';

export const Creation = () => (
  <div className={'page'}>
    <h5>creation</h5>
    <div className={'menu'}>
      <Link to="/examples/creation/create">create</Link>
      <Link to="/examples/creation/empty">empty</Link>
      <Link to="/examples/creation/from">from</Link>
      <Link to="/examples/creation/fromEvent">fromEvent</Link>
      <Link to="/examples/creation/interval">interval</Link>
      <Link to="/examples/creation/of">of</Link>
      <Link to="/examples/creation/range">range</Link>
      <Link to="/examples/creation/throw">throw</Link>
      <Link to="/examples/creation/timer">timer</Link>
      <Link to="/examples/creation/zip">zip</Link>
    </div>

    <Switch>
      <Route path="/examples/creation/create" component={Create} />
      <Route path="/examples/creation/empty" component={Empty} />
      <Route path="/examples/creation/from" component={From} />
      <Route path="/examples/creation/fromEvent" component={FromEvent} />
      <Route path="/examples/creation/interval" component={Interval} />
      <Route path="/examples/creation/of" component={Of} />
      <Route path="/examples/creation/range" component={Range} />
      <Route path="/examples/creation/throw" component={Throw} />
      <Route path="/examples/creation/timer" component={Timer} />
    </Switch>
  </div>
);