import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  const sourceOne = rxjs.of('Hello');
  const sourceTwo = rxjs.of('World!');
  const sourceThree = rxjs.of('Goodbye');
  const sourceFour = rxjs.of('World!');
  // wait until all observables have emitted a value then emit all as an array
  const example = rxjs.zip(
    sourceOne,
    sourceTwo.pipe(rxjsOp.delay(1000)),
    sourceThree.pipe(rxjsOp.delay(2000)),
    sourceFour.pipe(rxjsOp.delay(3000))
  );
  // output: ["Hello", "World!", "Goodbye", "World!"]
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  // emit every 1s
  const source = rxjs.interval(1000);
  // when one observable completes no more values will be emitted
  const example = rxjs.zip(source, source.pipe(rxjsOp.take(2)));
  // output: [0,0]...[1,1]
  const subscribe = example.subscribe(val => console.log(val));
};



export class Zip extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>zip - After all observables emit, emit values as an array</h5>
      </div>
    );
  }
}

