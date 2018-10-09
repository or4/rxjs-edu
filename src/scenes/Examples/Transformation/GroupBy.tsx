import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ];
  //emit each person
  const source = from(people);
  //group by age
  const example = source.pipe(
    groupBy(person => person.age),
    // return each item in group as array
    mergeMap(group => group.pipe(toArray()))
  );
  /*
    output:
    [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
    [{age: 30, name: "Joe"}]
    [{age: 35, name: "Sarah"}]
  */
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class GroupBy extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>groupBy</h5>
      </div>
    );
  }
}

