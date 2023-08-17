import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {CargoRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class CargoService {
  constructor(
    @repository(CargoRepository)
    public cargoRepository: CargoRepository,
  ) {}

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

  async checkPayloadByCargoId(cargoId: number, weight: number) {
    try {
      console.log('cargoDetail', cargoId, weight);
      const cargoDetail = await this.cargoRepository.findById(cargoId);
      console.log('cargoDetail', cargoDetail);
      if (cargoDetail) {
        return !(weight < cargoDetail.min || weight > cargoDetail.max);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
}
