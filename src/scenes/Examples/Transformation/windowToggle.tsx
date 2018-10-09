import React from 'react';

// RxJS v6+
import { timer, interval } from 'rxjs';
import { tap, windowToggle, mergeAll } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit immediately then every 1s
  const source = timer(0, 1000);
  //toggle window on every 5
  const toggle = interval(5000);
  const example = source.pipe(
  //turn window on every 5s
    windowToggle(toggle, val => interval(val * 1000)),
    tap(_ => console.log('NEW WINDOW!'))
  );

  const subscribeTwo = example
    .pipe(
    //window emits nested observable
      mergeAll()
    /*
            output:
            "NEW WINDOW!"
            5
            "NEW WINDOW!"
            10
            11
            "NEW WINDOW!"
            15
            16
            "NEW WINDOW!"
            20
            21
            22
          */
    )
    .subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class WindowToggle extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>windowToggle</h5>
      </div>
    );
  }
}

