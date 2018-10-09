import React from 'react';

// RxJS v6+
import { interval, throwError, of } from 'rxjs';
import { mergeMap, take, ignoreElements } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit value every 100ms
  const source = interval(100);
  // ignore everything but complete
  const example = source.pipe(
    take(5),
    ignoreElements()
  );
  // output: "COMPLETE!"
  const subscribe = example.subscribe(
    val => console.log(`NEXT: ${val}`),
    val => console.log(`ERROR: ${val}`),
    () => console.log('COMPLETE!')
  );
};

const test2 = () => {
  // emit value every 100ms
  const source = interval(100);
  // ignore everything but error
  const error = source.pipe(
    mergeMap(val => {
      if (val === 4) {
        return throwError(`ERROR AT ${val}`);
      }
      return of(val);
    }),
    ignoreElements()
  );
  // output: "ERROR: ERROR AT 4"
  const subscribe = error.subscribe(
    val => console.log(`NEXT: ${val}`),
    val => console.log(`ERROR: ${val}`),
    () => console.log('SECOND COMPLETE!')
  );
};

const test3 = () => {
};

const test4 = () => {
};

export class IgnoreElements extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>ignoreElements - Ignore everything but complete and error.</h5>
      </div>
    );
  }
}

