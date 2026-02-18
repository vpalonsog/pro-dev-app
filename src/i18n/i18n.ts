import i18next from  'i18next';
import { resources } from './resources';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources,
  ns: ['allTranslations']
});

export const tnl = i18next.t;
export default i18next;