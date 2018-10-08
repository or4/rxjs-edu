import React from 'react';

// RxJS v6+
import { throwError } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {

//emits an error with specified value on subscription
  const source = throwError('This is an error!');
  //output: 'Error: This is an error!'
  const subscribe = source.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!'),
    error: val => console.log(`Error: ${val}`)
  });
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Throw extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>throw</h5>
      </div>
    );
  }
}

