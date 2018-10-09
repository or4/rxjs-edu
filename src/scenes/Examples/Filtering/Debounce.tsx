import React from 'react';

// RxJS v6+
import { fromEvent, of, timer, interval } from 'rxjs';
import { debounce, map } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit four strings
  const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
  /*
    Only emit values after a second has passed between the last emission,
    throw away all other values
  */
  const debouncedExample = example.pipe(debounce(() => timer(1000)));
  /*
    In this example, all values but the last will be omitted
    output: 'Last will display'
  */
  const subscribe = debouncedExample.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit value every 1 second, ex. 0...1...2
  const interval$ = interval(1000);
  // raise the debounce time by 200ms each second
  const debouncedInterval = interval$.pipe(debounce(val => timer(val * 200)));
  /*
    After 5 seconds, debounce time will be greater than interval time,
    all future values will be thrown away
    output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
  */
  const subscribe = debouncedInterval.subscribe(val =>
    console.log(`Example Two: ${val}`)
  );
};

const test3 = () => {
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

const test4 = () => {
};

export class Debounce extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>debounce - Discard emitted values that take less than the specified time, based on selector function, between output.</h5>
        <input type="text" id="example" />
      </div>
    );
  }
}

