import { addressLinks } from '@data/address-links.ts';

describe('config', () => {
  it('should be OK', () => {
    expect(true).toBeTruthy();
  });
  it('content > addressLinks - should be defined', () => {
    const addressLinksNumber: number = 4;
    expect(addressLinks).toBeDefined();
    expect(addressLinks).toBeTruthy();
    expect(addressLinks).toHaveLength(addressLinksNumber);
  });
});
