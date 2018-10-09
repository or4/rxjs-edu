import React from 'react';

// RxJS v6+
import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit one item
  const example = of(null);
  //delay output of each by an extra second
  const message = merge(
    example.pipe(mapTo('Hello')),
    example.pipe(
      mapTo('World!'),
      delay(1000)
    ),
    example.pipe(
      mapTo('Goodbye'),
      delay(2000)
    ),
    example.pipe(
      mapTo('World!'),
      delay(3000)
    )
  );
  //output: 'Hello'...'World!'...'Goodbye'...'World!'
  const subscribe = message.subscribe(val => console.log(val));
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Delay extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>delay</h5>
      </div>
    );
  }
}

