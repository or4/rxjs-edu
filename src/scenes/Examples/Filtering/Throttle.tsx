import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { throttle, map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value every 1 second
  const source = interval(1000);
  //throttle for 2 seconds, emit latest value
  const example = source.pipe(throttle(val => interval(2000)));
  //output: 0...3...6...9
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  //emit value every 1 second
  const source = interval(1000);
  //incrementally increase the time to resolve based on source
  const promise = val =>
    new Promise(resolve =>
      setTimeout(() => resolve(`Resolved: ${val}`), val * 100)
    );
  //when promise resolves emit item from source
  const example = source.pipe(
    throttle(promise),
    map(val => `Throttled off Promise: ${val}`)
  );

  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Throttle extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>throttle - Emit value on the leading edge of an interval, but suppress new values until durationSelector has completed.</h5>
      </div>
    );
  }
}

