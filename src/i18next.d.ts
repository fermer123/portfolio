import 'i18next';
import type english from './locales/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof english;
    };
    returnNull: false;
  }
}
