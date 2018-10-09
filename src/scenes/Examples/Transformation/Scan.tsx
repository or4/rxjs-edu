import React from 'react';

// RxJS v6+
import { interval, of, Subject } from 'rxjs';
import { scan, map, distinctUntilChanged } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  const source = of(1, 2, 3);
  // basic scan example, sum over time starting with zero
  const example = source.pipe(scan((acc, curr) => acc + curr, 0));
  // log accumulated values
  // output: 1,3,6
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  const subject = new Subject();
  // scan example building an object over time
  const example = subject.pipe(
    scan((acc, curr) => Object.assign({}, acc, curr), {})
  );
  // log accumulated values
  const subscribe = example.subscribe(val =>
    console.log('Accumulated object:', val)
  );
  // next values into subject, adding properties to object
  // {name: 'Joe'}
  subject.next({ name: 'Joe' });
  // {name: 'Joe', age: 30}
  subject.next({ age: 30 });
  // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
  subject.next({ favoriteLanguage: 'JavaScript' });
};

const test3 = () => {
  // Accumulate values in an array, emit random values from this array.
  const predicate = (a, c) => [...a, c];
  const scanObs = interval(1000)
    .pipe(
      scan(predicate, []),
      map(r => r[Math.floor(Math.random() * r.length)]),
      distinctUntilChanged()
    )
    .subscribe(console.log);

};

const test4 = () => {
};

export class Scan extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>scan</h5>
      </div>
    );
  }
}

