import React from 'react';

// RxJS v6+
import { from, merge, of } from 'rxjs';
import { map, partition, catchError } from 'rxjs/operators';

type Props = {
};
type State = {
};

// const test1 = () => {
//   const source = from([1, 2, 3, 4, 5, 6]);
//   // first value is true, second false
//   const predicate: any = val => val % 2 === 0;
//   const [evens, odds] = source.pipe(partition(predicate));
//   /*
//     Output:
//     "Even: 2"
//     "Even: 4"
//     "Even: 6"
//     "Odd: 1"
//     "Odd: 3"
//     "Odd: 5"
//   */
//   const subscribe = merge(
//     evens.pipe(map(val => `Even: ${val}`)),
//     odds.pipe(map(val => `Odd: ${val}`))
//   ).subscribe(val => console.log(val));
// };

// const test2 = () => {
//   const source = from([1, 2, 3, 4, 5, 6]);
//   // if greater than 3 throw
//   const example = source.pipe(
//     map(val => {
//       if (val > 3) {
//         throw Error(`${val} greater than 3!`);
//       }
//       return { success: val };
//     }),
//     catchError(val => of({ error: val }))
//   );
//   // split on success or error
//   const [success, error] = example.pipe(partition(res => res.success));
//   /*
//     Output:
//     "Success! 1"
//     "Success! 2"
//     "Success! 3"
//     "Error! 4 greater than 3!"
//   */
//   const subscribe = merge(
//     success.pipe(map(val => `Success! ${val.success}`)),
//     error.pipe(map(val => `Error! ${val.error}`))
//   ).subscribe(val => console.log(val));
// };

const test3 = () => {
};

const test4 = () => {
};

export class Partition extends React.PureComponent<Props, State> {
  componentDidMount() {
    // test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>partition</h5>
      </div>
    );
  }
}

