import React from 'react';

// RxJS v6+
import { timer, from, throwError, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit error
  const source = throwError('This is an error!');
  // gracefully handle error, returning observable with error message
  const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
  // output: 'I caught: This is an error'
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // create promise that immediately rejects
  const myBadPromise = () => new Promise((resolve, reject) => {
    reject('Rejected!');
  });

  // emit single value after 1 second
  const source = timer(1000);
  // catch rejected promise, returning observable containing error message
  const example = source.pipe(
    mergeMap(_ =>
      from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
    )
  );
  // output: 'Bad Promise: Rejected'
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
};

const test4 = () => {
};

export class Catch extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>catch</h5>
      </div>
    );
  }
}

