import NumberScheme from './schemes/number.scheme';
import StringScheme from './schemes/string.scheme';
import ArrayScheme from './schemes/array.scheme';
import ObjectScheme from './schemes/object.scheme';

class Validator {
  constructor() {
    this.schemes = {
      string: new StringScheme(),
      number: new NumberScheme(),
      array: new ArrayScheme(),
      object: new ObjectScheme(),
    };
  }

  string() {
    return this.schemes.string;
  }

  number() {
    return this.schemes.number;
  }

  array() {
    return this.schemes.array;
  }

  object() {
    return this.schemes.object;
  }

  addValidator(type, name, fn) {
    this.schemes[type].addValidator(name, fn);
  }
}

export default Validator;
