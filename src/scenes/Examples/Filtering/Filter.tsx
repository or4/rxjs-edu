import React from 'react';

// RxJS v6+
import { from, interval } from 'rxjs';
import { filter } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit (1,2,3,4,5)
  const source = from([1, 2, 3, 4, 5]);
  //filter out non-even numbers
  const example = source.pipe(filter(num => num % 2 === 0));
  //output: "Even number: 2", "Even number: 4"
  const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));
};

const test2 = () => {
  //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
  const source = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
  //filter out people with age under 30
  const example = source.pipe(filter(person => person.age >= 30));
  //output: "Over 30: Joe"
  const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));
};

const test3 = () => {
  //emit every second
  const source = interval(1000);
  //filter out all values until interval is greater than 5
  const example = source.pipe(filter(num => num > 5));
  /*
    "Number greater than 5: 6"
    "Number greater than 5: 7"
    "Number greater than 5: 8"
    "Number greater than 5: 9"
  */
  const subscribe = example.subscribe(val =>
    console.log(`Number greater than 5: ${val}`)
  );
};

const test4 = () => {
};

export class Filter extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>filter</h5>
      </div>
    );
  }
}

