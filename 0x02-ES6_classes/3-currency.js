export default class Curreny {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
