import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { single } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit (1,2,3,4,5)
  const source = from([1, 2, 3, 4, 5]);
  // emit one item that matches predicate
  const example = source.pipe(single(val => val === 4));
  // output: 4
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit (1,2,3,4,5)
  const source = from([1, 2, 3, 4, 5]);
  // emit one item that matches predicate
  const example = source.pipe(single(val => val > 3));
  // output: ERROR hostReportError.js:3 Uncaught Sequence contains more than one element
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Single extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>single - Emit single item that passes expression.</h5>
      </div>
    );
  }
}

