import React from 'react';

// RxJS v6+
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  const source = of(1, 2, 3, 4);
  const example = source.pipe(reduce((acc, val) => acc + val));
  //output: Sum: 10'
  const subscribe = example.subscribe(val => console.log('Sum:', val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Reduce extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>reduce</h5>
      </div>
    );
  }
}

