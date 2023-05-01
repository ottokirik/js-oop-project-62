import { describe } from '@jest/globals';
import Validator from '../src/validator';

describe('Object validators', () => {
  test('Object string', () => {
    const validator = new Validator();
    const scheme = validator.object();
    scheme.shape({
      name: validator.string().minLength(3),
    });

    expect(scheme.isValid({ name: 'test' })).toBe(true);
    expect(scheme.isValid({ name: 'yo' })).toBe(false);
  });

  test('Complex object', () => {
    const validator = new Validator();
    const scheme = validator.object();

    scheme.shape({
      name: validator.string().required(),
      age: validator.number().positive(),
    });

    expect(scheme.isValid({ name: 'kolya', age: 100 })).toBe(true);
    expect(scheme.isValid({ name: 'maya', age: null })).toBe(true);
    expect(scheme.isValid({ name: '', age: null })).toBe(false);
    expect(scheme.isValid({ name: 'ada', age: -5 })).toBe(false);
  });
});
