import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Buffer } from './Buffer';
import { BufferCount } from './BufferCount';
import { BufferTime } from './BufferTime';
import { BufferToggle } from './BufferToggle';
import { BufferWhen } from './BufferWhen';
import { ConcatMap } from './ConcatMap';
import { ConcatMapTo } from './ConcatMapTo';
import { ExhaustMap } from './ExhaustMap';
import { Expand } from './Expand';
import { FlatMap } from './FlatMap';
import { GroupBy } from './GroupBy';
import { Map } from './Map';
import { MapTo } from './MapTo';
import { MergeMap } from './MergeMap';
import { Partition } from './Partition';
import { Pluck } from './Pluck';
import { Reduce } from './Reduce';
import { Scan } from './Scan';
import { SwitchMap } from './SwitchMap';
import { Window } from './Window';
import { WindowCount } from './WindowCount';
import { WindowTime } from './WindowTime';
import { WindowToggle } from './WindowToggle';
import { WindowWhen } from './WindowWhen';

export const Transformation = () => (
  <div className={'page'}>
    <h5>transformation</h5>
    <div className={'menu'}>
      <Link to="/examples/transformation/buffer">buffer</Link>
      <Link to="/examples/transformation/bufferCount">bufferCount</Link>
      <Link to="/examples/transformation/bufferTime">bufferTime</Link>
      <Link to="/examples/transformation/bufferToggle">bufferToggle</Link>
      <Link to="/examples/transformation/bufferWhen">bufferWhen</Link>
      <Link to="/examples/transformation/concatMap">concatMap</Link>
      <Link to="/examples/transformation/concatMapTo">concatMapTo</Link>
      <Link to="/examples/transformation/exhaustMap">exhaustMap</Link>
      <Link to="/examples/transformation/expand">expand</Link>
      <Link to="/examples/transformation/flatMap">flatMap</Link>
      <Link to="/examples/transformation/groupBy">groupBy</Link>
      <Link to="/examples/transformation/map">map</Link>
      <Link to="/examples/transformation/mapTo">mapTo</Link>
      <Link to="/examples/transformation/mergeMap">mergeMap</Link>
      <Link to="/examples/transformation/partition">partition</Link>
      <Link to="/examples/transformation/pluck">pluck</Link>
      <Link to="/examples/transformation/reduce">reduce</Link>
      <Link to="/examples/transformation/scan">scan</Link>
      <Link to="/examples/transformation/switchMap">switchMap</Link>
      <Link to="/examples/transformation/window">window</Link>
      <Link to="/examples/transformation/windowCount">windowCount</Link>
      <Link to="/examples/transformation/windowTime">windowTime</Link>
      <Link to="/examples/transformation/windowToggle">windowToggle</Link>
      <Link to="/examples/transformation/windowWhen">windowWhen</Link>
    </div>

    <Switch>
      <Route path="/examples/transformation/buffer" component={Buffer} />
      <Route path="/examples/transformation/bufferCount" component={BufferCount} />
      <Route path="/examples/transformation/bufferTime" component={BufferTime} />
      <Route path="/examples/transformation/bufferToggle" component={BufferToggle} />
      <Route path="/examples/transformation/bufferWhen" component={BufferWhen} />
      <Route path="/examples/transformation/concatMap" component={ConcatMap} />
      <Route path="/examples/transformation/concatMapTo" component={ConcatMapTo} />
      <Route path="/examples/transformation/exhaustMap" component={ExhaustMap} />
      <Route path="/examples/transformation/expand" component={Expand} />
      <Route path="/examples/transformation/flatMap" component={FlatMap} />
      <Route path="/examples/transformation/groupBy" component={GroupBy} />
      <Route path="/examples/transformation/map" component={Map} />
      <Route path="/examples/transformation/mapTo" component={MapTo} />
      <Route path="/examples/transformation/mergeMap" component={MergeMap} />
      <Route path="/examples/transformation/partition" component={Partition} />
      <Route path="/examples/transformation/pluck" component={Pluck} />
      <Route path="/examples/transformation/reduce" component={Reduce} />
      <Route path="/examples/transformation/scan" component={Scan} />
      <Route path="/examples/transformation/switchMap" component={SwitchMap} />
      <Route path="/examples/transformation/window" component={Window} />
      <Route path="/examples/transformation/windowCount" component={WindowCount} />
      <Route path="/examples/transformation/windowTime" component={WindowTime} />
      <Route path="/examples/transformation/windowToggle" component={WindowToggle} />
      <Route path="/examples/transformation/windowWhen" component={WindowWhen} />
    </Switch>
  </div>
);