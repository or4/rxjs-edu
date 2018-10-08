import React from 'react';

// RxJS v6+
import { timer, combineLatest, fromEvent } from 'rxjs';
import { mapTo, startWith, scan, tap, map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //timerOne emits first value at 1s, then once every 4s
  const timerOne = timer(1000, 4000);
  //timerTwo emits first value at 2s, then once every 4s
  const timerTwo = timer(2000, 4000);
  //timerThree emits first value at 3s, then once every 4s
  const timerThree = timer(3000, 4000);

  //when one timer emits, emit the latest values from each timer as an array
  const combined = combineLatest(timerOne, timerTwo, timerThree);

  const subscribe = combined.subscribe(
    ([timerValOne, timerValTwo, timerValThree]) => {
      /*
      Example:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
      console.log(
        `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
      );
    }
  );
};

const test2 = () => {
  //timerOne emits first value at 1s, then once every 4s
  const timerOne = timer(1000, 4000);
  //timerTwo emits first value at 2s, then once every 4s
  const timerTwo = timer(2000, 4000);
  //timerThree emits first value at 3s, then once every 4s
  const timerThree = timer(3000, 4000);

  //combineLatest also takes an optional projection function
  const combinedProject = combineLatest(
    timerOne,
    timerTwo,
    timerThree,
    (one, two, three) => {
      return `Timer One (Proj) Latest: ${one},
              Timer Two (Proj) Latest: ${two},
              Timer Three (Proj) Latest: ${three}`;
    }
  );
  //log values
  const subscribe = combinedProject.subscribe(latestValuesProject =>
    console.log(latestValuesProject)
  );
};

const test3 = () => {
  // helper function to set HTML
  const setHtml = id => val => {
    document.getElementById(id).innerHTML = val;
  };

  const addOneClick$ = id =>
    fromEvent(document.getElementById(id), 'click')
      .pipe(
        mapTo(1),
        startWith(0),
        scan((acc, curr) => acc + curr), // keep a running total
        tap(setHtml(`${id}Total`))
      );

  const combineTotal$ = combineLatest(addOneClick$('red'), addOneClick$('black'))
    .pipe(map(([val1, val2]) => val1 + val2))
    .subscribe(setHtml('total'));
};

export class CombineLatest extends React.PureComponent<Props, State> {
  componentDidMount() {
    test2();
    test3();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>combineLatest - When any observable emits a value, emit the latest value from each.</h5>
        <div>
          <button id="red">Red</button>
          <button id="black">Black</button>
        </div>
        <div>Red: <span id="redTotal" /> </div>
        <div>Black: <span id="blackTotal" /> </div>
        <div>Total: <span id="total" /> </div>
      </div>
    );
  }
}

