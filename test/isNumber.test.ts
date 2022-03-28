import { isNumber } from '../src';

describe('isNumber(...)', () => {
  it('0 should be true', () => {
    expect(isNumber(0)).toBe(true);
  });
  it('123 should be true', () => {
    expect(isNumber(123)).toBe(true);
  });
  it('123.456 should be true', () => {
    expect(isNumber(123.456)).toBe(true);
  });
  it('Infinity should be true', () => {
    expect(isNumber(Infinity)).toBe(false);
  });
  it('NaN should be false', () => {
    expect(isNumber(NaN)).toBe(false);
  });
  it('null should be true', () => {
    expect(isNumber(null)).toBe(false);
  });
  it('undefined should be false', () => {
    expect(isNumber(undefined)).toBe(false);
  });
  it('"123" should be false', () => {
    expect(isNumber('123')).toBe(false);
  });
  it('{} should be false', () => {
    expect(isNumber({})).toBe(false);
  });
  it('[] should be false', () => {
    expect(isNumber([])).toBe(false);
  });
  it('Function should be false', () => {
    expect(isNumber(() => {})).toBe(false);
  });
});
