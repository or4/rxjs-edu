import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Delay } from './Delay';
import { DelayWhen } from './DelayWhen';
import { Dematerialize } from './Dematerialize';
import { Do } from './Do';
import { Finalize } from './Finalize';
import { Finally } from './Finally';
import { Let } from './Let';
import { Tap } from './Tap';
import { Timeout } from './Timeout';
import { ToPromise } from './ToPromise';

export const Utility = () => (
  <div className={'page'}>
    <h5>utility</h5>
    <div className={'menu'}>
      <Link to="/examples/utility/delay">delay</Link>
      <Link to="/examples/utility/delayWhen">delayWhen</Link>
      <Link to="/examples/utility/dematerialize">dematerialize</Link>
      <Link to="/examples/utility/do">do</Link>
      <Link to="/examples/utility/finalize">finalize</Link>
      <Link to="/examples/utility/finally">finally</Link>
      <Link to="/examples/utility/let">let</Link>
      <Link to="/examples/utility/tap">tap</Link>
      <Link to="/examples/utility/timeout">timeout</Link>
      <Link to="/examples/utility/toPromise">toPromise</Link>
    </div>

    <Switch>
      <Route path="/examples/utility/delay" component={Delay} />
      <Route path="/examples/utility/delayWhen" component={DelayWhen} />
      <Route path="/examples/utility/dematerialize" component={Dematerialize} />
      <Route path="/examples/utility/do" component={Do} />
      <Route path="/examples/utility/finalize" component={Finalize} />
      <Route path="/examples/utility/finally" component={Finally} />
      <Route path="/examples/utility/let" component={Let} />
      <Route path="/examples/utility/tap" component={Tap} />
      <Route path="/examples/utility/timeout" component={Timeout} />
      <Route path="/examples/utility/toPromise" component={ToPromise} />
    </Switch>
  </div>
);