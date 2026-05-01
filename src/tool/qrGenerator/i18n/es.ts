import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'qr';
const title = 'Generador de Códigos QR Offline';
const description =
  'Genera códigos QR para WiFi, URLs y Contactos de forma 100% segura en tu navegador. Tus datos nunca salen de tu dispositivo.';

const faqData = [
  {
    question: '¿Caducan estos códigos QR?',
    answer:
      'No. Los códigos generados aquí son estáticos. La información está codificada directamente en la imagen, no depende de ningún enlace externo ni redirección. Funcionarán para siempre.',
  },
  {
    question: '¿Guardáis mis datos?',
    answer:
      'Absolutamente no. Todo el proceso ocurre en tu navegador (Client-Side). Ningún dato se envía a nuestros servidores. Es 100% privado y seguro.',
  },
  {
    question: '¿Funciona en iPhone y Android?',
    answer:
      'Sí. La mayoría de cámaras modernas de iOS y Android leen códigos QR de forma nativa y sugieren la acción correspondiente (conectar a WiFi, abrir link, etc.).',
  },
  {
    question: '¿Puedo usarlo sin internet?',
    answer:
      'Sí. Una vez cargada la página, puedes desconectar el WiFi o los datos y el generador seguirá funcionando perfectamente ya que no depende de servidores externos.',
  },
];

const howToData = [
  {
    name: 'Elegir tipo de QR',
    text: 'Selecciona si quieres un código para una Red WiFi, un enlace URL o un contacto (vCard).',
  },
  {
    name: 'Introducir datos',
    text: 'Rellena los campos necesarios, como el nombre de la red y la contraseña, o la dirección web.',
  },
  {
    name: 'Generar y comprobar',
    text: 'El código se genera al instante. Puedes probar a escanearlo directamente desde la pantalla.',
  },
  {
    name: 'Descargar',
    text: 'Guarda el código QR como imagen (.webp) para imprimirlo o compartirlo digitalmente.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Por qué Offline? La Privacidad ante Todo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de generadores QR online envían tus datos a un servidor. Esto es un riesgo, especialmente para <strong>claves WiFi</strong> o <strong>datos personales</strong>. Esta herramienta utiliza JavaScript para generar el código QR directamente en tu dispositivo. Puedes incluso desconectar internet y seguirá funcionando.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privado', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Sin Servidor', icon: 'mdi:wifi-off' },
        { value: 'WebP', label: 'Descarga Directa', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Código Abierto y Transparente',
      icon: 'mdi:github',
      badge: 'Open Source',
      html: '<p>¿No te fías? El código de esta herramienta es 100% open source. Puedes revisar cómo funciona o descargarlo para ejecutarlo en tu propio ordenador sin internet.</p>',
    },
    {
      type: 'title',
      text: 'Casos de Uso',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'WiFi QR',
          description: 'Comparte tu red WiFi con invitados sin tener que dictar la contraseña. Escanean y se conectan automáticamente.',
          icon: 'mdi:wifi',
          points: ['Compatible con iOS y Android nativamente', 'Soporta WPA2, WEP y redes abiertas'],
        },
        {
          title: 'URL QR',
          description: 'Convierte cualquier enlace web en un código escaneable. Ideal para imprimir en materiales físicos.',
          icon: 'mdi:link',
          points: ['Cualquier URL válida', 'Sin fecha de caducidad'],
        },
        {
          title: 'vCard QR',
          description: 'Tarjeta de visita digital. Al escanear, el teléfono sugerirá "Añadir contacto" con todos los datos rellenos.',
          icon: 'mdi:card-account-details',
          points: ['Nombre, teléfono, email y empresa', 'Formato estándar vCard 3.0'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Guía de Uso por Caso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Para tu Hogar (WiFi):</strong> ¿Cansado de buscar el papelito con la clave del WiFi cada vez que vienen amigos? Genera un QR con el SSID y la contraseña. Imprímelo y pégalo en un lugar visible. Tus invitados solo tendrán que abrir la cámara de su móvil, apuntar y listo, se conectarán sin escribir nada.',
    },
    {
      type: 'paragraph',
      html: '<strong>Para Profesionales (vCard):</strong> En eventos de networking, llevar tarjetas de papel es cosa del pasado. Genera un QR con tus datos de contacto. Puedes llevarlo en tu móvil o imprimirlo en el reverso de tu acreditación. Al escanearlo, tu nuevo contacto podrá guardar tu nombre, teléfono, email y empresa directamente en su agenda.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Código QR',
          definition: 'Código de barras 2D que puede almacenar hasta 4.296 caracteres alfanuméricos. Las cámaras modernas lo leen en menos de un segundo.',
        },
        {
          term: 'vCard',
          definition: 'Formato estándar para tarjetas de contacto digitales (RFC 6350). Compatible con iOS, Android, Outlook y la mayoría de gestores de contactos.',
        },
        {
          term: 'SSID',
          definition: 'Service Set Identifier. El nombre visible de una red WiFi que aparece cuando buscas redes disponibles en tu dispositivo.',
        },
        {
          term: 'WPA2',
          definition: 'Wi-Fi Protected Access 2. El protocolo de seguridad WiFi más extendido. Usa cifrado AES para proteger las comunicaciones.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Claves para Usar bien esta Herramienta',
      items: [
        'Todos los datos se procesan en tu navegador, nunca en un servidor externo.',
        'El QR WiFi requiere que el SSID y la contraseña sean exactos (distingue mayúsculas).',
        'Los QR generados son estáticos: si cambias la contraseña del WiFi, genera uno nuevo.',
        'Descarga el QR en WebP para máxima calidad al imprimirlo o compartirlo.',
        'Prueba a escanear el QR desde la misma pantalla antes de imprimirlo.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Contacto',
    labelSsid: 'Nombre de la Red (SSID)',
    labelPassword: 'Contraseña',
    labelEncryption: 'Seguridad',
    labelHidden: 'Red Oculta',
    labelUrl: 'Dirección Web (URL)',
    labelName: 'Nombre',
    labelSurname: 'Apellidos',
    labelPhone: 'Teléfono',
    labelEmail: 'Email',
    labelOrg: 'Organización / Empresa',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Ninguna',
    downloadBtn: 'Descargar PNG',
    privacyMsg: 'Generado 100% en tu navegador. Tus datos nunca viajan a Internet.',
    placeholderSsid: 'MiCasa_5G',
    placeholderUrl: 'https://ejemplo.com',
    placeholderPassword: '••••••••',
  },
};
