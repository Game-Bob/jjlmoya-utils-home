export function wifi(
  ssid: string,
  password: string,
  encryption: string,
  hidden: boolean
): string {
  if (!ssid) return '';
  const esc = (s: string) => s.replace(/([\\;,:])/g, '\\$1');
  return `WIFI:S:${esc(ssid)};T:${encryption};P:${esc(password)};H:${hidden};;`;
}

export function url(value: string): string {
  return value;
}

export interface VCardData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  org: string;
}

export function vcard(data: VCardData): string {
  if (!Object.values(data).some((v) => v)) return '';
  return `BEGIN:VCARD\nVERSION:3.0\nN:${data.surname};${data.name}\nFN:${data.name} ${data.surname}\nORG:${data.org}\nTEL:${data.phone}\nEMAIL:${data.email}\nEND:VCARD`;
}
