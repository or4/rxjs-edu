import React from 'react';

// RxJS v6+
import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  //emit value every 1 second
  const source = interval(1000);
  const example = source.pipe(
  //side effects will be executed once
    tap(_ => console.log('Do Something!')),
    //do nothing until connect() is called
    publish()
  );

  /*
  source will not emit values until connect() is called
  output: (after 5s)
  "Do Something!"
  "Subscriber One: 0"
  "Subscriber Two: 0"
  "Do Something!"
  "Subscriber One: 1"
  "Subscriber Two: 1"
*/
  const subscribe = example.subscribe(val =>
    console.log(`Subscriber One: ${val}`)
  );
  const subscribeTwo = example.subscribe(val =>
    console.log(`Subscriber Two: ${val}`)
  );

  //call connect after 5 seconds, causing source to begin emitting items
  setTimeout(() => {
    example.connect();
  }, 5000);
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Publish extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>publish</h5>
      </div>
    );
  }
}

