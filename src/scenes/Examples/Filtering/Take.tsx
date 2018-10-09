import React from 'react';

// RxJS v6+
import { of, interval, fromEvent } from 'rxjs';
import { take, tap } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit 1,2,3,4,5
  const source = of(1, 2, 3, 4, 5);
  //take the first emitted value then complete
  const example = source.pipe(take(1));
  //output: 1
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  //emit value every 1s
  const interval$ = interval(1000);
  //take the first 5 emitted values
  const example = interval$.pipe(take(5));
  //output: 0,1,2,3,4
  const subscribe = example.subscribe(val => console.log(val));

};

const test3 = () => {
  const oneClickEvent = fromEvent(document, 'click').pipe(
    take(1),
    tap(v => {
      document.getElementById(
        'locationDisplay'
      ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
    })
  );

  const subscribe = oneClickEvent.subscribe();

};

const test4 = () => {
};

export class Take extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>take</h5>
        <div id="locationDisplay">
  Where would you click first?
        </div>
      </div>
    );
  }
}

