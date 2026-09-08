import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-tempo-recupero-scaldacqua';
const title = 'Calcolatore del tempo di recupero dello scaldacqua';
const description = 'Stima quanto tempo serve allo scaldacqua per passare dalla temperatura attuale a quella obiettivo usando volume, potenza utile ed efficienza.';
const faq = [
  { question: 'Che cosa significa qui tempo di recupero?', answer: 'È il tempo stimato perché il volume d\u2019acqua inserito passi dalla temperatura attuale a quella obiettivo. Il calcolo usa la capacità termica dell\u2019acqua, la potenza utile e l\u2019efficienza stimata.' },
  { question: 'Quale formula usa il calcolatore?', answer: 'Il calore viene stimato moltiplicando i litri per l\u2019aumento di temperatura e per 1,16 wattora per litro e grado Celsius. L\u2019energia viene poi divisa per la potenza moltiplicata per l\u2019efficienza.' },
  { question: 'Prevede il tempo esatto del mio apparecchio?', answer: 'No. È una stima trasparente per la pianificazione. Perdite in standby, cicli del termostato, stratificazione, miscelazione, tubazioni e limiti di potenza possono allungare il tempo reale.' },
  { question: 'Quale efficienza devo inserire?', answer: 'Usa un\u2019efficienza utile o di recupero documentata, se disponibile. Altrimenti inserisci una stima prudente e confrontala con il manuale o con un ciclo misurato.' },
];
const howTo = [
  { name: 'Inserisci il volume d\u2019acqua accumulata', text: 'Usa il volume del serbatoio in litri per stimare quanta acqua deve essere riscaldata.' },
  { name: 'Imposta le temperature attuale e obiettivo', text: 'Inserisci la temperatura iniziale e quella che vuoi raggiungere.' },
  { name: 'Inserisci potenza utile ed efficienza', text: 'Usa la potenza in kilowatt e la percentuale di energia che arriva effettivamente all\u2019acqua.' },
  { name: 'Leggi la finestra di recupero', text: 'Usa durata e ora di fine stimata per pianificare e confronta il risultato con la documentazione dell\u2019apparecchio.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Volume d\u2019acqua accumulata', volumeHint: 'Capacità del serbatoio', temperatureUnitLabel: 'Unità di temperatura', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Temperatura attuale dell\u2019acqua', targetTempLabel: 'Temperatura obiettivo', powerLabel: 'Potenza utile dello scaldacqua', efficiencyLabel: 'Efficienza stimata', startTimeLabel: 'Il recupero inizia alle', compareTitle: 'Confronta un\u2019altra configurazione', comparePowerLabel: 'Altra potenza utile', compareEfficiencyLabel: 'Altra efficienza', compareOptional: 'Facoltativo: inserisci entrambi i campi per confrontare', calculateNote: 'Usalo come stima di pianificazione e consulta il manuale prima di fare affidamento sul tempo.', tankCurrent: 'Attuale', tankTarget: 'Obiettivo', resultTitle: 'Finestra di recupero', recoveryTimeLabel: 'Recupero stimato', energyLabel: 'Calore necessario', effectivePowerLabel: 'potenza effettiva', readyAtLabel: 'Pronto stimato alle', temperatureRiseLabel: 'Aumento di temperatura', comparisonTitle: 'Configurazione alternativa', comparisonFaster: 'più veloce', comparisonSlower: 'più lenta', noHeatingNeeded: 'La temperatura obiettivo è già raggiunta', invalidInputs: 'Inserisci valori positivi per volume, potenza ed efficienza per vedere la stima.', insufficientPower: 'È necessaria una potenza utile positiva.', limitsTitle: 'Cosa non include questa stima', limitsText: 'Il modello non conosce isolamento del serbatoio, perdite in standby, cicli del termostato, stratificazione, miscelazione, perdite delle tubazioni o curva di potenza reale dell\u2019apparecchio.', hoursUnit: 'h', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Stima quando l\u2019acqua calda sarà di nuovo disponibile', level: 2 },
    { type: 'paragraph', html: 'Dopo una doccia, un bagno o un prelievo importante, non conta solo la dimensione del serbatoio. Serve sapere quanta energia deve tornare nell\u2019acqua e quanto velocemente lo scaldacqua può fornirla. Questo calcolatore trasforma questi dati in una finestra di recupero utile per pianificare il prossimo utilizzo.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Calore necessario in Wh', icon: 'mdi:water-boiler' }, { value: 'kW × efficienza', label: 'Potenza di riscaldamento utile', icon: 'mdi:flash-outline' }, { value: 'Calore ÷ potenza', label: 'Tempo di recupero', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Come viene costruita la stima', level: 2 },
    { type: 'paragraph', html: 'La stima usa la capacità termica dell\u2019acqua. Ogni litro richiede circa 1,16 wattora per ogni grado di aumento. Il calcolatore moltiplica il fattore per volume e aumento di temperatura, poi divide per la potenza utile dopo aver applicato l\u2019efficienza.' },
    { type: 'comparative', items: [{ title: 'Utile per la pianificazione', description: 'Scegli un orario di inizio, inserisci lo stato del serbatoio e ottieni un orario di fine stimato. Aggiungi una coppia alternativa di potenza ed efficienza per confrontare le configurazioni.', icon: 'mdi:calendar-clock', points: ['Testare il prossimo ciclo di recupero', 'Confrontare la potenza utile, non solo quella nominale', 'Tenere visibile l\u2019aumento di temperatura'] }, { title: 'Non è una garanzia di servizio', description: 'Un apparecchio reale può recuperare più lentamente a causa delle perdite, dei cicli del termostato, della miscelazione o di una potenza non costante. Confronta il risultato con il manuale o con una misurazione.', icon: 'mdi:thermometer-alert', points: ['Le perdite in standby non sono modellate', 'Non vengono recuperati dati del produttore', 'Non implica consigli di sicurezza o installazione'] }], columns: 2 },
    { type: 'title', text: 'Gli input che cambiano di più il tempo di recupero', level: 2 },
    { type: 'paragraph', html: 'Un aumento di temperatura maggiore incrementa direttamente l\u2019energia necessaria. Un serbatoio più grande richiede proporzionalmente più energia per lo stesso aumento. Potenza utile ed efficienza agiscono in senso opposto: raddoppiare il loro prodotto dimezza circa il tempo ideale.' },
    { type: 'title', text: 'Usa il risultato senza promettere una precisione falsa', level: 2 },
    { type: 'paragraph', html: 'Questo strumento serve a pianificare e confrontare ipotesi, non a certificare uno scaldacqua o dimensionare un impianto. Guide tecniche e prove reali includono ulteriori perdite e condizioni di misura, quindi un ciclo osservato può differire dalla stima ideale.' },
  ],
};
