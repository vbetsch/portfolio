import { addressLinks } from '@data/address-links.ts';

describe('config', () => {
  it('should be OK', () => {
    expect(true).toBeTruthy();
  });
  it('content > addressLinks - should be defined', () => {
    expect(true).toBeTruthy();
    expect(addressLinks).toBeDefined();
    expect(addressLinks).toBeTruthy();
    expect(addressLinks).toHaveLength(4);
  });
});
