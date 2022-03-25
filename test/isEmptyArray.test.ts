import { isEmptyArray } from '../src';

const ERROR_MESSAGE = 'isEmptyArray: An array must be provided as an argument';

describe('isEmptyArray(...)', () => {
  it('[] should be true', () => {
    expect(isEmptyArray([])).toBe(true);
  });
  it('[1,2,3] should be false', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
  });
  it('null should throw an error', () => {
    expect(() => isEmptyArray(null)).toThrow(ERROR_MESSAGE);
  });
  it('undefined should throw an error', () => {
    expect(() => isEmptyArray(undefined)).toThrow(ERROR_MESSAGE);
  });
  it('an object should throw an error', () => {
    expect(() => isEmptyArray({ prop: 'value' })).toThrow(ERROR_MESSAGE);
  });
  it('a number should throw an error', () => {
    expect(() => isEmptyArray(7)).toThrow(ERROR_MESSAGE);
  });
  it('a string should throw an error', () => {
    expect(() => isEmptyArray('a string')).toThrow(ERROR_MESSAGE);
  });
  it('NaN string should throw an error', () => {
    expect(() => isEmptyArray(NaN)).toThrow(ERROR_MESSAGE);
  });
  it('a Set string should throw an error', () => {
    expect(() => isEmptyArray(new Set())).toThrow(ERROR_MESSAGE);
  });
  it('a Map string should throw an error', () => {
    expect(() => isEmptyArray(new Map())).toThrow(ERROR_MESSAGE);
  });
});
