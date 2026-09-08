export const validation = {
  reviewedAt: '2026-09-08',
  methodology: 'The estimate combines representative item volumes, stackable box floor footprints, furniture footprints, a configurable access allowance, and standard unit-size rounding.',
  sources: [
    'https://aesstrasteros.es/que-hay-que-tener-en-cuenta-a-la-hora-de-elegir-trastero/',
    'https://www.fedessa.org/customer-info/thing.html',
  ],
  referenceCases: [
    { name: 'One bedroom reference', inputs: '8 small, 6 medium and 2 large boxes; sofa, bed, wardrobe, desk and 2 chairs; 25% access.', expected: 'A finite plan with a 12 m² minimum and a 15 m² comfortable recommendation.' },
    { name: 'Empty inventory', inputs: 'All item counts set to zero.', expected: 'No unit recommendation and an empty plan message.' },
  ],
  limitations: 'Representative dimensions are not a provider-specific measurement. Users must check internal dimensions, doorway width, ceiling height, loading access, weight limits and any irregular furniture before booking.',
} as const;
