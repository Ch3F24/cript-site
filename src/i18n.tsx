import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HU from './lang/hu.json';
import EN from './lang/en.json';
import RO from './lang/ro.json';

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: EN
      },
      hu: {
        translation: HU
      },
      ro: {
        translation: RO
      }
    }
  });

export default i18n;