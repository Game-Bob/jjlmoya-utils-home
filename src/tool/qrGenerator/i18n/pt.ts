import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gerador-codigos-qr-offline';
const title = 'Gerador de Códigos QR Offline';
const description =
  'Gere códigos QR para WiFi, URLs e Contactos de forma 100% segura no seu navegador. Os seus dados nunca saem do seu dispositivo.';

const faqData = [
  {
    question: 'Estes códigos QR expiram?',
    answer:
      'Não. Os códigos gerados aqui são estáticos. A informação está codificada diretamente na imagem e não depende de ligações externas. Funcionam para sempre.',
  },
  {
    question: 'Guardam os meus dados?',
    answer:
      'Absolutamente não. Todo o processo ocorre no seu navegador (Client-Side). Nenhum dado é enviado para os nossos servidores.',
  },
  {
    question: 'Funciona no iPhone e Android?',
    answer:
      'Sim. A maioria das câmaras modernas lê códigos QR de forma nativa e sugere a ação correspondente (ligar ao WiFi, abrir link, etc.).',
  },
  {
    question: 'Posso usar sem internet?',
    answer:
      'Sim. Uma vez carregada a página, pode desligar o WiFi e o gerador continuará a funcionar perfeitamente.',
  },
];

const howToData = [
  {
    name: 'Escolher tipo de QR',
    text: 'Selecione se quer um código para uma rede WiFi, um link URL ou um contacto (vCard).',
  },
  {
    name: 'Introduzir dados',
    text: 'Preencha os campos necessários, como o nome da rede e a password, ou o endereço web.',
  },
  {
    name: 'Gerar e verificar',
    text: 'O código é gerado instantaneamente. Pode testar o scan diretamente no ecrã.',
  },
  {
    name: 'Descarregar',
    text: 'Guarde o código QR como imagem para imprimir ou partilhar.',
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
  inLanguage: 'pt',
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
      text: 'Privacidade Primeiro: Geração Local',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta gera o código QR diretamente no seu dispositivo. Segurança total para as suas <strong>palavras-passe WiFi</strong> ou <strong>dados pessoais</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privado', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Sem Servidor', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Download', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Dicas de Utilização',
      items: [
        'Dados processados apenas no navegador.',
        'Atenção a maiúsculas/minúsculas no nome da rede.',
        'QR codes estáticos: se mudar a pass, gere um novo.',
        'Teste sempre o scan antes de imprimir.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Contacto',
    labelSsid: 'Nome da Rede (SSID)',
    labelPassword: 'Palavra-passe',
    labelEncryption: 'Segurança',
    labelHidden: 'Rede Oculta',
    labelUrl: 'Endereço Web (URL)',
    labelName: 'Nome',
    labelSurname: 'Apelido',
    labelPhone: 'Telefone',
    labelEmail: 'Email',
    labelOrg: 'Organização / Empresa',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Nenhuma',
    downloadBtn: 'Descarregar PNG',
    privacyMsg: 'Gerado 100% no seu navegador. Dados seguros.',
    placeholderSsid: 'MinhaRede_5G',
    placeholderUrl: 'https://exemplo.pt',
    placeholderPassword: '••••••••',
  },
};
