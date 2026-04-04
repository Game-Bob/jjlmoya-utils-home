import { describe, it, expect } from 'vitest';
import * as DATA from '../data';

const TOOLS: typeof DATA.templateCategory[] = [];

describe('FAQ Content Validation', () => {
  TOOLS.forEach((entry) => {
    describe(`Tool: ${entry.icon}`, () => {
      it('placeholder', () => {
        expect(true).toBe(true);
      });
    });
  });

  it('no tools registered yet', () => {
    expect(TOOLS.length).toBe(0);
  });
});
