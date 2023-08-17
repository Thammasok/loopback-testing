import {/* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class CargoService {
  // constructor(
  //   @repository(CargoRepository) public cargoRepository: CargoRepository,
  // ) {}

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

  // async checkPayloadByCargoId(cargoId: number, weight: number) {
  //   const cargo = await this.cargoRepository.findById(cargoId);

  //   if (cargo) {
  //     return !(weight < cargo.min || weight > cargo.max);
  //   }
  // }
}
