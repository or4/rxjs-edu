import React from 'react';

// RxJS v6+
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  // only output distinct values, based on the last emitted value
  const myArrayWithDuplicatesInARow = from([1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 2, 1, 2, 1, 1, 2, 3]);

  const distinctSub = myArrayWithDuplicatesInARow
    .pipe(distinctUntilChanged())
    // output: 1,2,3,1,2,3
    .subscribe(val => console.log('DISTINCT SUB:', val));

  const nonDistinctSub = myArrayWithDuplicatesInARow
  // output: 1,1,2,2,3,1,2,3
    .subscribe(val => console.log('NON DISTINCT SUB:', val));
};

const test2 = () => {
  const sampleObject = { name: 'Test' };
  // Objects must be same reference
  const myArrayWithDuplicateObjects = from([
    sampleObject,
    sampleObject,
    sampleObject
  ]);
  // only out distinct objects, based on last emitted value
  const nonDistinctObjects = myArrayWithDuplicateObjects
    .pipe(distinctUntilChanged())
  // output: 'DISTINCT OBJECTS: {name: 'Test'}
    .subscribe(val => console.log('DISTINCT OBJECTS:', val));
};

const test3 = () => {
};

const test4 = () => {
};

export class DistinctUntilChanged extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>distinctUntilChanged - Only emit when the current value is different than the last.</h5>
      </div>
    );
  }
}

