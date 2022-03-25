import { decapitalize } from '../src';

describe('decapitalize(...)', () => {
  it('"Sleepover" should return "sleepover"', () => {
    expect(decapitalize('Sleepover')).toBe('sleepover');
  });
  it('"Hi Amanda" should return "hi Amanda"', () => {
    expect(decapitalize('Hi Amanda')).toBe('hi Amanda');
  });
  it('"" should return ""', () => {
    expect(decapitalize('')).toBe('');
  });
});
