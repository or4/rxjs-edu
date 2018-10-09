import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit (1,2,3,4,5)
  const source = from([1, 2, 3, 4, 5]);
  //add 10 to each value
  const example = source.pipe(map(val => val + 10));
  //output: 11,12,13,14,15
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  //emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
  const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);
  //grab each persons name, could also use pluck for this scenario
  const example = source.pipe(map(({ name }) => name));
  //output: "Joe","Frank","Ryan"
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Map extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>map</h5>
      </div>
    );
  }
}

