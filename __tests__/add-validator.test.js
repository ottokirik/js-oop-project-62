import { describe, expect } from '@jest/globals';
import Validator from '../src/validator';

describe('Add validators', () => {
  test('Add string validator', () => {
    const validator = new Validator();
    const fn = (value = '', start = '') => value.startsWith(start);

    validator.addValidator('string', 'startsWith', fn);
    const scheme = validator.string().test('startsWith', 'H');

    expect(scheme.isValid('exlet')).toBe(false);
    expect(scheme.isValid('Hexlet')).toBe(true);
  });

  test('Add number validator', () => {
    const validator = new Validator();
    const fn = (value, min) => value >= min;

    validator.addValidator('number', 'min', fn);
    const scheme = validator.number().test('min', 5);

    expect(scheme.isValid(4)).toBe(false);
    expect(scheme.isValid(5)).toBe(true);
  });
});
