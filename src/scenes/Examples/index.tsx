import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { CombineAll } from './combination/CombineAll';
import { CombineLatest } from './combination/CombineLatest';
import { Concat } from './combination/Concat';

type Props = {
};
type State = {
};

export class Examples extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className={'page'}>
        <h3>Examples</h3>

        <div className={'menu'}>
          <Link to="/examples/combineAll">combineAll</Link>
          <Link to="/examples/combineLatest">combineLatest</Link>
          <Link to="/examples/concat">concat</Link>
        </div>

        <Switch>
          <Route path="/examples/combineAll" component={CombineAll} />
          <Route path="/examples/combineLatest" component={CombineLatest} />
          <Route path="/examples/concat" component={Concat} />
        </Switch>
      </div>
    );
  }
}
