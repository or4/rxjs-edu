import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Audit } from './Audit';
import { AuditTime } from './AuditTime';
import { Debounce } from './Debounce';
import { DebounceTime } from './DebounceTime';
import { DistinctUntilChanged } from './DistinctUntilChanged';
import { Filter } from './Filter';
import { First } from './First';
import { IgnoreElements } from './IgnoreElements';
import { Last } from './Last';
import { Sample } from './Sample';
import { Single } from './Single';
import { Skip } from './Skip';
import { SkipUntil } from './SkipUntil';
import { SkipWhile } from './SkipWhile';
import { Take } from './Take';
import { TakeUntil } from './TakeUntil';
import { TakeWhile } from './TakeWhile';
import { Throttle } from './Throttle';
import { ThrottleTime } from './ThrottleTime';

export const Filtering = () => (
  <div className={'page'}>
    <h5>filtering</h5>
    <div className={'menu'}>
      <Link to="/examples/filtering/audit">audit</Link>
      <Link to="/examples/filtering/auditTime">auditTime</Link>
      <Link to="/examples/filtering/debounce">debounce</Link>
      <Link to="/examples/filtering/debounceTime">debounceTime</Link>
      <Link to="/examples/filtering/distinctUntilChanged">distinctUntilChanged</Link>
      <Link to="/examples/filtering/filter">filter</Link>
      <Link to="/examples/filtering/first">first</Link>
      <Link to="/examples/filtering/ignoreElements">ignoreElements</Link>
      <Link to="/examples/filtering/last">last</Link>
      <Link to="/examples/filtering/sample">sample</Link>
      <Link to="/examples/filtering/single">single</Link>
      <Link to="/examples/filtering/skip">skip</Link>
      <Link to="/examples/filtering/skipUntil">skipUntil</Link>
      <Link to="/examples/filtering/skipWhile">skipWhile</Link>
      <Link to="/examples/filtering/take">take</Link>
      <Link to="/examples/filtering/takeUntil">takeUntil</Link>
      <Link to="/examples/filtering/takeWhile">takeWhile</Link>
      <Link to="/examples/filtering/throttle">throttle</Link>
      <Link to="/examples/filtering/throttleTime">throttleTime</Link>
    </div>

    <Switch>
      <Route path="/examples/filtering/audit" component={Audit} />
      <Route path="/examples/filtering/auditTime" component={AuditTime} />
      <Route path="/examples/filtering/debounce" component={Debounce} />
      <Route path="/examples/filtering/debounceTime" component={DebounceTime} />
      <Route path="/examples/filtering/distinctUntilChanged" component={DistinctUntilChanged} />
      <Route path="/examples/filtering/filter" component={Filter} />
      <Route path="/examples/filtering/first" component={First} />
      <Route path="/examples/filtering/ignoreElements" component={IgnoreElements} />
      <Route path="/examples/filtering/last" component={Last} />
      <Route path="/examples/filtering/sample" component={Sample} />
      <Route path="/examples/filtering/single" component={Single} />
      <Route path="/examples/filtering/skip" component={Skip} />
      <Route path="/examples/filtering/skipUntil" component={SkipUntil} />
      <Route path="/examples/filtering/skipWhile" component={SkipWhile} />
      <Route path="/examples/filtering/take" component={Take} />
      <Route path="/examples/filtering/takeUntil" component={TakeUntil} />
      <Route path="/examples/filtering/takeWhile" component={TakeWhile} />
      <Route path="/examples/filtering/throttle" component={Throttle} />
      <Route path="/examples/filtering/throttleTime" component={ThrottleTime} />
    </Switch>
  </div>
);