import React from 'react';

// RxJS v6+
import { interval, merge } from 'rxjs';
import { throttleTime, ignoreElements } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value every 1 second
  const source = interval(1000);
  /*
  throttle for five seconds
  last value emitted before throttle ends will be emitted from source
*/
  const example = source.pipe(throttleTime(5000));
  //output: 0...6...12
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  const source = merge(
    //emit every .75 seconds
    interval(750),
    //emit every 1 second
    interval(1000)
  );
  //throttle in middle of emitted values
  const example = source.pipe(throttleTime(1200));
  //output: 0...1...4...4...8...7
  const subscribe = example.subscribe(val => console.log(val));

};

const test3 = () => {
};

const test4 = () => {
};

export class ThrottleTime extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>throttleTime - Emit latest value when specified duration has passed.</h5>
      </div>
    );
  }
}

