import React from 'react';

// RxJS v6+
import { timer } from 'rxjs';
import { windowTime, tap, mergeAll } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit immediately then every 1s
  const source = timer(0, 1000);
  const example = source.pipe(
  //start new window every 3s
    windowTime(3000),
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
            "NEW WINDOW!"
            3
            4
            5
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

export class WindowTime extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>windowTime</h5>
      </div>
    );
  }
}

