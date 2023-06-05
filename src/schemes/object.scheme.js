export default class ObjectScheme {
  validators = {};

  shape(options = {}) {
    this.validators = options;
    return this;
  }

  isValid(object = {}) {
    if (!object) {
      return true;
    }

    return Object.keys(object).every((key) => this.validators[key].isValid(object[key]));
  }
}
