import React from 'react';

// RxJS v6+
import { fromEvent, timer, interval } from 'rxjs';
import { debounce, throttle, map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit value every 1 second
  const source = interval(300);
  // throttle for 2 seconds, emit latest value
  const example = source.pipe(throttle(val => interval(1000)));
  // output: 0...3...6...9
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  const input = document.getElementById('example');

  // for every keyup, map to current input value
  const example = fromEvent(input, 'keyup').pipe(map(i => (i.currentTarget as any).value));

  // wait .5s between keyups to emit current value
  // throw away all other values
  const debouncedInput = example.pipe(debounce(() => timer(500)));

  // log values
  const subscribe = debouncedInput.subscribe(val => {
    console.log(`Debounced Input: ${val}`);
  });
};

const test3 = () => {
  const input = document.getElementById('example');

  // for every keyup, map to current input value
  const example = fromEvent(input, 'keyup').pipe(map(i => (i.currentTarget as any).value));

  // wait .5s between keyups to emit current value
  // throw away all other values
  const debouncedInput = example.pipe(throttle(() => timer(1000)));

  // log values
  const subscribe = debouncedInput.subscribe(val => {
    console.log(`Throttled Input: ${val}`);
  });
};

const test4 = () => {
  // emit value every 1 second
  const source = interval(100);
  // incrementally increase the time to resolve based on source
  const promise = val =>
    new Promise(resolve =>
      setTimeout(() => resolve(`Resolved: ${val}`), val * 100)
    );
  // when promise resolves emit item from source
  const example = source.pipe(
    throttle(promise),
    map(val => `Throttled off Promise: ${val}`)
  );

  const subscribe = example.subscribe(val => console.log(val));
};

export class Throttle extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2(); // omit last values get only actual
    // test3();
    test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>throttle - Emit value on the leading edge of an interval, but suppress new values until durationSelector has completed.</h5>
        <input type="text" id="example" />
      </div>
    );
  }
}

