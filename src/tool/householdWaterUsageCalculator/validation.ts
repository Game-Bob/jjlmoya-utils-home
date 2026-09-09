export const validation = {
  reviewedAt: "2026-09-09",
  methodology:
    "Client-side scenario estimate. Activity litres are calculated from household frequency, duration, flow or litres per load and converted with 365 days per year and 365/12 days per month. The lower-use comparison uses transparent targets exposed in the English content as a planning scenario.",
  sources: [
    {
      region: "Spain",
      language: "Spanish",
      institution: "Instituto Nacional de Estadística",
      claim:
        "Latest published household average reference of 128 litres per person per day in 2024.",
      url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176834&idp=1254735976602&menu=ultiDatos",
    },
    {
      region: "Spain",
      language: "Spanish",
      institution: "Ministerio para la Transición Ecológica",
      claim: "Household water-saving context and practical actions.",
      url: "https://www.miteco.gob.es/es/ceneam/recursos/pag-web/consumo-responsable-agua.html",
    },
    {
      region: "United Kingdom",
      language: "English",
      institution: "Waterwise",
      claim: "Bathing and showering behaviour and technology context.",
      url: "https://database.waterwise.org.uk/wp-content/uploads/2019/10/Waterwise-2009_The-Water-and-Energy-Implications-of-Bathing-and-Showering-Behaviours-and-Technologies.pdf",
    },
  ],
  referenceCases: [
    {
      name: "Default household",
      input:
        "3 people, 7 showers per person per week, 6-minute showers at 8 L/min, 5 flushes per person per day at 6 L, 4 tap minutes per person per day at 6 L/min, 3 washing loads and 3 dishwasher loads per week, 5 L/day leak estimate.",
      expected: "336.7 L/day and 10,242 L/month before rounding.",
    },
    {
      name: "Low-flow preset",
      input:
        "Efficient targets for frequency, duration, flow, flush volume and full loads.",
      expected: "No calculated saving below the already efficient scenario.",
    },
  ],
  limitations: [
    "The model does not inspect a meter or infer outdoor and shared uses.",
    "Fixture values are user assumptions unless measured or taken from a label.",
    "The lower-use scenario is not a guaranteed saving or a legal, health or engineering recommendation.",
  ],
};
