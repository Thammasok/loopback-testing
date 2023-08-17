import {expect, sinon} from '@loopback/testlab';
import {CargoService} from '../../../services';

describe('Cargo service', () => {
  let cargoService: CargoService;

  before(() => {
    cargoService = new CargoService();
  });

  beforeEach(() => {
    sinon.restore();
  });

  it('คีย์น้ำหนักน้อยกว่า ค่าน้ำหนักต่ำสุด (Min) ของรถส่งของ', () => {
    const payloadCar = {
      min: 33000,
      max: 50000,
    };

    const carWeight = 10000;

    const result = cargoService.checkPayload(payloadCar, carWeight);

    expect(result).to.be.false();
  });

  it('คีย์น้ำหนักอยู่ในช่วง ค่าน้ำหนักของรถส่งของ', () => {
    const payloadCar = {
      min: 33000,
      max: 50000,
    };

    const carWeight = 40000;

    const result = cargoService.checkPayload(payloadCar, carWeight);

    expect(result).to.be.true();
  });

  it('คีย์น้ำหนักมากกว่า ค่าน้ำหนักสูงสุด (Max) ช่วงของรถส่งของ', () => {
    const payloadCar = {
      min: 33000,
      max: 50000,
    };

    const carWeight = 60000;

    const result = cargoService.checkPayload(payloadCar, carWeight);

    expect(result).to.be.false();
  });
});
