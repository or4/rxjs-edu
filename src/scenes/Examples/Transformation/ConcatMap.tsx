import React from 'react';

// RxJS v6+
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit delay value
  const source = of(2000, 1000);
  // map value from source into inner observable, when complete emit result and move to next
  const example = source.pipe(
    concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  );
  //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
  const subscribe = example.subscribe(val =>
    console.log(`With concatMap: ${val}`)
  );

  // showing the difference between concatMap and mergeMap
  const mergeMapExample = source
    .pipe(
    // just so we can log this after the first example has run
      delay(5000),
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val => console.log(`With mergeMap: ${val}`));
};

const test2 = () => {
  //emit 'Hello' and 'Goodbye'
  const source = of('Hello', 'Goodbye');
  //example with promise
  const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
  // map value from source into inner observable, when complete emit result and move to next
  const example = source.pipe(concatMap(val => examplePromise(val)));
  //output: 'Example w/ Promise: 'Hello World', Example w/ Promise: 'Goodbye World'
  const subscribe = example.subscribe(val =>
    console.log('Example w/ Promise:', val)
  );
};

const test3 = () => {
//emit 'Hello' and 'Goodbye'
  const source = of('Hello', 'Goodbye');
  //example with promise
  const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
  //result of first param passed to second param selector function before being  returned
  const example = source.pipe(
    concatMap(val => examplePromise(val), result => `${result} w/ selector!`)
  );
  //output: 'Example w/ Selector: 'Hello w/ Selector', Example w/ Selector: 'Goodbye w/ Selector'
  const subscribe = example.subscribe(val =>
    console.log('Example w/ Selector:', val)
  );
};

const test4 = () => {
};

export class ConcatMap extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>concatMap</h5>
      </div>
    );
  }
}

