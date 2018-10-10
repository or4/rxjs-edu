import React from 'react';

// RxJS v6+
import * as R from 'ramda';
import { from } from 'rxjs';
import { map, combineAll } from 'rxjs/operators';


type Props = {
};
type State = {
};

const getUsers = async () => [{ key: 'admin', name: 'admin' }, { key: 'user', name: 'user' }];
const getIssues = async (key) => [1001, 1002, 1003, 1004];

const test1 = async () => {
  const users = await getUsers();

  try {
    from(users).pipe(
      map(async user => ({
        key: user.key,
        name: user.name,
        issues: await getIssues(user.key),
        projects: [],
      })),
      combineAll(),
    ).subscribe((val) => {
      console.log('subscribe, val', val);
    });
  } catch (e) {
    console.log(e);
  }
};

const test2 = () => {

};

const test3 = () => {
};

const test4 = () => {
};

export class Promises extends React.PureComponent<Props, State> {
  componentDidMount() {
    test1();
    // test2();
    // test3();
    // test4();
  }
  render() {
    return (
      <div className={'page divs-with-margin-bottom'}>
        <h5>nested promises</h5>
      </div>
    );
  }
}

