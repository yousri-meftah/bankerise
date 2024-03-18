"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const loadPath = '/locales/{{lng}}/{{ns}}.json';

export const i18nextInstance = i18n
  .createInstance()
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector);

i18nextInstance.init({
  fallbackLng: 'en',
  backend: {
    loadPath
  },
});

export default i18nextInstance;