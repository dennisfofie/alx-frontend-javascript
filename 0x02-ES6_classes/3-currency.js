export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = val;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Code must be string');
    }
    this._code = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
