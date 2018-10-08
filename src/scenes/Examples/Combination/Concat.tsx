import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  // emits 1,2,3
  const sourceOne = rxjs.of(1, 2, 3);
  // emits 4,5,6
  const sourceTwo = rxjs.of(4, 5, 6);
  // emit values from sourceOne, when complete, subscribe to sourceTwo
  const example = sourceOne.pipe(rxjsOp.concat(sourceTwo));
  // output: 1,2,3,4,5,6
  const subscribe = example.subscribe(val =>
    console.log('Example: Basic concat:', val)
  );
};

const test2 = () => {
  // emits 1,2,3
  const sourceOne = rxjs.of(1, 2, 3);
  // emits 4,5,6
  const sourceTwo = rxjs.of(4, 5, 6);

  // used as static
  const example = rxjs.concat(sourceOne, sourceTwo);
  // output: 1,2,3,4,5,6
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
  // emits 1,2,3
  const sourceOne = rxjs.of(1, 2, 3);
  // emits 4,5,6
  const sourceTwo = rxjs.of(4, 5, 6);

  // delay 3 seconds then emit
  const sourceThree = sourceOne.pipe(rxjsOp.delay(3000));
  // sourceTwo waits on sourceOne to complete before subscribing
  const example = sourceThree.pipe(rxjsOp.concat(sourceTwo));
  // output: 1,2,3,4,5,6
  const subscribe = example.subscribe(val =>
    console.log('Example: Delayed source one:', val)
  );
};

const test4 = () => {
  // when source never completes, the subsequent observables never runs
  const source = rxjs.concat(rxjs.interval(1000).pipe(rxjsOp.take(4)), rxjs.of('This', 'Never', 'Runs'));
  // outputs: 0,1,2,3,4....
  const subscribe = source.subscribe(val =>
    console.log(
      'Example: Source never completes, second observable never runs:',
      val
    )
  );
};

export class Concat extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test2();
    // test3();
    test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>concat - Subscribe to observables in order as previous completes, emit values.</h5>
      </div>
    );
  }
}

