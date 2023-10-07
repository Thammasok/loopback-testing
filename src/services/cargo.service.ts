import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {CargoRepository} from '../repositories';

export interface CargoDto {
  geocode(payloadCar: {min: number; max: number}, carWeight: number): boolean;
  checkPayloadByCargoId(cargoId: number, weight: number): Promise<boolean>;
}

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
      const cargoDetail = await this.cargoRepository.findById(cargoId);

      if (cargoDetail) {
        return !(weight < cargoDetail.min || weight > cargoDetail.max);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
