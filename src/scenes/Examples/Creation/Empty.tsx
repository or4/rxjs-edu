import React from 'react';

// RxJS v6+
import { interval, fromEvent, merge, empty, timer } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // output: 'Complete!'
  const subscribe = empty().subscribe({
    next: () => console.log('Next'),
    complete: () => console.log('Complete!')
  });
  timer(1000).subscribe({
    next: () => console.log('Next Timer'),
    complete: () => console.log('Complete Timer!')
  });
  timer(1000, 1000).subscribe({
    next: () => console.log('Next Timer 2'),
    complete: () => console.log('Complete Timer 2!')
  });
};

const test2 = () => {
  const countdownSeconds = 10;
  const setHTML = id => val => {
    document.getElementById(id).innerHTML = val;
  };
  const pauseButton = document.getElementById('pause');
  const resumeButton = document.getElementById('resume');
  const interval$ = interval(1000).pipe(mapTo(-1));

  const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
  const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

  const timer$ = merge(pause$, resume$)
    .pipe(
      startWith(true),
      // if timer is paused return empty observable
      switchMap(val => (val ? interval$ : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
      takeWhile(v => v >= 0)
    )
    .subscribe(setHTML('remaining'));
};

export class Empty extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>empty - Observable that immediately completes.</h5>
        <div>
          <h5>Time remaining: <span id="remaining" /></h5>
          <button id="pause">
            Pause Timer
          </button>
          <button id="resume">
            Resume Timer
          </button>
        </div>
      </div>
    );
  }
}

