import React from 'react';

// RxJS v6+
import { timer, interval, Observable, throwError, } from 'rxjs';
import { map, tap, retryWhen, delayWhen, mergeMap, finalize  } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  // emit value every 1s
  const source = interval(100);
  const example = source.pipe(
    map(val => {
      if (val > 5) {
        // error will be picked up by retryWhen
        throw val;
      }
      return val;
    }),
    retryWhen(errors =>
      errors.pipe(
        // log error message
        tap(val => console.log(`Value ${val} was too high!`)),
        // restart in 5 seconds
        delayWhen(val => timer(val * 100))
      )
    )
  );
  /*
    output:
    0
    1
    2
    3
    4
    5
    "Value 6 was too high!"
    --Wait 5 seconds then repeat
  */
  const subscribe = example.subscribe(val => console.log(val));
};
const genericRetryStrategy = ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = []
}: {
maxRetryAttempts?: number,
scalingDuration?: number,
excludedStatusCodes?: number[]
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error);
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${retryAttempt *
          scalingDuration}ms`
      );
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration);
    }),
    finalize(() => console.log('We are done!'))
  );
};

// import { Component, OnInit } from '@angular/core';
// import { catchError, retryWhen  } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { genericRetryStrategy } from './rxjs-utils';
// import { AppService } from './app.service';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent implements OnInit  {
//   constructor(private _appService: AppService) {}

//   ngOnInit() {
//     this._appService
//       .getData(500)
//       .pipe(
//         retryWhen(genericRetryStrategy()),
//         catchError(error => of(error))
//       )
//       .subscribe(console.log);

//     // excluding status code, delay for logging clarity
//     setTimeout(() => {
//     this._appService
//       .getData(500)
//       .pipe(
//         retryWhen(genericRetryStrategy({
//           scalingDuration: 2000,
//           excludedStatusCodes: [500]
//         })),
//         catchError(error => of(error))
//       )
//       .subscribe(e => console.log('Exluded code:', e.status));

//     }, 8000);
//   }
// }
const test2 = () => {

};

const test3 = () => {
};

const test4 = () => {
};

export class RetryWhen extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>retryWhen</h5>
      </div>
    );
  }
}

