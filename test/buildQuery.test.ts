import { buildQuery } from '../src';

describe('buildQuery(...)', () => {
  it('An object should return a standard query string', () => {
    const petfinderData = {
      key: '12345',
      shelterID: 'abc00',
      count: '20',
      animals: ['dogs', 'cats'],
    };
    const expected =
      'key=12345&shelterID=abc00&count=20&animals=dogs&animals=cats';
    expect(buildQuery(petfinderData)).toEqual(expected);
  });
});
