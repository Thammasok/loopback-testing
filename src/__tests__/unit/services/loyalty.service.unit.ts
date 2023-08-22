import {expect, sinon} from '@loopback/testlab';
import {LoyaltyService} from '../../../services';

/**
 * 1. ราคาสินค้าที่ซื้อเท่ากับ 50 บาท ได้แต้ม 0 แต้ม
 * 2. ราคาสินค้าที่ซื้อเท่ากับ 100 บาท ได้แต้ม 1 แต้ม
 * 3. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 9 แต้ม
 * 4. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 99 แต้ม (Mock pointRateConfig)
 */

describe('Loyalty service: ทดสอบฟังก์ชันคำนวนแต้มจากราคาสินค้า', () => {
  let loyaltyService: LoyaltyService;

  before(resetRepositories);

  it('1. ราคาสินค้าที่ซื้อเท่ากับ 50 บาท ได้แต้ม 0 แต้ม', () => {
    // Arrange
    const price = 50.0;
    const pointExpected = 0;

    // Act
    const point = loyaltyService.calculatePointByPrice(price);

    // Assert
    expect(point).to.equal(pointExpected);
  });

  it('2. ราคาสินค้าที่ซื้อเท่ากับ 100 บาท ได้แต้ม 1 แต้ม', () => {
    // Arrange
    const price = 100.0;
    const pointExpected = 1;

    // Act
    const point = loyaltyService.calculatePointByPrice(price);

    // Assert
    expect(point).to.equal(pointExpected);
  });

  it('3. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 9 แต้ม', () => {
    // Arrange
    const price = 999.0;
    const pointExpected = 9;

    // Act
    const point = loyaltyService.calculatePointByPrice(price);

    // Assert
    expect(point).to.equal(pointExpected);
  });

  it('4. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 99 แต้ม', () => {
    // Arrange
    const price = 999.0;
    const pointRate = 10;
    const pointExpected = 99;

    // Mock pointRateConfig
    const loyaltyServiceMock = sinon.mock(loyaltyService);
    loyaltyServiceMock.expects('pointRateConfig').once().returns(pointRate);

    // Act
    const point = loyaltyService.calculatePointRateByPrice(price);

    // Assert
    expect(point).to.equal(pointExpected);
  });

  function resetRepositories() {
    loyaltyService = new LoyaltyService();
  }
});
