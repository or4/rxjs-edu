import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  // emit value every second
  const sourceInterval = interval(100);
  // start first buffer after 5s, and every 5s after
  const startInterval = interval(1000);
  // emit value after 3s, closing corresponding buffer
  const closingInterval = val => {
    console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
    return interval(2000);
  };
  // every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
  const bufferToggleInterval = sourceInterval.pipe(
    bufferToggle(
      startInterval,
      closingInterval
    )
  );
  // log to console
  // ex. emitted buffers [4,5,6]...[9,10,11]
  const subscribe = bufferToggleInterval.subscribe(val =>
    console.log('Emitted Buffer:', val)
  );
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class BufferToggle extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>bufferToggle</h5>
      </div>
    );
  }
}

