import React from 'react';

// RxJS v6+
import { timer, interval } from 'rxjs';
import { window, scan, mergeAll } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit immediately then every 1s
  const source = timer(0, 1000);
  const example = source.pipe(window(interval(3000)));
  const count = example.pipe(scan((acc, curr) => acc + 1, 0));
  /*
  "Window 1:"
  0
  1
  2
  "Window 2:"
  3
  4
  5
  ...
*/
  const subscribe = count.subscribe(val => console.log(`Window ${val}:`));
  const subscribeTwo = example
    .pipe(mergeAll())
    .subscribe(val => console.log(val));

};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Window extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>window</h5>
      </div>
    );
  }
}

