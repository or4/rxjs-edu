import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  // Create an observable that emits a value every second
  const source = interval(100);
  // After three values are emitted, pass on as an array of buffered values
  const bufferThree = source.pipe(bufferCount(3));
  // Print values to console
  // ex. output [0,1,2]...[3,4,5]
  const subscribe = bufferThree.subscribe(val =>
    console.log('Buffered Values:', val)
  );
};

const test2 = () => {
  // Create an observable that emits a value every second
  const source = interval(500);
  /*
    bufferCount also takes second argument, when to start the next buffer
    for instance, if we have a bufferCount of 3 but second argument (startBufferEvery) of 1:
    1st interval value:
    buffer 1: [0]
    2nd interval value:
    buffer 1: [0,1]
    buffer 2: [1]
    3rd interval value:
    buffer 1: [0,1,2] Buffer of 3, emit buffer
    buffer 2: [1,2]
    buffer 3: [2]
    4th interval value:
    buffer 2: [1,2,3] Buffer of 3, emit buffer
    buffer 3: [2, 3]
    buffer 4: [3]
  */
  const bufferEveryOne = source.pipe(bufferCount(3, 1));
  // Print values to console
  // [0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5]
  const subscribe = bufferEveryOne.subscribe(val =>
    console.log('Start Buffer Every 1:', val)
  );
  // [0, 1, 2], [5, 6, 7], [10, 11, 12]..
  source.pipe(bufferCount(3, 5)).subscribe(val =>
    console.log('Start Buffer Every 1:', val)
  );
};

const test3 = () => {
};

const test4 = () => {
};

export class BufferCount extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>bufferCount</h5>
      </div>
    );
  }
}

