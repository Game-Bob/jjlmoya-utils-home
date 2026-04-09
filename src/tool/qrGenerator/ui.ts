export interface QRGeneratorUI extends Record<string, string> {
  tabWifi: string;
  tabUrl: string;
  tabContact: string;
  labelSsid: string;
  labelPassword: string;
  labelEncryption: string;
  labelHidden: string;
  labelUrl: string;
  labelName: string;
  labelSurname: string;
  labelPhone: string;
  labelEmail: string;
  labelOrg: string;
  encWpa: string;
  encWep: string;
  encNone: string;
  downloadBtn: string;
  privacyMsg: string;
  placeholderSsid: string;
  placeholderUrl: string;
  placeholderPassword: string;
}
