import React from 'react';

// RxJS v6+
import { Subject, ReplaySubject } from 'rxjs';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';

type Props = {
};
type State = {
};

const test1 = () => {
  // simulate url change with subject
  const routeEnd = new Subject<{data: any, url: string}>();
  // grab url and share with subscribers
  const lastUrl = routeEnd.pipe(
    tap(_ => console.log('executed')),
    pluck('url'),
    // defaults to all values so we set it to just keep and replay last one
    shareReplay(1)
  );
  // requires initial subscription
  const initialSubscriber = lastUrl.subscribe(console.log);
  // simulate route change
  // logged: 'executed', 'my-path'
  routeEnd.next({ data: {}, url: 'my-path' });
  // logged: 'my-path'
  const lateSubscriber = lastUrl.subscribe(console.log);
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class ShareReplay extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>shareReplay - Share source and replay specified number of emissions on subscription.</h5>
        <h5>has big details in <a href="https://www.learnrxjs.io/operators/multicasting/sharereplay.html">docs</a></h5>
      </div>
    );
  }
}

