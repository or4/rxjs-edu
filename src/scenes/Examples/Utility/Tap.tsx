import React from 'react';

// RxJS v6+
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


type Props = {
};
type State = {
};

const test1 = () => {
  const source = of(1, 2, 3, 4, 5);
  //transparently log values from source with 'do'
  const example = source.pipe(
    tap(val => console.log(`BEFORE MAP: ${val}`)),
    map(val => val + 10),
    tap(val => console.log(`AFTER MAP: ${val}`))
  );

  //'do' does not transform values
  //output: 11...12...13...14...15
  const subscribe = example.subscribe(val => console.log(val));
};

export class Tap extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>tap</h5>
      </div>
    );
  }
}

