import React from 'react';
import * as R from 'ramda';


// RxJS v6+
import { from } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit array as a sequence of values
  const arraySource = from([1, 2, 3, 4, 5]);
  // output: 1,2,3,4,5
  const subscribe = arraySource.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit result of promise
  const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
  // output: 'Hello World'
  const subscribe = promiseSource.subscribe(val => console.log(val));

  // emit result of promise
  const promiseSource2 = from(new Promise(resolve => setTimeout(() => {
    resolve('promiseSource2');
  }, 200)));
  promiseSource2.subscribe(val => console.log(val));

  // emit ONLY ONCE cause promise resolve only once
  const promiseSource3 = from(new Promise(resolve => setInterval(() => {
    resolve('promiseSource3');
  }, 200)));
  promiseSource3.subscribe(val => console.log(val));
};

const test3 = () => {
  // works on js collections
  const map = new Map();
  map.set(1, 'Hi');
  map.set(2, 'Bye');
  const mapSource = from(map);
  // output: [1, 'Hi'], [2, 'Bye']
  const subscribe = mapSource.subscribe(val => console.log(val));

  // ERROR: CAUSE You can provide an Observable, Promise, Array, or Iterable.
  // const mapSource2 = from({ a: 123, b: 456 } as any);
  // mapSource2.subscribe(val => console.log(val));

  const mapSource2 = from(R.toPairs({ a: 123, b: 456 }));
  mapSource2.subscribe(val => console.log(val));
};

const test4 = () => {
  // emit string as a sequence
  const source = from('Hello World');
  // output: 'H','e','l','l','o',' ','W','o','r','l','d'
  const subscribe = source.subscribe(val => console.log(val));
};

export class From extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>from - Turn an array, promise, or iterable into an observable.</h5>
      </div>
    );
  }
}

