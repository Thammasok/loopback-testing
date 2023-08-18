import {
  StubbedInstanceWithSinonAccessor,
  createStubInstance,
  expect,
  sinon,
} from '@loopback/testlab';
import {Cargo} from '../../../models';
import {CargoRepository} from '../../../repositories';
import {CargoService} from '../../../services';

describe('Cargo service with Repository', () => {
  let cargoService: CargoService;
  // 1. create cargoRepository
  let cargoRepository2: StubbedInstanceWithSinonAccessor<CargoRepository>;

  beforeEach(resetRepositories);

  it('คีย์น้ำหนักน้อยกว่า ค่าน้ำหนักต่ำสุด (Min) ของรถส่งของ', async () => {
    const cargoId = 1;
    const carWeight = 5000;

    // 3. Mock return data
    const cargoDetail = new Cargo({
      id: 1,
      name: 'กระบะ ตอนครึ่ง ',
      type: 'รถกระบะ   ',
      min: 10000,
      max: 25000,
    });

    // 4. Stub FindById
    const findById = cargoRepository2.stubs.findById;
    findById.resolves(cargoDetail);

    const result = await cargoService.checkPayloadByCargoId(cargoId, carWeight);

    expect(result).to.be.false();
    sinon.assert.calledWith(findById, cargoDetail.id);
  });

  it('คีย์น้ำหนักอยู่ในช่วง ค่าน้ำหนักของรถส่งของ', async () => {
    const cargoId = 1;
    const carWeight = 20000;
    const cargoDetail = new Cargo({
      id: 1,
      name: 'กระบะ ตอนครึ่ง ',
      type: 'รถกระบะ   ',
      min: 10000,
      max: 25000,
    });

    // Stub FindById
    const findById = cargoRepository2.stubs.findById;
    findById.resolves(cargoDetail);

    const result = await cargoService.checkPayloadByCargoId(cargoId, carWeight);

    // console.log('aresult', result);
    expect(result).to.be.true();
    sinon.assert.calledWith(findById, cargoDetail.id);
  });

  it('คีย์น้ำหนักมากกว่า ค่าน้ำหนักสูงสุด (Max) ช่วงของรถส่งของ', async () => {
    const cargoId = 1;
    const carWeight = 60000;
    const cargoDetail = new Cargo({
      id: 1,
      name: 'กระบะ ตอนครึ่ง ',
      type: 'รถกระบะ   ',
      min: 10000,
      max: 25000,
    });

    // Stub FindById
    const findById = cargoRepository2.stubs.findById;
    findById.resolves(cargoDetail);

    const result = await cargoService.checkPayloadByCargoId(cargoId, carWeight);

    // console.log('aresult', result);
    expect(result).to.be.false();
    sinon.assert.calledWith(findById, cargoDetail.id);
  });

  // 2. resetRepositories
  function resetRepositories() {
    cargoRepository2 = createStubInstance(CargoRepository);
    cargoService = new CargoService(cargoRepository2);
  }
});
