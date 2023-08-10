import {BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class CalculateService {
  /**
   * (nummerOne + numberTwo) - numberOne
   * @param numberOne
   * @param numberTwo
   * @returns
   */
  sumAndMinus(numberOne: number, numberTwo: number) {
    const result = this.sum(numberOne, numberTwo);

    return result - numberOne;
  }

  sum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  twoRetrun() {
    return {
      msg: 'ok',
    };
  }
}
