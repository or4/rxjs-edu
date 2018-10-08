import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  // take the first observable to emit
  const example = rxjs.race(
  // emit every 1.5s
    rxjs.interval(1500),
    // emit every 1s
    rxjs.interval(1000).pipe(rxjsOp.mapTo('1s won!' as any)),
    // emit every 2s
    rxjs.interval(2000),
    // emit every 2.5s
    rxjs.interval(2500)
  );
  // output: "1s won!"..."1s won!"...etc
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // Throws an error and ignores the other observables.
  const first = rxjs.of('first').pipe(
    rxjsOp.delay(100),
    rxjsOp.map(_ => {
      throw Error('error');
    })
  );
  const second = rxjs.of('second').pipe(rxjsOp.delay(200));
  const third = rxjs.of('third').pipe(rxjsOp.delay(300));
  // nothing logged
  rxjs.race(first, second, third).subscribe(val => console.log(val));
};
const test3 = () => {
  // Throws an error and ignores the other observables.
  // Process error
  const first = rxjs.of('first').pipe(
    rxjsOp.delay(100),
    rxjsOp.map(_ => {
      throw Error('error');
    })
  );
  const second = rxjs.of('second').pipe(rxjsOp.delay(200));
  const third = rxjs.of('third').pipe(rxjsOp.delay(300));
  const four = rxjs.throwError('This will error').pipe(rxjsOp.catchError(error => rxjs.of(error)));

  // nothing logged
  rxjs.race(first, second, third, four).subscribe(val => console.log(val));
};

export class Race extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test3();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>race - The observable to emit first is used.</h5>
      </div>
    );
  }
}

