import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Multicast } from './Multicast';
import { Publish } from './Publish';
import { Share } from './Share';
import { ShareReplay } from './ShareReplay';

export const Multicasting = () => (
  <div className={'page'}>
    <h5>multicasting</h5>
    <div className={'menu'}>
      <Link to="/examples/multicasting/multicast">multicast</Link>
      <Link to="/examples/multicasting/publish">publish</Link>
      <Link to="/examples/multicasting/share">share</Link>
      <Link to="/examples/multicasting/shareReplay">shareReplay</Link>
    </div>

    <Switch>
      <Route path="/examples/multicasting/multicast" component={Multicast} />
      <Route path="/examples/multicasting/publish" component={Publish} />
      <Route path="/examples/multicasting/share" component={Share} />
      <Route path="/examples/multicasting/shareReplay" component={ShareReplay} />
    </Switch>
  </div>
);