import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { homeCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 6 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(6);
    });

    it('homeCategory should be defined', () => {
      expect(homeCategory).toBeDefined();
      expect(homeCategory.i18n).toBeDefined();
    });
  });
});

