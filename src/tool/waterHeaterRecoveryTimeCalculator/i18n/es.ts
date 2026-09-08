import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-tiempo-recuperacion-termo';
const title = 'Calculadora del tiempo de recuperación del calentador de agua';
const description = 'Estima cuánto tarda tu calentador de agua en pasar de la temperatura actual a la temperatura objetivo usando el volumen, la potencia útil y la eficiencia.';
const faq = [
  { question: '¿Qué significa aquí tiempo de recuperación?', answer: 'Es el tiempo estimado para que el volumen de agua introducido suba desde su temperatura actual hasta la temperatura objetivo. El cálculo usa la capacidad térmica del agua, la potencia útil y la eficiencia estimada.' },
  { question: '¿Qué fórmula utiliza la calculadora?', answer: 'Estima el calor como litros multiplicados por el aumento de temperatura y 1,16 vatios-hora por litro y grado Celsius. Después divide esa energía entre la potencia del calentador multiplicada por la eficiencia.' },
  { question: '¿Predice el tiempo exacto de mi calentador?', answer: 'No. Es una estimación transparente para planificar. Las pérdidas en espera, los ciclos del termostato, la estratificación, la mezcla, las tuberías y los límites de potencia pueden alargar el tiempo real.' },
  { question: '¿Qué eficiencia debo introducir?', answer: 'Usa una eficiencia útil o de recuperación documentada cuando la tengas. Si no, introduce una estimación prudente y compárala con el manual o con un ciclo medido.' },
];
const howTo = [
  { name: 'Introduce el volumen de agua almacenada', text: 'Usa el volumen del depósito en litros para estimar cuánta agua debe calentarse.' },
  { name: 'Define las temperaturas actual y objetivo', text: 'Introduce la temperatura al empezar y la temperatura que quieres alcanzar.' },
  { name: 'Introduce potencia útil y eficiencia', text: 'Usa la potencia en kilovatios y el porcentaje de energía que llega realmente al agua.' },
  { name: 'Lee la ventana de recuperación', text: 'Utiliza la duración y la hora estimada de finalización para planificar y compárala con la documentación del aparato.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Volumen de agua almacenada', volumeHint: 'Capacidad del depósito', temperatureUnitLabel: 'Unidades de temperatura', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Temperatura actual del agua', targetTempLabel: 'Temperatura objetivo', powerLabel: 'Potencia útil del calentador', efficiencyLabel: 'Eficiencia estimada', startTimeLabel: 'La recuperación empieza a las', compareTitle: 'Comparar otra configuración', comparePowerLabel: 'Otra potencia útil', compareEfficiencyLabel: 'Otra eficiencia', compareOptional: 'Opcional: introduce ambos campos para comparar', calculateNote: 'Úsalo como una estimación de planificación y consulta la documentación del calentador antes de confiar en el tiempo.', tankCurrent: 'Actual', tankTarget: 'Objetivo', resultTitle: 'Ventana de recuperación', recoveryTimeLabel: 'Recuperación estimada', energyLabel: 'Calor necesario', effectivePowerLabel: 'potencia efectiva', readyAtLabel: 'Estará listo aproximadamente a las', temperatureRiseLabel: 'Aumento de temperatura', comparisonTitle: 'Configuración alternativa', comparisonFaster: 'más rápida', comparisonSlower: 'más lenta', noHeatingNeeded: 'Ya está en la temperatura objetivo', invalidInputs: 'Introduce valores positivos para volumen, potencia y eficiencia para ver la estimación.', insufficientPower: 'Hace falta una potencia útil positiva.', limitsTitle: 'Qué no incluye esta estimación', limitsText: 'El modelo no conoce el aislamiento del depósito, las pérdidas en espera, los ciclos del termostato, la estratificación, la mezcla, las pérdidas de las tuberías ni la curva de potencia real del aparato.', hoursUnit: 'h', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Calcula cuándo volverá a estar listo el agua caliente', level: 2 },
    { type: 'paragraph', html: 'Después de una ducha, un baño o una extracción grande, no basta con saber el tamaño del depósito. Necesitas saber cuánta energía debe volver al agua y cuánto tarda el calentador en entregarla. Esta calculadora convierte esos datos en una ventana de recuperación para planificar el siguiente uso.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Calor necesario en Wh', icon: 'mdi:water-boiler' }, { value: 'kW × eficiencia', label: 'Potencia útil de calentamiento', icon: 'mdi:flash-outline' }, { value: 'Calor ÷ potencia', label: 'Tiempo de recuperación', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Cómo se construye la estimación', level: 2 },
    { type: 'paragraph', html: 'La estimación utiliza la capacidad térmica del agua. Cada litro necesita aproximadamente 1,16 vatios-hora por cada grado de aumento. La calculadora multiplica ese factor por el volumen y la subida de temperatura y divide después entre la potencia útil tras aplicar la eficiencia.' },
    { type: 'comparative', items: [{ title: 'Útil para planificar', description: 'Elige una hora de inicio, introduce el estado del depósito y consulta una hora estimada de finalización. Añade una combinación alternativa de potencia y eficiencia para comparar configuraciones.', icon: 'mdi:calendar-clock', points: ['Probar el siguiente ciclo de recuperación', 'Comparar potencia útil, no solo potencia nominal', 'Mantener visible el aumento de temperatura'] }, { title: 'No es una garantía de servicio', description: 'Un aparato real puede recuperar el calor más despacio por las pérdidas, los ciclos del termostato, la mezcla del depósito o una potencia que no se mantiene. Compara el resultado con el manual o con una medición.', icon: 'mdi:thermometer-alert', points: ['No se modelan las pérdidas en espera', 'No se consultan datos del fabricante', 'No implica consejos de seguridad o instalación'] }], columns: 2 },
    { type: 'title', text: 'Las entradas que más cambian el tiempo', level: 2 },
    { type: 'paragraph', html: 'Un aumento mayor de temperatura incrementa directamente la energía necesaria. Un depósito más grande también requiere proporcionalmente más energía para la misma subida. La potencia útil y la eficiencia actúan al contrario: duplicar su producto reduce aproximadamente a la mitad el tiempo ideal.' },
    { type: 'title', text: 'Usa el resultado sin prometer una precisión falsa', level: 2 },
    { type: 'paragraph', html: 'Esta herramienta sirve para planificar y comparar supuestos, no para certificar un calentador ni dimensionar una instalación. Las guías técnicas y los ensayos reales contemplan pérdidas y condiciones de medida adicionales, por eso un ciclo observado puede diferir de la estimación ideal.' },
  ],
};
