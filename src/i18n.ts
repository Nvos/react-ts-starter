import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

// Translations require backend
// Currently for development testing translations by hand can be done using
// Server present in ./server/index.js which can be ran using node index.js

i18n
  .use(initReactI18next as any)
  .use(Backend as any)
  .init({
    ns: ['admin', 'user'],
    backend: {
      // Provide correct path to backend(it'll be served from same origin)
      // Can use create-react-app proxy in future to backend
      loadPath: 'http://localhost:3001/locales/{{lng}}/{{ns}}.json',
      crossDomain: true,
    },
    interpolation: { escapeValue: false },
    lng: 'en',
    fallbackLng: 'en',
  });

export default i18n;
