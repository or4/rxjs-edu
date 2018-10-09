import React from 'react';

// RxJS v6+
import { Subject, interval, ReplaySubject } from 'rxjs';
import { take, tap, multicast, mapTo } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit every 2 seconds, take 5
  const source = interval(2000).pipe(take(5));

  const example = source.pipe(
  //since we are multicasting below, side effects will be executed once
    tap(() => console.log('Side Effect #1')),
    mapTo('Result!')
  );

  //subscribe subject to source upon connect()
  const multi = example.pipe(multicast(() => new Subject()));
  /*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/
  const subscriberOne = multi.subscribe(val => console.log(val));
  const subscriberTwo = multi.subscribe(val => console.log(val));
  //subscribe subject to source
  (multi as any).connect();
};

const test2 = () => {
  //emit every 2 seconds, take 5
  const source = interval(2000).pipe(take(5));

  //example with ReplaySubject
  const example = source.pipe(
  //since we are multicasting below, side effects will be executed once
    tap(_ => console.log('Side Effect #2')),
    mapTo('Result Two!')
  );
  //can use any type of subject
  const multi = example.pipe(multicast(() => new ReplaySubject(5)));
  //subscribe subject to source
  (multi as any).connect();

  setTimeout(() => {
  /*
   subscriber will receieve all previous values on subscription because
   of ReplaySubject
   */
    const subscriber = multi.subscribe(val => console.group(val));
  }, 5000);
};

const test3 = () => {
};

const test4 = () => {
};

export class Multicast extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>multicast</h5>
      </div>
    );
  }
}

