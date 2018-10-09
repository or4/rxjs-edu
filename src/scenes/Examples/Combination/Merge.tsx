import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit every 2.5 seconds
  const first = rxjs.interval(2500);
  // emit every 2 seconds
  const second = rxjs.interval(2000);
  // emit every 1.5 seconds
  const third = rxjs.interval(1500);
  // emit every 1 second
  const fourth = rxjs.interval(1000);

  // emit outputs from one observable
  const example = rxjs.merge(
    first.pipe(rxjsOp.mapTo('FIRST!')),
    second.pipe(rxjsOp.mapTo('SECOND!')),
    third.pipe(rxjsOp.mapTo('THIRD')),
    fourth.pipe(rxjsOp.mapTo('FOURTH'))
  );
  // output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit every 5 seconds
  const first = rxjs.interval(3000).pipe(rxjsOp.mapTo('first'));
  // emit every 1 second
  const second = rxjs.interval(1000).pipe(rxjsOp.mapTo('second'));
  // used as instance method
  const example = first.pipe(rxjsOp.merge(second));
  // output: 0,1,0,2....
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {

};

export class Merge extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>merge - Turn multiple observables into a single observable.</h5>
      </div>
    );
  }
}

