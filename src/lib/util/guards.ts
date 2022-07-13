/**
 * A set of modular typeguards that can be combined into operations (i.e.
 * `Array.filter(filterFn)`)
 */

export const isNotNullOrUndefined = <T>(
  value: T | null | undefined,
): value is T => {
  return value != null;
};

export const isNullOrUndefined = <T>(
  value: T | null | undefined,
): value is null | undefined => {
  return value == null;
};

type Falsy = false | '' | 0 | null | undefined;

export const isFalsy = <T extends string | number | boolean | null | undefined>(
  value: T | Falsy,
): value is Falsy => {
  if (typeof value === 'string') {
    return value === '' || isNullOrUndefined(value);
  }
  if (typeof value === 'number') {
    return value === 0 || isNullOrUndefined(value);
  }

  if (typeof value === 'boolean') {
    return value === false || isNullOrUndefined(value);
  }

  return isNullOrUndefined(value);
};
