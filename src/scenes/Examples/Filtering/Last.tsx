import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { last } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  const source = from([1, 2, 3, 4, 5]);
  //no arguments, emit last value
  const example = source.pipe(last());
  //output: "Last value: 5"
  const subscribe = example.subscribe(val => console.log(`Last value: ${val}`));
};

const test2 = () => {
  const source = from([1, 2, 3, 4, 5]);
  //emit last even number
  const exampleTwo = source.pipe(last(num => num % 2 === 0));
  //output: "Last to pass test: 4"
  const subscribeTwo = exampleTwo.subscribe(val =>
    console.log(`Last to pass test: ${val}`)
  );
};

const test3 = () => {
  const source = from([1, 2, 3, 4, 5]);
  //no values will pass given predicate, emit default
  const exampleTwo = source.pipe(last(v => v > 5, 'Nothing!'));
  //output: 'Nothing!'
  const subscribeTwo = exampleTwo.subscribe(val => console.log(val));

};

const test4 = () => {
};

export class Last extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>last</h5>
      </div>
    );
  }
}

