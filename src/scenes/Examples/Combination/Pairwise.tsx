import React from 'react';

// RxJS v6+
import { pairwise, take } from 'rxjs/operators';
import { interval } from 'rxjs';


type Props = {
};
type State = {
};

const test1 = () => {
  //Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
  interval(1000)
    .pipe(
      pairwise(),
      take(5)
    )
    .subscribe(console.log);
};

export class Pairwise extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>pairwise - Emit the previous and current values as an array.</h5>
      </div>
    );
  }
}

