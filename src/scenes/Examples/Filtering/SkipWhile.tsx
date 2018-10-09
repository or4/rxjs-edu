import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  //emit every 1s
  const source = interval(1000);
  //skip emitted values from source while value is less than 5
  const example = source.pipe(skipWhile(val => val < 5));
  //output: 5...6...7...8........
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class SkipWhile extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>skipWhile</h5>
      </div>
    );
  }
}

