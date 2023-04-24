import containsValidator from '../validators/contains.validator';
import minLengthValidator from '../validators/min-length.validator';
import requiredValidator from '../validators/required.validator';
import stringValidator from '../validators/string.validator';

export default class StringScheme {
  validators = {};

  required() {
    this.validators.required = requiredValidator;
    return this;
  }

  contains(checked) {
    this.validators.contains = containsValidator(checked);
    return this;
  }

  minLength(minLength) {
    this.validators.minLength = minLengthValidator(minLength);
    return this;
  }

  isValid(value) {
    const {
      validators: { required, contains, minLength },
    } = this;

    const isRequired = required ? required(value) : true;
    const isContains = contains ? contains(value) : true;
    const isString = stringValidator(value);
    const isMinLength = minLength ? minLength(value) : true;

    return isString && isContains && isMinLength && isRequired;
  }
}
