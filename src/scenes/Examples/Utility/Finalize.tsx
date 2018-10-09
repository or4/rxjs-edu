import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { take, finalize } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value in sequence every 1 second
  const source = interval(1000);
  //output: 0,1,2,3,4,5....
  const example = source.pipe(
    take(5), //take only the first 5 values
    finalize(() => console.log('Sequence complete')) // Execute when the observable completes
  );
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Finalize extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>finalize</h5>
      </div>
    );
  }
}

