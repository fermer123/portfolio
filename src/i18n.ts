import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '@/locales/en.json';
import russian from '@/locales/ru.json';

const getInitialLanguage = (): 'en' | 'ru' => {
  try {
    return localStorage.getItem('portfolio-language') === 'ru' ? 'ru' : 'en';
  } catch {
    return 'en';
  }
};

const resources = {
  en: { translation: english },
  ru: { translation: russian },
} satisfies Record<'en' | 'ru', { translation: typeof english }>;

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'ru'],
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
