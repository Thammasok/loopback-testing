import {/* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class CargoService {
  constructor(/* Add @inject to inject parameters */) {}

  /**
   * function ตรวจสอบน้ำหนักบรรทุกของรถ [carWeight]
   * โดยผู้ใช้สามารถใส่ข้อมูลน้ำหนักรถได้ ไม่เกินค่า max ของ น้ำหนักบรรทุก
   * @param payloadCar
   * @param carWeight
   * @returns boolean
   */
  checkPayload(payloadCar: {min: number; max: number}, carWeight: number) {
    const {min, max} = payloadCar;

    return !(carWeight < min || carWeight > max);
  }
}
