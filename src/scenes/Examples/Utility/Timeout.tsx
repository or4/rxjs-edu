import React from 'react';

// RxJS v6+
import { of } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  // simulate request
  function makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
  }

  of(4000, 3000, 2000)
    .pipe(
      concatMap(duration =>
        makeRequest(duration).pipe(
          timeout(2500),
          catchError(error => of(`Request timed out after: ${duration}`))
        )
      )
    )
  /*
      *  "Request timed out after: 4000"
      *  "Request timed out after: 3000"
      *  "Request Complete!"
      */
    .subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Timeout extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>timeout</h5>
      </div>
    );
  }
}

