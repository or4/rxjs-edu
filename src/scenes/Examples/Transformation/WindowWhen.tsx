import React from 'react';

// RxJS v6+
import { interval, timer } from 'rxjs';
import { windowWhen, tap, mergeAll } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit immediately then every 1s
  const source = timer(0, 1000);
  const example = source.pipe(
    //close window every 5s and emit observable of collected values from source
    windowWhen(() => interval(5000)),
    tap(_ => console.log('NEW WINDOW!'))
  );

  const subscribeTwo = example
    .pipe(
      //window emits nested observable
      mergeAll()
      /*
        output:
        "NEW WINDOW!"
        0
        1
        2
        3
        4
        "NEW WINDOW!"
        5
        6
        7
        8
        9
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

export class WindowWhen extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>windowWhen</h5>
      </div>
    );
  }
}

