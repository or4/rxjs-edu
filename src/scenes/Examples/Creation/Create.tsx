import React from 'react';

// RxJS v6+
import * as rxjsOp from 'rxjs/operators';
import * as rxjs from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  /*
    Create an observable that emits 'Hello' and 'World' on
    subscription.
  */
  const hello = rxjs.Observable.create(function(observer) {
    observer.next('Hello');
    observer.next('World');
  });

  // output: 'Hello'...'World'
  const subscribe = hello.subscribe(val => console.log(val));
};

const test2 = () => {
  /*
    Increment value every 1s, emit even numbers.
  */
  const evenNumbers = rxjs.Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
      if (value % 2 === 0) {
        observer.next(value);
      }
      value++;
    }, 1000);

    return () => clearInterval(interval);
  });
  // output: 0...2...4...6...8
  const subscribe = evenNumbers.subscribe(val => console.log(val));
  // unsubscribe after 10 seconds
  setTimeout(() => {
    subscribe.unsubscribe();
  }, 10000);
};

const test3 = () => {
};

const test4 = () => {
};

export class Create extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>create - Create an observable with given subscription function.</h5>
      </div>
    );
  }
}

