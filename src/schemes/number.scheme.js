import numberValidator from '../validators/number.validator';
import positiveValidator from '../validators/positive.validator';
import rangeValidator from '../validators/range.validator';
import requiredValidator from '../validators/required.validator';

export default class NumberScheme {
  validators = {};

  required() {
    this.validators.required = requiredValidator;
    return this;
  }

  positive() {
    this.validators.positive = positiveValidator;
    return this;
  }

  range(min, max) {
    this.validators.range = rangeValidator(min, max);
    return this;
  }

  isValid(value) {
    const {
      validators: { required, positive, range },
    } = this;

    const isNumber = numberValidator(value);
    const isRequired = required ? required(value) : true;
    const isPositive = positive ? positive(value) : true;
    const isInRange = range ? range(value) : true;

    return isNumber && isPositive && isInRange && isRequired;
  }
}
