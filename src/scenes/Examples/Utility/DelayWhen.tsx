import React from 'react';

// RxJS v6+
import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value every second
  const message = interval(1000);
  //emit value after five seconds
  const delayForFiveSeconds = () => timer(5000);
  //after 5 seconds, start emitting delayed interval values
  const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
  //log values, delayed for 5 seconds
  //ex. output: 5s....1...2...3
  const subscribe = delayWhenExample.subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class DelayWhen extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>delayWhen</h5>
      </div>
    );
  }
}

