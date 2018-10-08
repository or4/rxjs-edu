import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { Combination } from './Combination';
import { Conditional } from './Conditional';
import { Creation } from './Creation';
import { ErrorHandling } from './ErrorHandling';
import { Filtering } from './Filtering';
import { Multicasting } from './Multicasting';
import { Recipes } from './Recipes';
import { Transformation } from './Transformation';
import { Utility } from './Utility';


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
          <Link to="/examples/creation">creation</Link>
          <Link to="/examples/errorHandling">errorHandling</Link>
          <Link to="/examples/filtering">filtering</Link>
          <Link to="/examples/multicasting">multicasting</Link>
          <Link to="/examples/recipes">recipes</Link>
          <Link to="/examples/transformation">transformation</Link>
          <Link to="/examples/utility">utility</Link>
        </div>

        <Switch>
          <Route path="/examples/combination" component={Combination} />
          <Route path="/examples/conditional" component={Conditional} />
          <Route path="/examples/creation" component={Creation} />
          <Route path="/examples/errorHandling" component={ErrorHandling} />
          <Route path="/examples/filtering" component={Filtering} />
          <Route path="/examples/multicasting" component={Multicasting} />
          <Route path="/examples/recipes" component={Recipes} />
          <Route path="/examples/transformation" component={Transformation} />
          <Route path="/examples/utility" component={Utility} />
        </Switch>
      </div>
    );
  }
}
