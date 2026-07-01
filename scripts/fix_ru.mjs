import { readFileSync, writeFileSync } from 'fs';

function toCyrillic(text) {
  let result = '';
  let i = 0;

  while (i < text.length) {
    const c4 = text.slice(i, i + 4);
    if (c4.length === 4) {
      const t = { 'shch':'щ', 'SHCH':'Щ', 'Shch':'Щ' };
      if (t[c4]) { result += t[c4]; i += 4; continue; }
    }

    if (i + 2 <= text.length) {
      const two = text.slice(i, i + 2);

      if (two === 'ya' || two === 'YA' || two === 'Ya') { result += ({'ya':'я','YA':'Я','Ya':'Я'})[two]; i += 2; continue; }
      if (two === 'ye' || two === 'YE' || two === 'Ye') { result += ({'ye':'е','YE':'Е','Ye':'Е'})[two]; i += 2; continue; }
      if (two === 'yo' || two === 'YO' || two === 'Yo') { result += ({'yo':'ё','YO':'Ё','Yo':'Ё'})[two]; i += 2; continue; }
      if (two === 'yu' || two === 'YU' || two === 'Yu') { result += ({'yu':'ю','YU':'Ю','Yu':'Ю'})[two]; i += 2; continue; }

      if (two === 'zh' || two === 'ZH' || two === 'Zh') { result += ({'zh':'ж','ZH':'Ж','Zh':'Ж'})[two]; i += 2; continue; }
      if (two === 'ch' || two === 'CH' || two === 'Ch') { result += ({'ch':'ч','CH':'Ч','Ch':'Ч'})[two]; i += 2; continue; }
      if (two === 'sh' || two === 'SH' || two === 'Sh') { result += ({'sh':'ш','SH':'Ш','Sh':'Ш'})[two]; i += 2; continue; }
      if (two === 'kh' || two === 'KH' || two === 'Kh') { result += ({'kh':'х','KH':'Х','Kh':'Х'})[two]; i += 2; continue; }
      if (two === 'ts' || two === 'TS' || two === 'Ts') { result += ({'ts':'ц','TS':'Ц','Ts':'Ц'})[two]; i += 2; continue; }

      const next = text[i + 2] || '';
      if (two === 'iy' && next !== 'a' && next !== 'e' && next !== 'o' && next !== 'u') { result += 'ий'; i += 2; continue; }
      if (two === 'yy' && next !== 'a' && next !== 'e' && next !== 'o' && next !== 'u') { result += 'ый'; i += 2; continue; }
      if (two === 'oy' && next !== 'a' && next !== 'e' && next !== 'o' && next !== 'u') { result += 'ой'; i += 2; continue; }
      if (two === 'ay' && next !== 'a' && next !== 'e' && next !== 'o' && next !== 'u') { result += 'ай'; i += 2; continue; }
      if (two === 'ey' && next !== 'a' && next !== 'e' && next !== 'o' && next !== 'u') { result += 'ей'; i += 2; continue; }
    }

    const c = text[i];
    const smap = {
      'A':'А','a':'а','B':'Б','b':'б','V':'В','v':'в','G':'Г','g':'г',
      'D':'Д','d':'д','E':'Э','e':'е','Z':'З','z':'з','I':'И','i':'и',
      'K':'К','k':'к','L':'Л','l':'л','M':'М','m':'м','N':'Н','n':'н',
      'O':'О','o':'о','P':'П','p':'п','R':'Р','r':'р','S':'С','s':'с',
      'T':'Т','t':'т','U':'У','u':'у','F':'Ф','f':'ф','C':'Ц','c':'ц',
      'H':'Х','h':'х','Y':'Ы','y':'ы','J':'Й','j':'й',
    };
    if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
      result += smap[c] || c;
    } else {
      result += c;
    }
    i++;
  }

  result = result.replace(/WиФи/gi, 'WiFi');
  result = result.replace(/Wи-Фи/gi, 'Wi-Fi');

  return result;
}

function countLatin(s) {
  return (s.match(/[a-zA-Z]/g) || []).length;
}

const filePath = process.argv[2];
let content = readFileSync(filePath, 'utf-8');

content = content.replace(/'([^']*)'/g, (full, text) => {
  if (text.length < 5) return full;
  if (/^(http|\/|\.|#|@|mdi:)/.test(text)) return full;
  if (/^[0-9+\-.,%°\s]+$/.test(text)) return full;
  if (/^(FAQPage|HowTo|SoftwareApplication|UtilityApplication|Question|Answer|HowToStep|Offer|schema-dts)$/.test(text)) return full;

  const latin = countLatin(text);
  if (latin < 5) return full;

  return "'" + toCyrillic(text) + "'";
});

writeFileSync(filePath, content, 'utf-8');
console.log('Done');
