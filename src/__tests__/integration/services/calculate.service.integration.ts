import {expect} from '@loopback/testlab';
import {CalculateService} from '../../../services';

describe('Calculate Services', function (this: Mocha.Suite) {
  // let service: SimpleService;

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
});
