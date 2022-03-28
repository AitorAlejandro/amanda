import { isBoolean } from '../src';

describe('isBoolean(...)', () => {
  it('false should be true', () => {
    expect(isBoolean(false)).toBe(true);
  });
  it('true should be false', () => {
    expect(isBoolean(true)).toBe(true);
  });
  it('null should be true', () => {
    expect(isBoolean(null)).toBe(false);
  });
  it('undefined should be false', () => {
    expect(isBoolean(undefined)).toBe(false);
  });
  it('0 should be false', () => {
    expect(isBoolean(0)).toBe(false);
  });
  it('123 should be false', () => {
    expect(isBoolean(123)).toBe(false);
  });
  it('"" should be false', () => {
    expect(isBoolean('')).toBe(false);
  });
  it('"a string" should be false', () => {
    expect(isBoolean('a string')).toBe(false);
  });
  it('{} should be false', () => {
    expect(isBoolean({})).toBe(false);
  });
  it('[] should be false', () => {
    expect(isBoolean([])).toBe(false);
  });
  it('Function should be false', () => {
    expect(isBoolean(() => {})).toBe(false);
  });
});
