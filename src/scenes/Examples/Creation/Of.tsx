import React from 'react';

// RxJS v6+
import { of, interval, merge } from 'rxjs';
import { mergeAll, startWith, map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // emits any number of provided values in sequence
  const source = of(1, 2, 3, 4, 5);
  // output: 1,2,3,4,5
  const subscribe = source.subscribe(val => console.log(val));
};

const test2 = () => {
  // emits values of any type
  const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
    return 'Hello';
  });
  // output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
  const subscribe = source.subscribe(val => console.log(val));
};

const test3 = () => {
  const source = merge(
    of(1),
    of(2),
    interval(300).pipe(map(i => i + 100))
  );
  // const merged = mergeAll(source);
  const subscribe = source.subscribe(val => console.log(val));
};

const test4 = () => {
  const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));

  // emit 1,2,3
  const source = of(1, 2, 3);
  const example = source.pipe(
    map(val => myPromise(val)),
    mergeAll()
  );

  const subscribe = example.subscribe(val => console.log(val));
};

export class Of extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>of</h5>
      </div>
    );
  }
}

