import React from 'react';

// RxJS v6+
import { interval, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit every 1s
  const source = interval(1000);
  //skip emitted values from source until inner observable emits (6s)
  const example = source.pipe(skipUntil(timer(6000)));
  //output: 5...6...7...8........
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class SkipUntil extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>skipUntil</h5>
      </div>
    );
  }
}

