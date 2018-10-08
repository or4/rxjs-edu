import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { CombineAll } from './CombineAll';
import { CombineLatest } from './CombineLatest';
import { Concat } from './Concat';
import { ConcatAll } from './ConcatAll';
import { ForkJoin } from './ForkJoin';
import { Merge } from './Merge';
import { MergeAll } from './MergeAll';
import { Pairwise } from './Pairwise';
import { Race } from './Race';
import { StartWith } from './StartWith';
import { WithLatestFrom } from './WithLatestFrom';
import { Zip } from './Zip';

export const Combination = () => (
  <div className={'page'}>
    <h5>combination</h5>
    <div className={'menu'}>
      <Link to="/examples/combination/combineAll">combineAll</Link>
      <Link to="/examples/combination/combineLatest">combineLatest</Link>
      <Link to="/examples/combination/concat">concat</Link>
      <Link to="/examples/combination/concatAll">concatAll</Link>
      <Link to="/examples/combination/forkJoin">forkJoin</Link>
      <Link to="/examples/combination/merge">merge</Link>
      <Link to="/examples/combination/mergeAll">mergeAll</Link>
      <Link to="/examples/combination/pairwise">pairwise</Link>
      <Link to="/examples/combination/race">race</Link>
      <Link to="/examples/combination/startWith">startWith</Link>
      <Link to="/examples/combination/withLatestFrom">withLatestFrom</Link>
      <Link to="/examples/combination/zip">zip</Link>
    </div>

    <Switch>
      <Route path="/examples/combination/combineAll" component={CombineAll} />
      <Route path="/examples/combination/combineLatest" component={CombineLatest} />
      <Route path="/examples/combination/concat" component={Concat} />
      <Route path="/examples/combination/concatAll" component={ConcatAll} />
      <Route path="/examples/combination/forkJoin" component={ForkJoin} />
      <Route path="/examples/combination/merge" component={Merge} />
      <Route path="/examples/combination/mergeAll" component={MergeAll} />
      <Route path="/examples/combination/pairwise" component={Pairwise} />
      <Route path="/examples/combination/race" component={Race} />
      <Route path="/examples/combination/startWith" component={StartWith} />
      <Route path="/examples/combination/withLatestFrom" component={WithLatestFrom} />
      <Route path="/examples/combination/zip" component={Zip} />
    </Switch>
  </div>
);