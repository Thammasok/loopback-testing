import {BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class BmiService {
  constructor() {}

  calculate() {}
}
