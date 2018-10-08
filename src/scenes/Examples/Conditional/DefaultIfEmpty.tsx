import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit 'Observable.of() Empty!' when empty, else any values from source
  const exampleOne = rxjs.of().pipe(rxjsOp.defaultIfEmpty('Observable.of() Empty!'));
  // output: 'Observable.of() Empty!'
  const subscribe = exampleOne.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit 'Observable.empty()!' when empty, else any values from source
  const example = rxjs.empty().pipe(rxjsOp.defaultIfEmpty('Observable.empty()!'));
  // output: 'Observable.empty()!'
  const subscribe = example.subscribe(val => console.log(val));
};

export class DefaultIfEmpty extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>defaultIfEmpty - Emit given value if nothing is emitted before completion.</h5>
      </div>
    );
  }
}

