import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit (1,2,3)
  const source = rxjs.of(1, 2, 3);
  // start with 0
  const example = source.pipe(rxjsOp.startWith(0));
  // output: 0,1,2,3
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit ('World!', 'Goodbye', 'World!')
  const source = rxjs.of('World!', 'Goodbye', 'World!');
  // start with 'Hello', concat current string to previous
  const example = source.pipe(
    rxjsOp.startWith('Hello'),
    rxjsOp.scan((acc, curr) => `${acc} ${curr}`)
  );
  /*
  output:
  "Hello"
  "Hello World!"
  "Hello World! Goodbye"
  "Hello World! Goodbye World!"
*/
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
  // emit values in sequence every 1s
  const source = rxjs.interval(100);
  // start with -3, -2, -1
  const example = source.pipe(rxjsOp.startWith(-3, -2, -1), rxjsOp.take(7));
  // output: -3, -2, -1, 0, 1, 2....
  const subscribe = example.subscribe(val => console.log(val));
};


export class StartWith extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>startWith - Emit given value first.</h5>
      </div>
    );
  }
}

