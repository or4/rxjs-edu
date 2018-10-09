import React from 'react';

// RxJS v6+
import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';



type Props = {
};
type State = {
};

const test1 = () => {
  //emit next and error notifications
  const source = from([
    Notification.createNext('SUCCESS!'),
    Notification.createError('ERROR!')
  ]).pipe(
  //turn notification objects into notification values
    dematerialize()
  );

  //output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
  const subscription = source.subscribe({
    next: val => console.log(`NEXT VALUE: ${val}`),
    error: val => console.log(`ERROR VALUE: ${val}`)
  });
};

const test2 = () => {
};

const test3 = () => {
};

const test4 = () => {
};

export class Dematerialize extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>dematerialize</h5>
      </div>
    );
  }
}

