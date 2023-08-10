import {/* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class LoyaltyService {
  pointRate = 100;
  constructor(/* Add @inject to inject parameters */) {}

  calculatePointByPrice(price: number): number {
    return Math.floor(price / 100);
  }

  calculatePointRateByPrice(price: number): number {
    const pr = this.pointRateConfig();

    return Math.floor(price / pr);
  }

  pointRateConfig() {
    return this.pointRate;
  }
}
