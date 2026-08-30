import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

const ASIAN_LOCALES = ['ja', 'ko', 'zh'];
const DIAGNOSTIC_VARIANTS = new Set(['warning', 'error', 'info', 'success']);

function getSimpleSectionLength(section: any): number {
  if (section.type === 'title') return section.text ? section.text.length : 0;
  if (section.type === 'paragraph') return section.html ? section.html.replace(/<[^>]*>/g, '').length : 0;
  if (section.type === 'list') return section.items ? section.items.join('').length : 0;
  return 0;
}

function getComplexSectionLength(section: any): number {
  if (section.type === 'diagnostic' || section.type === 'tip') {
    return (section.title ? section.title.length : 0) + (section.html ? section.html.replace(/<[^>]*>/g, '').length : 0);
  }
  if (section.type === 'table') {
    return ((section.headers || []).join('').length) + ((section.rows || []).flat().join('').length);
  }
  return 0;
}

function getSectionLength(section: any): number {
  return getSimpleSectionLength(section) || getComplexSectionLength(section);
}

function calculateSeoTextLength(seoSections: any[]): number {
  return seoSections.reduce((acc, section) => acc + getSectionLength(section), 0);
}

function findInvalidDiagnosticVariants(
  toolId: string,
  locale: string,
  seoSections: any[],
): string[] {
  return seoSections.flatMap((section, index) => {
    if (section.type !== 'diagnostic' || DIAGNOSTIC_VARIANTS.has(section.variant)) {
      return [];
    }

    return [
      `[INVALID SEO DIAGNOSTIC] Tool "${toolId}" locale "${locale}" section ${index + 1} has unsupported variant "${String(section.variant)}"; expected one of warning, error, info, success`,
    ];
  });
}

function checkLocaleSeoLength(toolId: string, locale: string, localeLen: number, enLen: number): string | null {
  const isAsian = ASIAN_LOCALES.includes(locale);
  const minLength = isAsian ? 120 : Math.max(240, Math.floor(enLen * 0.35));
  const msgType = isAsian ? 'suspiciously short' : 'truncated/lazy';

  if (localeLen >= minLength) return null;
  return `[LAZY SEO TRANSLATION] Tool "${toolId}" locale "${locale}" SEO text is ${msgType} (${localeLen} chars vs EN ${enLen} chars, expected min ${minLength})`;
}

async function auditSingleLocale(toolId: string, locale: string, loader: any, enSeoLength: number): Promise<string | null> {
  if (locale === 'en' || !loader) return null;
  const content = await loader();
  if (!content.seo || !Array.isArray(content.seo)) return null;

  return checkLocaleSeoLength(toolId, locale, calculateSeoTextLength(content.seo), enSeoLength);
}

describe('SEO Translation Completeness & Laziness Audit', () => {
  ALL_TOOLS.forEach(({ entry }) => {
    describe(`Tool: ${entry.id}`, () => {
      it('should not have lazy or truncated SEO content compared to English reference', async () => {
        const enLoader = entry.i18n['en' as keyof typeof entry.i18n];
        if (!enLoader) return;

        const enContent = await enLoader();
        if (!enContent.seo || !Array.isArray(enContent.seo)) return;

        const enSeoLength = calculateSeoTextLength(enContent.seo);
        const failures: string[] = [];

        for (const [locale, loader] of Object.entries(entry.i18n)) {
          const failure = await auditSingleLocale(entry.id, locale, loader, enSeoLength);
          if (failure) failures.push(failure);
        }

        expect(
          failures,
          failures.length > 0
            ? `SEO translation completeness failures for "${entry.id}":\n${failures.map((failure, index) => `${index + 1}. ${failure}`).join('\n')}`
            : undefined,
        ).toEqual([]);
      });

      it('should use supported diagnostic variants in every locale', async () => {
        const failures: string[] = [];

        for (const [locale, loader] of Object.entries(entry.i18n)) {
          const content = await loader();
          if (!content.seo || !Array.isArray(content.seo)) continue;

          failures.push(...findInvalidDiagnosticVariants(entry.id, locale, content.seo));
        }

        expect(
          failures,
          failures.length > 0
            ? `SEO diagnostic variant failures for "${entry.id}":\n${failures.map((failure, index) => `${index + 1}. ${failure}`).join('\n')}`
            : undefined,
        ).toEqual([]);
      });
    });
  });
});
