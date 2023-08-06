import {createStubInstance, expect, sinon} from '@loopback/testlab';
import {CalculateService} from '../../../services';

describe('Calculate Services', function (this: Mocha.Suite) {
  // let calculateService: CalculateService;

  // beforeEach(() => {
  //    calculateService = new CalculateService();
  // });

  it('two sum check result found', async () => {
    // Arrange
    const number = [2, 7, 11, 15];
    const target = 9;
    const expected: Array<number> = [0, 1];

    // Act
    const calculateService = new CalculateService();
    const result = calculateService.twoSum(number, target);

    // Assert
    expect(result).to.deepEqual(expected);
  });

  it('two sum check result not found', async () => {
    // Arrange
    const number = [3, 7, 10, 5];
    const target = 9;
    const expected: Array<number> = [];

    // Act
    const calculateService = new CalculateService();
    const result = calculateService.twoSum(number, target);

    // Assert
    expect(result).to.deepEqual(expected);
  });

  it('calculate sum', async () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const expected = 3;

    // Act
    const calculateService = new CalculateService();
    const result = calculateService.sum(numberOne, numberTwo);

    // Assert
    expect(result).to.equal(expected);
  });

  it('calculate sum and minus without stub', async () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    // (nummerOne + numberTwo) - numberOne
    const expected = 2;

    // Act
    const calculateService = new CalculateService();
    const result = calculateService.sumAndMinus(numberOne, numberTwo);

    // Assert
    expect(result).to.equal(expected);
  });

  it('calculate sum and minus with stub', async () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    // (nummerOne + numberTwo) - numberOne
    const expected = 5;

    const calService = createStubInstance(CalculateService);
    const sum = calService.stubs.sum.onFirstCall().returns(5);

    // Act
    const result = sum(numberOne, numberTwo);

    // Assert
    expect(result).to.equal(expected);
  });

  it('calculate sum and minus with mock', async () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    // (nummerOne + numberTwo) - numberOne
    const expected = 4;

    // Mock sum Function
    const calculateService = new CalculateService();
    const calServiceMock = sinon.mock(calculateService);
    calServiceMock.expects('sum').once().returns(5);

    // Act
    const result = calculateService.sumAndMinus(numberOne, numberTwo);

    // Assert
    expect(result).to.equal(expected);
  });
});
