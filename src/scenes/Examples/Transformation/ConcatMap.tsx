import React from 'react';

// RxJS v6+
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit delay value
  const source = of(1000, 3000, 2000);
  // map value from source into inner observable, when complete emit result and move to next
  const example = source.pipe(
    concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  );
  // output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
  const subscribe = example.subscribe(val =>
    console.log(`With concatMap: ${val} ${new Date().getSeconds()}`)
  );

  // showing the difference between concatMap and mergeMap
  const mergeMapExample = source
    .pipe(
      // just so we can log this after the first example has run
      delay(8000),
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val => console.log(`With mergeMap: ${val}  ${new Date().getSeconds()}`));
};

const test2 = () => {
  // emit 'Hello' and 'Goodbye'
  const source = of('Hello', 'Goodbye');
  // example with promise
  const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
  //  map value from source into inner observable, when complete emit result and move to next
  const example = source.pipe(concatMap(val => examplePromise(val)));
  // output: 'Example Promise: 'Hello World', Example Promise: 'Goodbye World'
  const subscribe = example.subscribe(val =>
    console.log('Example Promise:', val)
  );
};

const test3 = () => {
  // emit 'Hello' and 'Goodbye'
  const source = of('Hello', 'Goodbye');
  // example with promise
  const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
  // result of first param passed to second param selector function before being  returned
  const example = source.pipe(
    concatMap(val => examplePromise(val), result => `${result} selector!`)
  );
  // output: 'Example Selector: 'Hello selector', Example Selector: 'Goodbye selector'
  const subscribe = example.subscribe(val =>
    console.log('Example Selector:', val)
  );
};

const test4 = () => {
};

export class ConcatMap extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>concatMap - perform consistently, mergeMap - parallel</h5>
      </div>
    );
  }
}

