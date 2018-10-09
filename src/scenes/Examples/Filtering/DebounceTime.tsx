import React from 'react';

// RxJS v6+
import { fromEvent, timer } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  const input = document.getElementById('example');

  //for every keyup, map to current input value
  const example = fromEvent(input, 'keyup').pipe(map(i => i.currentTarget.value));

  //wait .5s between keyups to emit current value
  //throw away all other values
  const debouncedInput = example.pipe(debounceTime(500));

  //log values
  const subscribe = debouncedInput.subscribe(val => {
    console.log(`Debounced Input: ${val}`);
  });
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class DebounceTime extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>debounceTime - Discard emitted values that take less than the specified time between output</h5>
      </div>
    );
  }
}

