export const validationEvidence = {
  reviewedAt: '2026-09-04',
  methodology:
    'The comparator applies the published annual consumption and contracted-power inputs to the regulated and fixed-price formulas shown in the tool. Results are estimates for comparison, not a bill or a tariff offer.',
  sources: [
    'https://comparador.cnmc.gob.es/comparador/',
    'https://www.miteco.gob.es/es/energia/pobreza-energetica/pe-001/preguntas-frecuentes-bono-social.html',
    'https://www.omie.es/es/mercado-de-electricidad',
  ],
  referenceCases: [
    { annualKwh: 2700, contractedKw: 3.45, expected: 'finite non-negative annual estimates' },
    { annualKwh: 0, contractedKw: 0, expected: 'zero variable energy and power costs' },
  ],
  limitations: [
    'The tool does not retrieve live offers, taxes, discounts, regulated charges or supplier-specific terms.',
    'Users must verify current prices and eligibility with the supplier or official comparator before contracting.',
  ],
} as const;
