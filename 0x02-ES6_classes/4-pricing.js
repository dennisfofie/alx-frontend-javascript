/* eslint-disable no-this-before-super */
/* eslint-disable constructor-super */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = Currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this.amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Amount must be number');
    }
    this._amount = val;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('Currency must be currency');
    }
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
