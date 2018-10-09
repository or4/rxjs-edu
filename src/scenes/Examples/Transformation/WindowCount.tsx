import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { windowCount, mergeAll, tap } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit every 1s
  const source = interval(1000);
  const example = source.pipe(
  //start new window every 4 emitted values
    windowCount(4),
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
            "NEW WINDOW!"
            4
            5
            6
            7
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

export class WindowCount extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>windowCount</h5>
      </div>
    );
  }
}

