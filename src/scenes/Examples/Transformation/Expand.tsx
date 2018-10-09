import React from 'react';

// RxJS v6+
import { interval, of } from 'rxjs';
import { expand, take } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit 2
  const source = of(2);
  const example = source.pipe(
  //recursively call supplied function
    expand(val => {
    //2,3,4,5,6
      console.log(`Passed value: ${val}`);
      //3,4,5,6
      return of(1 + val);
    }),
    //call 5 times
    take(5)
  );
  /*
    "RESULT: 2"
    "Passed value: 2"
    "RESULT: 3"
    "Passed value: 3"
    "RESULT: 4"
    "Passed value: 4"
    "RESULT: 5"
    "Passed value: 5"
    "RESULT: 6"
    "Passed value: 6"
*/
  //output: 2,3,4,5,6
  const subscribe = example.subscribe(val => console.log(`RESULT: ${val}`));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Expand extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>expand</h5>
      </div>
    );
  }
}

