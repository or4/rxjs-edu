import React from 'react';

// RxJS v6+
import { of } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  //emit 1,2,3,4,5
  const source = of(1, 2, 3, 4, 5);
  //allow values until value from source is greater than 4, then complete
  const example = source.pipe(takeWhile(val => val <= 4));
  //output: 1,2,3,4
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
  const source = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

  // allow values until value from source equals 3, then complete
  // output: [3, 3, 3]
  source
    .pipe(takeWhile(it => it === 3))
    .subscribe(val => console.log('takeWhile', val));

  // output: [3, 3, 3, 3, 3, 3, 3]
  source
    .pipe(filter(it => it === 3))
    .subscribe(val => console.log('filter', val));
};

const test3 = () => {
};

const test4 = () => {
};

export class TakeWhile extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>takeWhile</h5>
      </div>
    );
  }
}

