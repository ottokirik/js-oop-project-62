import requiredValidator from '../validators/required.validator';

export default class CoreScheme {
  constructor() {
    this.validators = {};
    this.customValidators = {};
  }

  addValidator(name, fn) {
    this.validators[name] = (condition) => (value) => fn(value, condition);
  }

  test(name, condition) {
    this.customValidators[name] = this.validators[name](condition);
    return this;
  }

  required() {
    this.validators.required = requiredValidator;
    return this;
  }

  isValid(value) {
    const { customValidators } = this;

    const customValidatorsKeys = Object.keys(customValidators);

    const isCustomValidate =
      customValidatorsKeys.length === 0 ? true : customValidatorsKeys.every((key) => customValidators[key](value));

    return isCustomValidate;
  }
}
