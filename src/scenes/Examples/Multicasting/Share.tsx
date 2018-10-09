import React from 'react';

// RxJS v6+
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit value in 1s
  const source = timer(1000);
  //log side effect, emit result
  const example = source.pipe(
    tap(() => console.log('***SIDE EFFECT***')),
    mapTo('***RESULT***')
  );

  /*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
*/
  const subscribe = example.subscribe(val => console.log(val));
  const subscribeTwo = example.subscribe(val => console.log(val));

  //share observable among subscribers
  const sharedExample = example.pipe(share());
  /*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/
  const subscribeThree = sharedExample.subscribe(val => console.log(val));
  const subscribeFour = sharedExample.subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Share extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>share</h5>
      </div>
    );
  }
}

