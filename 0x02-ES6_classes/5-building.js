export default class Building {
  constructor(sqft) {
    if (
      typeof this.evacuationWarningMessage !== 'function'
      && new.target !== Building
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (!(val instanceof Number)) {
      throw new TypeError(`${val} must be number`);
    }
    this._sqft = val;
  }
}
