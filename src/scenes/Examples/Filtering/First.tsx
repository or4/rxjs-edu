import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { first } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  const source = from([1, 2, 3, 4, 5]);
  // no arguments, emit first value
  const example = source.pipe(first());
  // output: "First value: 1"
  const subscribe = example.subscribe(val => console.log(`First value: ${val}`));
};

const test2 = () => {
  const source = from([1, 2, 3, 4, 5]);
  // emit first item to pass test
  const example = source.pipe(first(num => num > 3));
  // output: "First to pass test: 5"
  const subscribe = example.subscribe(val =>
    console.log(`First to pass test: ${val}`)
  );
};

const test3 = () => {
  const source = from([1, 2, 3, 4, 5]);
  // no value will pass, emit default
  const example = source.pipe(first(val => val > 5, 'Nothing'));
  // output: 'Nothing'
  const subscribe = example.subscribe(val => console.log(val));
};

const test4 = () => {
  const source = from([1, 2, 3, 4, 5]);
  // emit first item to pass test
  const example = source.pipe(first(num => num > 30));
  // output: "First to pass test: 5"
  const subscribe = example.subscribe(val =>
    console.log(`First to pass test: ${val}`)
  );

  // ERROR "no elements in sequence", name: "EmptyError"
};

export class First extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>first</h5>
      </div>
    );
  }
}

