import React from 'react';

// RxJS v6+
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit value every 1s
  const source = interval(300);
  const example = source.pipe(
    mergeMap(val => {
      // throw error for demonstration
      if (val > 5) {
        return throwError('Error!');
      }
      return of(val);
    }),
    // retry 2 times on error
    retry(2)
  );
  /*
    output:
    0..1..2..3..4..5..
    0..1..2..3..4..5..
    0..1..2..3..4..5..
    "Error!: Retried 2 times then quit!"
  */
  const subscribe = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}: Retried 2 times then quit!`)
  });
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Retry extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>retry</h5>
      </div>
    );
  }
}

