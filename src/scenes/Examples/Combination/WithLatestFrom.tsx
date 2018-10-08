import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  // emit every 5s
  const source = rxjs.interval(5000);
  // emit every 1s
  const secondSource = rxjs.interval(1000);
  const example = source.pipe(
    rxjsOp.withLatestFrom(secondSource),
    rxjsOp.map(([first, second]) => {
      return `First Source (5s): ${first} Second Source (1s): ${second}`;
    })
  );
  /*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit every 5s
  const source = rxjs.interval(5000);
  // emit every 1s
  const secondSource = rxjs.interval(1000);
  // withLatestFrom slower than source
  const example = secondSource.pipe(
    // both sources must emit at least 1 value (5s) before emitting
    rxjsOp.withLatestFrom(source),
    rxjsOp.map(([first, second]) => {
      return `Source (1s): ${first} Latest From (5s): ${second}`;
    })
  );
  /*
    "Source (1s): 4 Latest From (5s): 0"
    "Source (1s): 5 Latest From (5s): 0"
    "Source (1s): 6 Latest From (5s): 0"
    ...
  */
  const subscribe = example.subscribe(val => console.log(val));
};

export class WithLatestFrom extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>withLatestFrom - Also provide the last value from another observable.</h5>
      </div>
    );
  }
}

