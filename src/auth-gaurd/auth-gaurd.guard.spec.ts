import { AuthGaurdGuard } from './auth-gaurd.guard';

describe('AuthGaurdGuard', () => {
  it('should be defined', () => {
    expect(new AuthGaurdGuard()).toBeDefined();
  });
});
