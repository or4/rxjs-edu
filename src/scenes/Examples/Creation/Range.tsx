import React from 'react';

// RxJS v6+
import { range } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit 1-10 in sequence
  const source = range(1, 10);
  //output: 1,2,3,4,5,6,7,8,9,10
  const example = source.subscribe(val => console.log(val));

};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Range extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>range</h5>
      </div>
    );
  }
}

