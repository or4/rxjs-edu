import React from 'react';

// RxJS v6+
import { of, interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit 'Hello'
  const source = of('Hello');
  //map to inner observable and flatten
  const example = source.pipe(mergeMap(val => of(`${val} World!`)));
  //output: 'Hello World!'
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  //emit 'Hello'
  const source = of('Hello');
  //mergeMap also emits result of promise
  const myPromise = val =>
    new Promise(resolve => resolve(`${val} World From Promise!`));
  //map to promise and emit result
  const example = source.pipe(mergeMap(val => myPromise(val)));
  //output: 'Hello World From Promise'
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
  /*
  you can also supply a second argument which receives the source value and emitted
  value of inner observable or promise
*/
//emit 'Hello'
  const source = of('Hello');
  //mergeMap also emits result of promise
  const myPromise = val =>
    new Promise(resolve => resolve(`${val} World From Promise!`));
  const example = source.pipe(
    mergeMap(
      val => myPromise(val),
      (valueFromSource, valueFromPromise) => {
        return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
      }
    )
  );
  //output: "Source: Hello, Promise: Hello World From Promise!"
  const subscribe = example.subscribe(val => console.log(val));

};

const test4 = () => {
  //emit value every 1s
  const source = interval(1000);

  const example = source.pipe(
    mergeMap(
    //project
      val => interval(5000).pipe(take(2)),
      //resultSelector
      (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
      //concurrent
      2
    )
  );
  /*
        Output:
        [0, 0, 0, 0] <--1st inner observable
        [1, 1, 0, 0] <--2nd inner observable
        [0, 0, 1, 1] <--1st inner observable
        [1, 1, 1, 1] <--2nd inner observable
        [2, 2, 0, 0] <--3rd inner observable
        [3, 3, 0, 0] <--4th inner observable
*/
  const subscribe = example.subscribe(val => console.log(val));
};

export class MergeMap extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>mergeMap</h5>
      </div>
    );
  }
}

