import React from 'react';

// RxJS v6+
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  // create observable that emits click events
  const source = fromEvent(document, 'click');
  // map to string with given event timestamp
  const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
  // output (example): 'Event time: 7276.390000000001'
  const subscribe = example.subscribe(val => console.log(val));
};

const test2 = () => {
  const source = fromEvent(document, 'mousemove');
  const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
  const subscribe = example.subscribe(val => console.log(val));
};


export class FromEvent extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    test2();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>fromEvent - Turn event into observable sequence.</h5>
      </div>
    );
  }
}

