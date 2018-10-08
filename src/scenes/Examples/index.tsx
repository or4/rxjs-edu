import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Combination } from './Combination';


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
          <Link to="/examples/combination">combination</Link>
        </div>

        <Switch>
          <Route path="/examples/combination" component={Combination} />
        </Switch>
      </div>
    );
  }
}
