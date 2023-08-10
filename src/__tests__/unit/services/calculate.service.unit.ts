import {createStubInstance, expect, sinon} from '@loopback/testlab';
import {CalculateService} from '../../../services';

describe('Calculate service', () => {
  let calculateService: CalculateService;

  before(() => {
    calculateService = new CalculateService();
  });

  beforeEach(() => {
    sinon.restore();
  });

  it('ทดสอบการบวกเลข 2 จำนวน', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const expected = 3;

    // Act
    const result = calculateService.sum(numberOne, numberTwo);

    // Assert
    expect(result).to.eql(expected);
    expect(result).to.equal(expected);
  });

  it('ทดสอบการ Return 2 จำนวน', () => {
    // Arrange
    const expected = {
      msg: 'ok',
    };

    // Act
    const result = calculateService.twoRetrun();

    // Assert
    expect(result).to.deepEqual(expected);
  });

  it('ทดสอบการคำนวน บวกลบ ข้อมูล โดยไม่ใช้ Stub', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const expected = 2;

    // Act
    const result = calculateService.sumAndMinus(numberOne, numberTwo);

    // Assert
    expect(result).to.eql(expected);
    expect(result).to.equal(expected);
  });

  it('ทดสอบการคำนวน บวกลบ ข้อมูล โดยใช้ Stub', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const expected = 5;

    const calServiceStub = createStubInstance(CalculateService);
    const sum = calServiceStub.stubs.sum.onFirstCall().returns(5);

    // Act
    const result = sum(numberOne, numberTwo);

    // Assert
    expect(result).to.equal(expected);
  });

  it('ทดสอบการคำนวน บวกลบ ข้อมูล โดยใช้ Mock', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    // 5 - numberOne
    const expected = 4;

    const calculateServiceMock = sinon.mock(calculateService);
    calculateServiceMock.expects('sum').once().returns(5);

    // Act
    const result = calculateService.sumAndMinus(numberOne, numberTwo);

    // Assert
    expect(result).to.equal(expected);
  });

  it('calculate sum and minus with spy', async () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    // (nummerOne + numberTwo) - numberOne
    // const expected = 2;

    // Mock sum Function
    const sumSpied = sinon.spy(calculateService, 'sum');

    // Act
    calculateService.sumAndMinus(numberOne, numberTwo);

    // Assert
    expect(sumSpied.called).to.be.true();
  });
});
