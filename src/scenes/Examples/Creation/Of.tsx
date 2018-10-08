import React from 'react';

// RxJS v6+
import { of } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  //emits any number of provided values in sequence
  const source = of(1, 2, 3, 4, 5);
  //output: 1,2,3,4,5
  const subscribe = source.subscribe(val => console.log(val));

};

const test2 = () => {
  //emits values of any type
  const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
    return 'Hello';
  });
  //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
  const subscribe = source.subscribe(val => console.log(val));

};

const test3 = () => {
};

const test4 = () => {
};

export class Of extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>of</h5>
      </div>
    );
  }
}

