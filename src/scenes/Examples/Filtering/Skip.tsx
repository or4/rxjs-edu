import React from 'react';

// RxJS v6+
import { interval, from } from 'rxjs';
import { skip, filter } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit every 1s
  const source = interval(1000);
  //skip the first 5 emitted values
  const example = source.pipe(skip(5));
  //output: 5...6...7...8........
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // 3,4,5...
  const skipObs = numArrayObs.pipe(skip(2)).subscribe(console.log);

  // 3,4,5...
  const filterObs = numArrayObs
    .pipe(filter((val, index) => index > 1))
    .subscribe(console.log);

//Same output!

};

const test3 = () => {
};

const test4 = () => {
};

export class Skip extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>skip - Skip the provided number of emitted values.</h5>
      </div>
    );
  }
}

