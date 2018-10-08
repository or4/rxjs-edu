import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const joinWithSpace = R.unapply(
  R.pipe(
    R.reject(R.isNil),
    R.join(' ')
  )
);

/**
 * Returns true if all values satisfy the predicate
 *
 * (string -> boolean) -> Object -> boolean
 */
export const allValuesSatisfy = (predicate: (value: any) => boolean) =>
  R.pipe<object, any[], boolean>(
    R.values,
    R.all(predicate),
  );


/**
 * Call function if it exists
 */
export const callWhenIsNotNil = function(path: string[]) {
  return R.pipe(
    R.path(path),
    R.when(RA.isNotNil, R.nthArg(0)())
  );
};

/**
 * Call function if it exists
 */
export const assocWhenArgIsNotNil = function (propName: string, propValue: any, object: any) {
  if (R.isNil(propValue)) {
    return object;
  }

  return R.assoc(propName, propValue, object);
};
