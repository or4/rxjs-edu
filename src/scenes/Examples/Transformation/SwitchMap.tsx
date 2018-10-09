import React from 'react';

// RxJS v6+
import { timer, interval, fromEvent,  merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit immediately, then every 5s
  const source = timer(0, 5000);
  //switch to new inner observable when source emits, emit items that are emitted
  const example = source.pipe(switchMap(() => interval(500)));
  //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
  const subscribe = example.subscribe(val => console.log(val));

};

const test2 = () => {
  //emit every click
  const source = fromEvent(document, 'click');
  //if another click comes within 3s, message will not be emitted
  const example = source.pipe(
    switchMap(val => interval(3000).pipe(mapTo('Hello, I made it!')))
  );
  //(click)...3s...'Hello I made it!'...(click)...2s(click)...
  const subscribe = example.subscribe(val => console.log(val));
};

const test3 = () => {
  //emit immediately, then every 5s
  const source = timer(0, 5000);
  //switch to new inner observable when source emits, invoke project function and emit values
  const example = source.pipe(
    switchMap(
      _ => interval(2000),
      (outerValue, innerValue, outerIndex, innerIndex) => ({
        outerValue,
        innerValue,
        outerIndex,
        innerIndex
      })
    )
  );
  /*
    Output:
    {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
    {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
    {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
    {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
*/
  const subscribe = example.subscribe(val => console.log(val));
};

const test4 = () => {
  const countdownSeconds = 10;
  const setHTML = id => val => (document.getElementById(id).innerHTML = val);
  const pauseButton = document.getElementById('pause');
  const resumeButton = document.getElementById('resume');
  const interval$ = interval(1000).pipe(mapTo(-1));

  const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
  const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

  const timer$ = merge(pause$, resume$)
    .pipe(
      startWith(true),
      switchMap(val => (val ? interval$ : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
      takeWhile(v => v >= 0)
    )
    .subscribe(setHTML('remaining'));
};

export class SwitchMap extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>switchMap</h5>
        <h4>
          Time remaining: <span id="remaining"></span>
        </h4>
        <button id="pause">
          Pause Timer
        </button>
        <button id="resume">
          Resume Timer
        </button>
      </div>
    );
  }
}

