import { describe, it, expect } from 'vitest';
import { LoginSchema } from '@/lib/schemas';

describe('LoginSchema', () => {
  it('should validate correct login data', () => {
    const validData = {
      email: 'user@example.com',
      password: 'password123',
    };
    const result = LoginSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      email: 'invalid-email',
      password: 'password123',
    };
    const result = LoginSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject short password', () => {
    const invalidData = {
      email: 'user@example.com',
      password: 'short',
    };
    const result = LoginSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
