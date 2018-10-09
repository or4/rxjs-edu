import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  // emit value every 1 second
  const oneSecondInterval = interval(1000);
  // return an observable that emits value every 5 seconds
  const fiveSecondInterval = () => interval(5000);
  // every five seconds, emit buffered values
  const bufferWhenExample = oneSecondInterval.pipe(bufferWhen(fiveSecondInterval));
  // log values
  // ex. output: [0,1,2,3]...[4,5,6,7,8]
  const subscribe = bufferWhenExample.subscribe(val =>
    console.log('Emitted Buffer: ', val)
  );
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class BufferWhen extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>bufferWhen</h5>
      </div>
    );
  }
}

