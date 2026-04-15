import { EmailService } from './email.service.ts';

describe('EmailService', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it('should be ok', () => {
    const service: EmailService = new EmailService();
    expect(service).toBeInstanceOf(EmailService);
    expect(service).toBeDefined();
  });
  it('should have email', () => {
    const service: EmailService = new EmailService();
    expect(service.email).toBeDefined();
    expect(service.email).toBeTruthy();
    expect(service.email).toMatch(emailRegex);
  });
});
