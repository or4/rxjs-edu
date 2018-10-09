import React from 'react';

// RxJS v6+
import { interval, zip, fromEvent, merge, from } from 'rxjs';
import { sample, mapTo } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value every 1s
  const source = interval(1000);
  //sample last emitted value from source every 2s
  const example = source.pipe(sample(interval(2000)));
  //output: 2..4..6..8..
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  const source = zip(
    //emit 'Joe', 'Frank' and 'Bob' in sequence
    from(['Joe', 'Frank', 'Bob']),
    //emit value every 2s
    interval(2000)
  );
  //sample last emitted value from source every 2.5s
  const example = source.pipe(sample(interval(2500)));
  //output: ["Joe", 0]...["Frank", 1]...........
  const subscribe = example.subscribe(val => console.log(val));

};

const test3 = () => {

  const listener = merge(
    fromEvent(document, 'mousedown').pipe(mapTo(false)),
    fromEvent(document, 'mousemove').pipe(mapTo(true))
  )
    .pipe(sample(fromEvent(document, 'mouseup')))
    .subscribe(isDragging => {
      console.log('Were you dragging?', isDragging);
    });

};

const test4 = () => {
};

export class Sample extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>sample</h5>
      </div>
    );
  }
}

