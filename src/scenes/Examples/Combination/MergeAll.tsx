import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));

  // emit 1,2,3
  const source = rxjs.of(1, 2, 3);

  const example = source.pipe(
    // map each value to promise
    rxjsOp.map(val => myPromise(val)),
    // emit result from source
    rxjsOp.mergeAll()
  );

  /*
    output:
    "Result: 1"
    "Result: 2"
    "Result: 3"
  */
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  const source = rxjs.interval(500).pipe(rxjsOp.take(5));

  /*
    interval is emitting a value every 0.5s.  This value is then being mapped to interval that
    is delayed for 1.0s.  The mergeAll operator takes an optional argument that determines how
    many inner observables to subscribe to at a time.  The rest of the observables are stored
    in a backlog waiting to be subscribe.
  */
  const example = source.pipe(
    rxjsOp.map(val =>
      source.pipe(
        rxjsOp.delay(1000),
        rxjsOp.take(3)
      )
    ),
    rxjsOp.mergeAll(2)
  ).subscribe(val => console.log(val));
  /*
    The subscription is completed once the operator emits all values.
  */
};

export class MergeAll extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>mergeAll - parallel perform. Collect and subscribe to all observables.</h5>
      </div>
    );
  }
}

