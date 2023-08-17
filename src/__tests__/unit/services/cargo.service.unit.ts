import {
  StubbedInstanceWithSinonAccessor,
  createStubInstance,
  expect,
  sinon,
} from '@loopback/testlab';
import {Cargo} from '../../../models';
import {CargoRepository} from '../../../repositories';
import {CargoService} from '../../../services';

describe('Cargo service', () => {
  let cargoService: CargoService;
  let cargoRepository: CargoRepository;
  const payloadCar = {
    min: 33000,
    max: 50000,
  };

  before(() => {
    cargoService = new CargoService(cargoRepository);
  });

  beforeEach(() => {
    sinon.restore();
  });

  it('คีย์น้ำหนักน้อยกว่า ค่าน้ำหนักต่ำสุด (Min) ของรถส่งของ', () => {
    const carWeight = 10000;

    const result = cargoService.checkPayload(payloadCar, carWeight);

    expect(result).to.be.false();
  });

  it('คีย์น้ำหนักอยู่ในช่วง ค่าน้ำหนักของรถส่งของ', () => {
    const carWeight = 40000;

    const result = cargoService.checkPayload(payloadCar, carWeight);

    expect(result).to.be.true();
  });

  it('คีย์น้ำหนักมากกว่า ค่าน้ำหนักสูงสุด (Max) ช่วงของรถส่งของ', () => {
    const carWeight = 60000;

    const result = cargoService.checkPayload(payloadCar, carWeight);

    expect(result).to.be.false();
  });
});

describe('Cargo service with Repository', () => {
  let cargoService: CargoService;
  // 1. create cargoRepository
  let cargoRepository: StubbedInstanceWithSinonAccessor<CargoRepository>;

  const cargoId = 1;

  before(() => {
    // 2. send cargoRepository to CargoService
    cargoRepository = createStubInstance(CargoRepository);
    cargoService = new CargoService(cargoRepository);
  });

  beforeEach(async () => {
    await cargoRepository.deleteAll();
    sinon.restore();
  });

  it('คีย์น้ำหนักมากกว่า ค่าน้ำหนักสูงสุด (Max) ช่วงของรถส่งของ', async () => {
    const carWeight = 60000;

    const cargoDetail = new Cargo({
      id: 1,
      name: 'กระบะตอนเดียว  ',
      type: 'กระบะ     ',
      min: 25000,
      max: 35000,
    });

    // Stub FindById
    // cargoRepository.stubs.findById.resolves(cargoDetail);

    const findById = cargoRepository.stubs.findById;
    findById.resolves(cargoDetail);

    const result = await cargoService.checkPayloadByCargoId(cargoId, carWeight);
    console.log(result);
    // expect(result).to.be.false();
    sinon.assert.calledWith(findById, cargoDetail.id);
  });
});
