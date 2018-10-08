import React from 'react';

// RxJS v6+
import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

type Props = {
};
type State = {
};

export class CombineAll extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    // emit every 0.1s, take 3 times
    const firstSource = interval(100).pipe(take(3));
    firstSource.subscribe(firstSrcValue => console.log(firstSrcValue)); // log 1,2,3

    // map each emitted value from firstSource to interval observable that takes 5 values
    const secondSource = firstSource.pipe(
      map(firstSrcValue => interval(1000).pipe(map(secondSrcValue => `Result (${firstSrcValue}): ${secondSrcValue}`), take(5)))
    );


    /*
      2 values from firstSource will map to 2 (inner) interval observables that emit every 1s
      combineAll uses combineLatest strategy, emitting the last value from each
      whenever either observable emits a value
    */
    const combined = secondSource.pipe(combineAll());
    /*
      output:
      ["Result (0): 0", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 4"]
    */
    const subscribe = combined.subscribe(val => console.log(val));

    // secondSource.subscribe(console.log);

  }
  render() {
    return (
      <div className={'page'}>
        <h5>combineAll - When source observable completes use combineLatest with collected observables.</h5>
      </div>
    );
  }
}

