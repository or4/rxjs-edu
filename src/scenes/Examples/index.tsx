import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Combination } from './Combination';
import { Conditional } from './Conditional';


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
          <Link to="/examples/conditional">conditional</Link>
        </div>

        <Switch>
          <Route path="/examples/combination" component={Combination} />
          <Route path="/examples/conditional" component={Conditional} />
        </Switch>
      </div>
    );
  }
}
