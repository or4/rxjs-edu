import React from 'react';

// RxJS v6+
import { take, map, concatAll } from 'rxjs/operators';
// import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit a value every 2 seconds
  const source = rxjs.interval(2000);

  const example = source.pipe(
    // for demonstration, add 10 to and return as observable
    map(val => rxjs.of(val + 10)),
    // merge values from inner observable
    concatAll()
  );
  // output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
  const subscribe = example.subscribe(val =>
    console.log('Example with Basic Observable:', val)
  );
};

const test2 = () => {
  // create and resolve basic promise
  const samplePromise = val => new Promise(resolve => resolve(val + 100));
  // emit a value every 2 seconds
  const source = rxjs.interval(2000);

  const example = source.pipe(
    map(val => samplePromise(val)),
    // merge values from resolved promise
    concatAll()
  );
  // output: 'Example with Promise 0', 'Example with Promise 1'...
  const subscribe = example.subscribe(val =>
    console.log('Example with Promise:', val)
  );
};

// consistently perform observables
const test3 = () => {
  const obs1 = rxjs.interval(1000).pipe(take(10));
  const obs2 = rxjs.interval(500).pipe(take(2));
  const obs3 = rxjs.interval(2000).pipe(take(1));
  //emit three observables
  const source = (rxjs as any).of(obs1, obs2, obs3);
  //subscribe to each inner observable in order when previous completes
  const example = source.pipe(concatAll());
  /*
  output: 0,1,2,3,4,0,1,0
  How it works...
  Subscribes to each inner observable and emit values, when complete subscribe to next
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/

  const subscribe = example.subscribe(val => console.log(val));
};


export class ConcatAll extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>concatAll - Collect observables and subscribe to next when previous completes.</h5>
      </div>
    );
  }
}

