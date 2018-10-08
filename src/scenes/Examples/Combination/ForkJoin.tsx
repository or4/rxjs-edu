import React from 'react';

// RxJS v6+
// import * as rxjs from 'rxjs';

import { delay, take, mergeMap, catchError } from 'rxjs/operators';
import { forkJoin, of, interval, throwError } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {

  const myPromise = val =>
    new Promise(resolve =>
      setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
    );

  /*
    when all observables complete, give the last
    emitted value from each as an array
    consistently
  */
  const example = forkJoin(
    // emit 'Hello' immediately
    of('Hello'),
    // then emit 'World' after 10 second
    of('World').pipe(delay(10000)),
    // then emit 0 after 1 second
    interval(1000).pipe(take(1)),
    // then emit 0...1 in 1 second interval
    interval(1000).pipe(take(2)),
    // then promise that resolves to 'Promise Resolved' after 5 seconds
    myPromise('RESULT')
  );
  //output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
  const subscribe = example.subscribe(val => console.log(val));
};

// parallel perform actions
const test2 = () => {
  const myPromise = val =>
    new Promise(resolve =>
      setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
    );

  const source = of([1, 2, 3, 4, 5]);
  // emit array of all 5 results
  const example = source.pipe(
    mergeMap(
      q => forkJoin(...q.map(myPromise))
    )
  );
  /*
  output: in 5 seconds
  [
   "Promise Resolved: 1",
   "Promise Resolved: 2",
   "Promise Resolved: 3",
   "Promise Resolved: 4",
   "Promise Resolved: 5"
  ]
*/
  const subscribe = example.subscribe(val => console.log(val));

};

const test3 = () => {
  /*
    when all observables complete, give the last
    emitted value from each as an array
  */
  const example = forkJoin(
    // emit 'Hello' immediately
    of('Hello'),
    // emit 'World' after 10 second
    of('World').pipe(delay(10000)),
    // throw error
    throwError('This will error') // perform momently, although run consistently
  ).pipe(catchError(error => of(error)));
  // output: 'This will Error'
  const subscribe = example.subscribe(val => console.log(val));
};

const test4 = () => {
  /*
    when all observables complete, give the last
    emitted value from each as an array
  */
  const example = forkJoin(
  // emit 'Hello' immediately
    of('Hello'),
    // emit 'World' after 10 second
    of('World').pipe(delay(10000)),
    // throw error
    throwError('This will error').pipe(catchError(error => of(error)))
  );
  //output: ["Hello", "World", "This will error"]
  const subscribe = example.subscribe(val => console.log(val));
};

export class ForkJoin extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>forkJoin - When all observables complete, emit the last emitted value from each.</h5>
      </div>
    );
  }
}

