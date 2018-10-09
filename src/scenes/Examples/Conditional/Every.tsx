import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';
// import * as R from 'ramda';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit 5 values
  const source = rxjs.of(1, 2, 3, 4, 5);
  const example = source.pipe(
    // is every value even?
    rxjsOp.every(val => val % 2 === 0)
    // R.all((val: number) => val % 2 === 0) as any
  );
  // output: false
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit 5 values
  const allEvens = rxjs.of(2, 4, 6, 8, 10);
  const example = allEvens.pipe(
    // is every value even?
    rxjsOp.every(val => val % 2 === 0)
  );
  // output: true
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Every extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>every - If all values pass predicate before completion emit true, else false.</h5>
      </div>
    );
  }
}

