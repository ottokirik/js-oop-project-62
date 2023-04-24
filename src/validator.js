import StringScheme from './schemes/string-scheme';

class Validator {
  schemes = {};

  string() {
    this.schemes.string = new StringScheme();
    return this.schemes.string;
  }
}

export default Validator;
