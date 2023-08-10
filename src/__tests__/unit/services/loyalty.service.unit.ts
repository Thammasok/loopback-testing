import {expect} from '@loopback/testlab';
import {LoyaltyService} from '../../../services';

/**
 * 1. ราคาสินค้าที่ซื้อเท่ากับ 50 บาท ได้แต้ม 0 แต้ม
 * 2. ราคาสินค้าที่ซื้อเท่ากับ 100 บาท ได้แต้ม 1 แต้ม
 * 3. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 9 แต้ม
 */

describe('Loyalty service: ทดสอบฟังก์ชันคำนวนแต้มจากราคาสินค้า', () => {
  let loyaltyService: LoyaltyService;

  before(() => {
    loyaltyService = new LoyaltyService();
  });

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
});
